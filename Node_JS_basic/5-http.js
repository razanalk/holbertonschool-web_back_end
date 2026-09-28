const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line.trim() !== '');

      const fields = {};

      lines.forEach((line) => {
        const student = line.split(',');
        const firstName = student[0];
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      let output = `Number of students: ${lines.length}`;

      Object.keys(fields).forEach((field) => {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((students) => {
        res.end(`This is the list of our students\n${students}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;

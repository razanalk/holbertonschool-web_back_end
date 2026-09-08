#!/usr/bin/env python3
"""Find schools with a specific topic."""


def schools_by_topic(mongo_collection, topic):
    """Return schools containing the specified topic."""
    return list(mongo_collection.find({"topics": topic}))

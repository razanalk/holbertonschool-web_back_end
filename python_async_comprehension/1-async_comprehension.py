#!/usr/bin/env python3
"""This module defines an asynchronous comprehension coroutine."""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect ten random numbers using an async comprehension."""
    return [number async for number in async_generator()]

#!/usr/bin/env python3
"""This module provides a function for calculating element lengths."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return each element together with its length."""
    return [(i, len(i)) for i in lst]

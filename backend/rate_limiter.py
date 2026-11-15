import time
from collections import defaultdict, deque
from threading import Lock
from typing import Tuple

class SimpleRateLimiter:
    """Sliding window per-IP rate limiter suitable for public portfolio deployment."""

    def __init__(self, max_requests: int = 20, window_seconds: int = 60):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._history: dict[str, deque[float]] = defaultdict(deque)
        self._lock = Lock()

    def is_allowed(self, ip: str) -> Tuple[bool, int]:
        """
        Checks if the request from the given IP is within rate limits.
        Returns:
            Tuple[bool, int]: (is_allowed, remaining_time_seconds_if_blocked)
        """
        now = time.time()
        cutoff = now - self.window_seconds

        with self._lock:
            queue = self._history[ip]
            # Remove timestamps outside the sliding window
            while queue and queue[0] <= cutoff:
                queue.popleft()

            if len(queue) >= self.max_requests:
                earliest = queue[0]
                retry_after = max(1, int(self.window_seconds - (now - earliest)))
                return False, retry_after

            queue.append(now)
            return True, 0

    def reset(self):
        """Reset rate limiter state (helpful for testing)."""
        with self._lock:
            self._history.clear()

"""
Sealed Rose Python SDK
Official client for Sealed Rose AI Deepfake & Synthetic Media Detection API.
Website: https://sealedrose.com/verify-video
"""

import os
from typing import Optional, Dict, Any, Union
import requests

__version__ = "1.0.0"

class SealedRose:
    def __init__(self, base_url: str = "https://sealedrose.com", api_key: Optional[str] = None):
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key or os.getenv("SEALEDROSE_API_KEY")

    def _get_headers(self) -> Dict[str, str]:
        headers = {}
        if self.api_key:
            headers["Authorization"] = f"Bearer {self.api_key}"
        return headers

    def verify_image(self, url: Optional[str] = None, file_path: Optional[str] = None) -> Dict[str, Any]:
        """
        Verify if an image is AI-generated or synthetic.
        """
        endpoint = f"{self.base_url}/api/verify-image"
        if url:
            resp = requests.post(endpoint, json={"url": url}, headers=self._get_headers())
            resp.raise_for_status()
            return resp.json()
        elif file_path:
            with open(file_path, "rb") as f:
                files = {"image": (os.path.basename(file_path), f)}
                resp = requests.post(endpoint, files=files, headers=self._get_headers())
                resp.raise_for_status()
                return resp.json()
        else:
            raise ValueError("Either 'url' or 'file_path' must be provided")

    def verify_video(self, url: Optional[str] = None, file_path: Optional[str] = None) -> Dict[str, Any]:
        """
        Verify if a video contains deepfake manipulations or synthetic frames.
        """
        endpoint = f"{self.base_url}/api/verify-video"
        if url:
            resp = requests.post(endpoint, json={"url": url}, headers=self._get_headers())
            resp.raise_for_status()
            return resp.json()
        elif file_path:
            with open(file_path, "rb") as f:
                files = {"video": (os.path.basename(file_path), f)}
                resp = requests.post(endpoint, files=files, headers=self._get_headers())
                resp.raise_for_status()
                return resp.json()
        else:
            raise ValueError("Either 'url' or 'file_path' must be provided")

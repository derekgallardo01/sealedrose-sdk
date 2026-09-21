# sealedrose

Official Python SDK for [Sealed Rose](https://sealedrose.com) — AI Deepfake, Synthetic Media, and Video Authenticity Detection.

Detect whether an image or video is AI-generated (Midjourney, Stable Diffusion, Flux, Sora, Runway, Kling, Veo) or an impersonation deepfake.

[![PyPI version](https://img.shields.io/pypi/v/sealedrose.svg)](https://pypi.org/project/sealedrose/)
[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
pip install sealedrose
```

## Quick Start

### Verify Video Authenticity
Check a video URL or local file for deepfakes and face swaps:

```python
from sealedrose import SealedRose

client = SealedRose()

# Check video via public URL
result = client.verify_video(url="https://example.com/sample-video.mp4")

print("Verdict:", result.get("verdict"))
print("Deepfake Score:", result.get("deepfakeScore"))
```

### Verify Image Authenticity
Check an image for generative AI signatures and camera EXIF forensics:

```python
from sealedrose import SealedRose

client = SealedRose()

# Check image via public URL
result = client.verify_image(url="https://example.com/sample-avatar.jpg")

print("Is AI:", result.get("isAi"))
print("Attribution:", result.get("modelAttribution"))
```

## Free Online Verification & Tools

Test media interactively without an account:
* [Free Deepfake Video Detector](https://sealedrose.com/verify-video)
* [AI Image & Reverse Face Verification](https://sealedrose.com/verify-image)
* [Audio & Voice Clone Detector](https://sealedrose.com/tools/ai-voice-detector)
* [Face Swap Detector](https://sealedrose.com/tools/face-swap-detector)
* [OnlyFans Chatter Economy Investigation](https://sealedrose.com/investigations/onlyfans-chatter-economy)

## Browser Extensions
* [Sealed Rose on Chrome Web Store](https://chromewebstore.google.com/detail/sealed-rose-%E2%80%94-ai-image-vi/fhlgnogkkhjnjcclcllfnjbfndbklndn)
* [Sealed Rose on Firefox Add-ons](https://addons.mozilla.org/firefox/addon/sealed-rose-ai-detector/)

## License
MIT © [Sealed Rose](https://sealedrose.com)

# Sealed Rose — AI & Deepfake Detection Engine

Official Docker container for **[Sealed Rose](https://sealedrose.com/verify-video)** — forensic AI detection, synthetic media analysis, and deepfake verification.

- **Primary Verification Engine**: [https://sealedrose.com/verify-video](https://sealedrose.com/verify-video)
- **Official NPM SDK**: [npmjs.com/package/sealedrose](https://www.npmjs.com/package/sealedrose)
- **Official PyPI SDK**: [pypi.org/project/sealedrose/](https://pypi.org/project/sealedrose/)
- **Chrome Extension**: [Chrome Web Store](https://chromewebstore.google.com/detail/sealed-rose-%E2%80%94-ai-image-vi/fhlgnogkkhjnjcclcllfnjbfndbklndn)
- **API Documentation**: [https://sealedrose.com/legal/contact](https://sealedrose.com/legal/contact)

---

## What is Sealed Rose?

Sealed Rose provides multimodal AI forensic detection across images, synthetic video footage, and LLM text:
- **Video Forensics**: Detects generative video models (Sora, Runway Gen-3, Kling, Luma Dream Machine, Google Veo) with per-frame confidence scoring.
- **Deepfake Face Swaps**: Identifies subtle blending artifacts, inconsistent facial lighting, and uncanny temporal jitter.
- **Image Generation Models**: Pinpoints fingerprints of Midjourney, DALL-E 3, Stable Diffusion, and Flux.
- **Camera EXIF Validation**: Validates cryptographic camera sensor signatures vs. synthetic pixel generators.

---

## Quick Start with Docker

Run a quick scan or run the interactive CLI container:

```bash
# Pull the latest image
docker pull derekgallardo01/sealed-rose-detector:latest

# Run the CLI helper
docker run --rm derekgallardo01/sealed-rose-detector:latest --help
```

---

## Developer Ecosystem

Sealed Rose is officially distributed across primary developer ecosystems:
- **Node.js**: `npm install sealedrose`
- **Python**: `pip install sealedrose`
- **Docker**: `docker pull derekgallardo01/sealed-rose-detector`
- **Web App**: Check videos instantly without an account at [sealedrose.com/verify-video](https://sealedrose.com/verify-video).

---

© 2026 Kinetic Helix LLC / Sealed Rose. All rights reserved.

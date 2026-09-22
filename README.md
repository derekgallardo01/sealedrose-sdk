# Sealed Rose SDK & DFIR Media Forensics Tools

[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/sealedrose.svg)](https://www.npmjs.com/package/sealedrose)
[![PyPI version](https://img.shields.io/pypi/v/sealedrose.svg)](https://pypi.org/project/sealedrose/)
[![Docker Pulls](https://img.shields.io/badge/docker-derekgallardo01%2Fsealed--rose--detector-blue.svg)](https://hub.docker.com/r/derekgallardo01/sealed-rose-detector)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/14757/badge)](https://www.bestpractices.dev/projects/14757)

Official open-source developer SDKs and Digital Forensics & Incident Response (DFIR) tools for [Sealed Rose](https://sealedrose.com/verify-video) — AI Deepfake Detection, Synthetic Media Analysis, and Frame-Level Forensics.

Built for DFIR analysts, SOC teams, threat intelligence researchers, and incident response pipelines investigating:
- **Executive & Employee Impersonation** (synthetic video/audio in business communications)
- **Identity & KYC Fraud** (face swap manipulations in onboarding videos)
- **Social Engineering & Phishing** (generative media campaigns)
- **Digital Evidence Verification** (frame-by-frame anomaly detection and model attribution)

---

## Interactive Triage Engine (No Code)

DFIR teams can instantly triage suspicious media files without an account or API setup using the free web verification engine:
👉 **[Sealed Rose Deepfake Video & Image Detector](https://sealedrose.com/verify-video)**

---

## SDKs & Packages

| Language / Tool | Package / Image | Documentation |
|---|---|---|
| **JavaScript / TypeScript** | `npm install sealedrose` | [npm Package](https://www.npmjs.com/package/sealedrose) · [SDK README](./javascript/README.md) |
| **Python** | `pip install sealedrose` | [PyPI Package](https://pypi.org/project/sealedrose/) · [Python README](./python/README.md) |
| **Docker** | `docker pull derekgallardo01/sealed-rose-detector` | [Docker Hub](https://hub.docker.com/r/derekgallardo01/sealed-rose-detector) · [Docker README](./docker/README.md) |

---

## Quick Starts

### 1. Python SDK

Ideal for incident response scripts, Jupyter forensic notebooks, and automated IR triaging pipelines:

```bash
pip install sealedrose
```

```python
from sealedrose import SealedRose

client = SealedRose()

# Triage a suspicious video file collected during an incident
result = client.verify_video(file_path="evidence/suspicious_exec_call.mp4")

print(f"Verdict: {result.get('verdict')}")           # e.g., "AI Deepfake Detected"
print(f"Confidence Score: {result.get('deepfakeScore')}") # 0.0 to 1.0
print(f"Forensic Indicators: {result.get('indicators')}")
```

### 2. Node.js / TypeScript SDK

```bash
npm install sealedrose
```

```typescript
import { SealedRose } from 'sealedrose';

const client = new SealedRose();

// Verify video authenticity via public URL or local stream
const result = await client.verifyVideo({
  url: 'https://incident-evidence.internal/case-2026-092/payload.mp4'
});

console.log(result.verdict);       // "Looks Real" or "AI Deepfake Detected"
console.log(result.deepfakeScore); // Confidence rating
```

### 3. Docker Container

For air-gapped sandboxes or containerized security pipelines:

```bash
docker run -it --rm derekgallardo01/sealed-rose-detector:latest
```

---

## Incident Response & Forensic Capabilities

- **Frame-Level Artifact Detection**: Analyzes compression discrepancies, optical flow discontinuities, facial landmark micro-jitters, and frequency-domain anomalies.
- **Generative AI Attribution**: Identifies artifacts characteristic of diffusion engines (Midjourney, Stable Diffusion, Flux, Sora, Runway Gen-3, Kling, Google Veo).
- **Fast Triaging API**: Designed to plug directly into SOAR workflows, SIEM alerting hooks, and ticketing pipelines.

---

## Free Resources & Browser Tools

- **Web Verification**: [Sealed Rose Video Forensics](https://sealedrose.com/verify-video)
- **Image & Face Authenticity**: [Sealed Rose Image Forensics](https://sealedrose.com/verify-image)
- **Chrome Extension**: [Sealed Rose on Chrome Web Store](https://chromewebstore.google.com/detail/sealed-rose-%E2%80%94-ai-image-vi/fhlgnogkkhjnjcclcllfnjbfndbklndn)
- **Firefox Add-on**: [Sealed Rose on Firefox Add-ons](https://addons.mozilla.org/firefox/addon/sealed-rose-ai-detector/)

---

## License

This project and its SDKs are licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

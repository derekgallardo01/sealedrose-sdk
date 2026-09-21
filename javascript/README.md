# sealedrose

Official JavaScript/TypeScript SDK for [Sealed Rose](https://sealedrose.com) — AI Deepfake, Synthetic Media, and Video Authenticity Detection.

Detect whether an image or video is AI-generated (Midjourney, Stable Diffusion, Flux, Sora, Runway, Kling, Veo) or an impersonation deepfake.

[![npm version](https://img.shields.io/npm/v/sealedrose.svg)](https://www.npmjs.com/package/sealedrose)
[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install sealedrose
```

## Quick Start

### Verify Video Authenticity
Verify whether a video contains face swaps or synthetic frames:

```typescript
import { SealedRose } from 'sealedrose';

const client = new SealedRose();

// Check video via public URL
const result = await client.verifyVideo({
  url: 'https://example.com/sample-video.mp4'
});

console.log(result.verdict); // "Looks Real" or "AI Deepfake Detected"
console.log(result.deepfakeScore); // 0.0 - 1.0
```

### Verify Image Authenticity
Check an image for generative AI signatures and camera EXIF forensics:

```typescript
import { SealedRose } from 'sealedrose';

const client = new SealedRose();

// Check image via public URL
const result = await client.verifyImage({
  url: 'https://example.com/sample-avatar.jpg'
});

console.log('Is AI:', result.isAi);
console.log('Attribution:', result.modelAttribution);
```

## Free Online Tools & Resources

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

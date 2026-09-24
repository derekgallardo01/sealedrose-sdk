# sealedrose-php

Official PHP SDK for [Sealed Rose](https://sealedrose.com/verify-video) — AI Deepfake, Synthetic Media, and Frame-Level Media Forensics.

[![Packagist Version](https://img.shields.io/packagist/v/sealedrose/sealedrose-sdk.svg)](https://packagist.org/packages/sealedrose/sealedrose-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](https://opensource.org/licenses/MIT)

Detect whether an image or video is AI-generated (Midjourney, Stable Diffusion, Flux, Sora, Runway Gen-3, Kling, Google Veo) or an impersonation deepfake.

## Requirements

- PHP >= 7.4
- `curl` extension enabled
- `json` extension enabled

## Installation

```bash
composer require sealedrose/sealedrose-sdk
```

## Quick Start

### 1. Verify Video Authenticity

```php
use SealedRose\SealedRose;

$client = new SealedRose();

// Verify via public URL
$result = $client->verifyVideo('https://example.com/suspicious_statement.mp4');

echo "Verdict: " . $result['verdict'] . "\n";
echo "Deepfake Score: " . $result['deepfakeScore'] . "\n";
```

### 2. Verify Local File Evidence

```php
use SealedRose\SealedRose;

$client = new SealedRose();

$result = $client->verifyVideo(null, '/path/to/evidence.mp4');

print_r($result);
```

## Free Web Triage

Verify video authenticity instantly without writing code:
👉 **[Sealed Rose Deepfake Detector](https://sealedrose.com/verify-video)**

## License

MIT License. See [LICENSE](../LICENSE) for details.

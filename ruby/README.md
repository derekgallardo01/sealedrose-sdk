# sealedrose (Ruby Gem)

Official Ruby Gem for [Sealed Rose](https://sealedrose.com/verify-video) — AI Deepfake, Synthetic Media, and Frame-Level Media Forensics.

[![Gem Version](https://badge.fury.io/rb/sealedrose.svg)](https://badge.fury.io/rb/sealedrose)
[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](https://opensource.org/licenses/MIT)

Detect whether an image or video is AI-generated (Midjourney, Stable Diffusion, Flux, Sora, Runway Gen-3, Kling, Google Veo) or an impersonation deepfake.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'sealedrose'
```

And then execute:

```bash
bundle install
```

Or install it directly:

```bash
gem install sealedrose
```

## Quick Start

```ruby
require 'sealedrose'

client = SealedRose::Client.new

# Verify media via public URL
result = client.verify_video(url: 'https://example.com/suspicious_video.mp4')

puts result['verdict']       # "Looks Real" or "AI Deepfake Detected"
puts result['deepfakeScore'] # 0.0 to 1.0
```

## Free Web Triage

Verify video authenticity instantly without code:
👉 **[Sealed Rose Deepfake Detector](https://sealedrose.com/verify-video)**

## License

MIT License. See [LICENSE](../LICENSE) for details.

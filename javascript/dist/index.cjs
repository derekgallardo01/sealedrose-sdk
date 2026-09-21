'use strict';

class SealedRose {
  constructor(config = {}) {
    this.baseUrl = (config.baseUrl || 'https://sealedrose.com').replace(/\/$/, '');
    this.apiKey = config.apiKey;
  }

  async verifyImage(input) {
    if (!input) throw new Error('Input is required');
    const endpoint = `${this.baseUrl}/api/verify-image`;
    
    if (input.url) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {})
        },
        body: JSON.stringify({ url: input.url })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return await res.json();
    }

    if (input.file) {
      const formData = new FormData();
      formData.append('image', input.file, input.fileName || 'image.jpg');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {})
        },
        body: formData
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return await res.json();
    }

    throw new Error('Either url or file must be provided');
  }

  async verifyVideo(input) {
    if (!input) throw new Error('Input is required');
    const endpoint = `${this.baseUrl}/api/verify-video`;
    
    if (input.url) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {})
        },
        body: JSON.stringify({ url: input.url })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return await res.json();
    }

    if (input.file) {
      const formData = new FormData();
      formData.append('video', input.file, input.fileName || 'video.mp4');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {})
        },
        body: formData
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return await res.json();
    }

    throw new Error('Either url or file must be provided');
  }
}

module.exports = SealedRose;
module.exports.SealedRose = SealedRose;
module.exports.default = SealedRose;

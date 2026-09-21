FROM node:20-alpine
WORKDIR /app
COPY entrypoint.js .
RUN npm install sealedrose@1.0.0
LABEL org.opencontainers.image.title="Sealed Rose — AI & Deepfake Detector"
LABEL org.opencontainers.image.description="Official container for Sealed Rose synthetic media & deepfake detection."
LABEL org.opencontainers.image.url="https://sealedrose.com/verify-video"
LABEL org.opencontainers.image.source="https://sealedrose.com"
LABEL org.opencontainers.image.vendor="Kinetic Helix LLC"
LABEL org.opencontainers.image.version="1.0.0"
ENTRYPOINT ["node", "entrypoint.js"]

<?php

namespace SealedRose;

/**
 * Sealed Rose PHP SDK
 * Official client for Sealed Rose AI Deepfake & Synthetic Media Detection.
 * Website: https://sealedrose.com/verify-video
 */
class SealedRose
{
    private string $baseUrl;
    private ?string $apiKey;

    public function __construct(?string $baseUrl = null, ?string $apiKey = null)
    {
        $this->baseUrl = rtrim($baseUrl ?? 'https://sealedrose.com', '/');
        $this->apiKey = $apiKey ?? getenv('SEALEDROSE_API_KEY') ?: null;
    }

    /**
     * Verify image authenticity against diffusion models and generative alterations.
     *
     * @param string|null $url Public image URL to analyze
     * @param string|null $filePath Local file path
     * @return array Decoded JSON response
     * @throws \InvalidArgumentException|\RuntimeException
     */
    public function verifyImage(?string $url = null, ?string $filePath = null): array
    {
        return $this->dispatch('/api/verify-image', 'image', $url, $filePath);
    }

    /**
     * Verify video authenticity against face swaps, lip-sync, and frame anomalies.
     *
     * @param string|null $url Public video URL to analyze
     * @param string|null $filePath Local file path
     * @return array Decoded JSON response
     * @throws \InvalidArgumentException|\RuntimeException
     */
    public function verifyVideo(?string $url = null, ?string $filePath = null): array
    {
        return $this->dispatch('/api/verify-video', 'video', $url, $filePath);
    }

    private function dispatch(string $endpoint, string $fileField, ?string $url, ?string $filePath): array
    {
        if (!$url && !$filePath) {
            throw new \InvalidArgumentException("Either 'url' or 'filePath' must be provided.");
        }

        $targetUrl = $this->baseUrl . $endpoint;
        $ch = curl_init($targetUrl);

        $headers = [];
        if ($this->apiKey) {
            $headers[] = 'Authorization: Bearer ' . $this->apiKey;
        }

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);

        if ($url) {
            $payload = json_encode(['url' => $url]);
            $headers[] = 'Content-Type: application/json';
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        } else {
            if (!file_exists($filePath)) {
                throw new \InvalidArgumentException("File not found at path: {$filePath}");
            }
            $cFile = new \CURLFile($filePath);
            curl_setopt($ch, CURLOPT_POSTFIELDS, [$fileField => $cFile]);
        }

        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        if ($error) {
            throw new \RuntimeException("cURL execution failed: {$error}");
        }

        if ($httpCode >= 400) {
            throw new \RuntimeException("Sealed Rose API returned HTTP {$httpCode}: {$response}");
        }

        $decoded = json_decode($response, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \RuntimeException("Failed to decode API response JSON: " . json_last_error_msg());
        }

        return $decoded;
    }
}

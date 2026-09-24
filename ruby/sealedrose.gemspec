# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "sealedrose"
  spec.version       = "1.0.0"
  spec.authors       = ["Derek Gallardo"]
  spec.email         = ["derek@sealedrose.com"]

  spec.summary       = "Official Ruby SDK for Sealed Rose AI Deepfake & Synthetic Media Detection."
  spec.description   = "Sealed Rose client library for analyzing video and images for synthetic media, deepfakes, face swaps, and diffusion artifacts."
  spec.homepage      = "https://sealedrose.com/verify-video"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"]    = "https://sealedrose.com/verify-video"
  spec.metadata["source_code_uri"] = "https://github.com/derekgallardo01/sealedrose-sdk"
  spec.metadata["bug_tracker_uri"] = "https://sealedrose.com/contact"
  spec.metadata["documentation_uri"] = "https://sealedrose.com/verify-video"

  spec.files = Dir["lib/**/*.rb", "README.md", "LICENSE"]
  spec.require_paths = ["lib"]

  spec.add_dependency "net-http"
end

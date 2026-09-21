export interface SealedRoseConfig {
  baseUrl?: string;
  apiKey?: string;
}

export interface VerifyImageResult {
  isAi: boolean;
  aiScore: number;
  deepfakeScore?: number;
  modelAttribution?: string;
  verdict: string;
  raw?: Record<string, any>;
  [key: string]: any;
}

export interface VerifyVideoResult {
  isDeepfake: boolean;
  deepfakeScore: number;
  verdict: string;
  framesAnalyzed?: number;
  suspiciousFrames?: number[];
  raw?: Record<string, any>;
  [key: string]: any;
}

export declare class SealedRose {
  private baseUrl: string;
  private apiKey?: string;
  constructor(config?: SealedRoseConfig);
  verifyImage(input: { url: string } | { file: any; fileName?: string }): Promise<VerifyImageResult>;
  verifyVideo(input: { url: string } | { file: any; fileName?: string }): Promise<VerifyVideoResult>;
}

export default SealedRose;

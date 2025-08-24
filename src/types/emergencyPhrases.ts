// Enhanced Emergency Phrases Types with TTS Support

export interface EmergencyPhrase {
  english: string;
  local: string;
  localLanguage: string;
  pronunciation?: string;
  phonetic?: string;
  audioUrl?: string;
  fallbackUrls?: string[];
  voiceInfo?: {
    voiceName: string;
    gender: 'Female' | 'Male';
    displayName: string;
  };
}

export interface PronunciationFeature {
  useWebSpeechAPI: boolean;
  fallbackToEdgeTTS: boolean;
  supportedLanguages: string[];
  instructions: string;
  femaleVoicePreferred: boolean;
}

export interface EmergencyPhrasesConfig {
  phrases: EmergencyPhrase[];
  pronunciationFeature: PronunciationFeature;
  ttsServiceType: 'edge' | 'web-speech' | 'hybrid';
  audioFormat: 'mp3' | 'wav';
}

// Standard emergency phrases in English (for translation reference)
export const STANDARD_EMERGENCY_PHRASES = [
  "Help!",
  "Call the police!",  
  "I need help!",
  "Emergency!",
  "Stop!",
  "Go away!",
  "Leave me alone!",
  "I feel unsafe."
] as const;

export type StandardEmergencyPhrase = typeof STANDARD_EMERGENCY_PHRASES[number];
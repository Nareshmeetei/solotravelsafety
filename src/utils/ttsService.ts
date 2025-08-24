// Enhanced TTS Service for Emergency Phrases
// Supports 33+ languages with female voices using Edge TTS API

export interface TTSConfig {
  text: string;
  language: string;
  voice?: string;
  rate?: number;
  pitch?: number;
}

export interface TTSVoice {
  name: string;
  language: string;
  gender: 'Female' | 'Male';
  displayName: string;
}

// Language to Edge TTS voice mapping with female voices prioritized
export const FEMALE_VOICES: Record<string, TTSVoice> = {
  // European Languages
  'Dutch': { name: 'nl-NL-ColetteNeural', language: 'nl-NL', gender: 'Female', displayName: 'Colette (Dutch Female)' },
  'German': { name: 'de-DE-KatjaNeural', language: 'de-DE', gender: 'Female', displayName: 'Katja (German Female)' },
  'German (Swiss)': { name: 'de-CH-LeniNeural', language: 'de-CH', gender: 'Female', displayName: 'Leni (Swiss German Female)' },
  'French': { name: 'fr-FR-DeniseNeural', language: 'fr-FR', gender: 'Female', displayName: 'Denise (French Female)' },
  'Spanish': { name: 'es-ES-ElviraNeural', language: 'es-ES', gender: 'Female', displayName: 'Elvira (Spanish Female)' },
  'Spanish (Argentine)': { name: 'es-AR-ElenaNeural', language: 'es-AR', gender: 'Female', displayName: 'Elena (Argentine Spanish Female)' },
  'Italian': { name: 'it-IT-ElsaNeural', language: 'it-IT', gender: 'Female', displayName: 'Elsa (Italian Female)' },
  'Portuguese': { name: 'pt-PT-RaquelNeural', language: 'pt-PT', gender: 'Female', displayName: 'Raquel (Portuguese Female)' },
  'Greek': { name: 'el-GR-AthinaNeural', language: 'el-GR', gender: 'Female', displayName: 'Athina (Greek Female)' },
  'Czech': { name: 'cs-CZ-VlastaNeural', language: 'cs-CZ', gender: 'Female', displayName: 'Vlasta (Czech Female)' },
  'Danish': { name: 'da-DK-ChristelNeural', language: 'da-DK', gender: 'Female', displayName: 'Christel (Danish Female)' },
  'Swedish': { name: 'sv-SE-SofiaNeural', language: 'sv-SE', gender: 'Female', displayName: 'Sofia (Swedish Female)' },
  'Icelandic': { name: 'is-IS-GudrunNeural', language: 'is-IS', gender: 'Female', displayName: 'Gudrun (Icelandic Female)' },
  'Irish': { name: 'ga-IE-OrlaNeural', language: 'ga-IE', gender: 'Female', displayName: 'Orla (Irish Female)' },

  // Asian Languages  
  'Japanese': { name: 'ja-JP-NanamiNeural', language: 'ja-JP', gender: 'Female', displayName: 'Nanami (Japanese Female)' },
  'Korean': { name: 'ko-KR-SunHiNeural', language: 'ko-KR', gender: 'Female', displayName: 'SunHi (Korean Female)' },
  'Mandarin': { name: 'zh-CN-XiaoxiaoNeural', language: 'zh-CN', gender: 'Female', displayName: 'Xiaoxiao (Mandarin Female)' },
  'Thai': { name: 'th-TH-PremwadeeNeural', language: 'th-TH', gender: 'Female', displayName: 'Premwadee (Thai Female)' },
  'Vietnamese': { name: 'vi-VN-HoaiMyNeural', language: 'vi-VN', gender: 'Female', displayName: 'HoaiMy (Vietnamese Female)' },
  'Bahasa Indonesia': { name: 'id-ID-GadisNeural', language: 'id-ID', gender: 'Female', displayName: 'Gadis (Indonesian Female)' },
  'Malay': { name: 'ms-MY-YasminNeural', language: 'ms-MY', gender: 'Female', displayName: 'Yasmin (Malay Female)' },
  'Tamil': { name: 'ta-IN-PallaviNeural', language: 'ta-IN', gender: 'Female', displayName: 'Pallavi (Tamil Female)' },

  // Other Languages
  'Turkish': { name: 'tr-TR-EmelNeural', language: 'tr-TR', gender: 'Female', displayName: 'Emel (Turkish Female)' },
  'Arabic': { name: 'ar-EG-SalmaNeural', language: 'ar-EG', gender: 'Female', displayName: 'Salma (Egyptian Arabic Female)' },
  'Urdu': { name: 'ur-PK-UzmaNeural', language: 'ur-PK', gender: 'Female', displayName: 'Uzma (Urdu Female)' },
  'Afrikaans': { name: 'af-ZA-AdriNeural', language: 'af-ZA', gender: 'Female', displayName: 'Adri (Afrikaans Female)' },
  
  // Special cases - using English female voices for languages without native support
  'Filipino': { name: 'fil-PH-BlessicaNeural', language: 'fil-PH', gender: 'Female', displayName: 'Blessica (Filipino Female)' },
  'Haitian Creole': { name: 'en-US-JennyNeural', language: 'en-US', gender: 'Female', displayName: 'Jenny (English Female)' }, // Fallback
  'Te Reo Maori': { name: 'en-NZ-MollyNeural', language: 'en-NZ', gender: 'Female', displayName: 'Molly (New Zealand English Female)' }, // Fallback

  // Default English
  'English': { name: 'en-US-AriaNeural', language: 'en-US', gender: 'Female', displayName: 'Aria (English Female)' },
};

export class TTSService {
  private static instance: TTSService;
  private isSupported: boolean;

  constructor() {
    this.isSupported = typeof window !== 'undefined';
  }

  static getInstance(): TTSService {
    if (!TTSService.instance) {
      TTSService.instance = new TTSService();
    }
    return TTSService.instance;
  }

  // Generate Edge TTS audio URL
  generateEdgeTTSUrl(config: TTSConfig): string {
    const voice = FEMALE_VOICES[config.language];
    if (!voice) {
      console.warn(`No female voice found for language: ${config.language}. Using default English.`);
      const defaultVoice = FEMALE_VOICES['English'];
      return `https://api.streamelements.com/kappa/v2/speech?voice=${defaultVoice.name}&text=${encodeURIComponent(config.text)}`;
    }

    return `https://api.streamelements.com/kappa/v2/speech?voice=${voice.name}&text=${encodeURIComponent(config.text)}`;
  }

  // Alternative Edge TTS URL using different service
  generateAlternativeEdgeTTSUrl(config: TTSConfig): string {
    const voice = FEMALE_VOICES[config.language];
    if (!voice) {
      const defaultVoice = FEMALE_VOICES['English'];
      return `https://speech.platform.bing.com/synthesize?api-version=2019-06-01&voice=${defaultVoice.name}&text=${encodeURIComponent(config.text)}`;
    }

    return `https://speech.platform.bing.com/synthesize?api-version=2019-06-01&voice=${voice.name}&text=${encodeURIComponent(config.text)}`;
  }

  // Web Speech API fallback
  async speakWithWebSpeechAPI(config: TTSConfig): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isSupported || !window.speechSynthesis) {
        reject(new Error('Web Speech API not supported'));
        return;
      }

      const utterance = new SpeechSynthesisUtterance(config.text);
      const voice = FEMALE_VOICES[config.language];
      
      if (voice) {
        utterance.lang = voice.language;
      }
      
      utterance.rate = config.rate || 0.9;
      utterance.pitch = config.pitch || 1.1; // Slightly higher pitch for female voice
      
      // Try to find a female voice
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => 
        v.lang.startsWith(voice?.language.split('-')[0] || 'en') && 
        (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'))
      );
      
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (error) => reject(error);

      speechSynthesis.speak(utterance);
    });
  }

  // Get voice information for a language
  getVoiceInfo(language: string): TTSVoice | null {
    return FEMALE_VOICES[language] || null;
  }

  // Get all supported languages
  getSupportedLanguages(): string[] {
    return Object.keys(FEMALE_VOICES);
  }

  // Test if a language is supported
  isLanguageSupported(language: string): boolean {
    return language in FEMALE_VOICES;
  }

  // Generate pronunciation guide URL (for display purposes)
  generatePronunciationUrl(config: TTSConfig): string {
    return this.generateEdgeTTSUrl(config);
  }

  // Multiple fallback URL generation
  generateFallbackUrls(config: TTSConfig): string[] {
    return [
      this.generateEdgeTTSUrl(config),
      this.generateAlternativeEdgeTTSUrl(config),
      // Google Translate fallback for unsupported languages
      `https://translate.google.com/translate_tts?ie=UTF-8&tl=${this.getGoogleTTSLanguageCode(config.language)}&q=${encodeURIComponent(config.text)}&client=tw-ob`
    ];
  }

  private getGoogleTTSLanguageCode(language: string): string {
    const codeMap: Record<string, string> = {
      'Dutch': 'nl',
      'German': 'de',
      'German (Swiss)': 'de',
      'French': 'fr',
      'Spanish': 'es',
      'Spanish (Argentine)': 'es',
      'Italian': 'it',
      'Portuguese': 'pt',
      'Greek': 'el',
      'Czech': 'cs',
      'Danish': 'da',
      'Swedish': 'sv',
      'Japanese': 'ja',
      'Korean': 'ko',
      'Mandarin': 'zh',
      'Thai': 'th',
      'Vietnamese': 'vi',
      'Bahasa Indonesia': 'id',
      'Turkish': 'tr',
      'Arabic': 'ar',
      'Urdu': 'ur',
      'Afrikaans': 'af',
      'Filipino': 'tl',
      'English': 'en'
    };

    return codeMap[language] || 'en';
  }
}

export const ttsService = TTSService.getInstance();
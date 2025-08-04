// Utilitários para trabalhar com URLs de vídeo

export interface VideoData {
  platform: string;
  id: string;
  embedUrl: string;
  thumbnailUrl?: string;
}

export const detectVideoPlatform = (url: string): VideoData | null => {
  if (!url) return null;

  // YouTube - suporta vários formatos
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/v\/)([^&\n?#]+)/
  ];

  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match) {
      return {
        platform: 'youtube',
        id: match[1],
        embedUrl: `https://www.youtube.com/embed/${match[1]}`,
        thumbnailUrl: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
      };
    }
  }

  // Vimeo
  const vimeoPattern = /(?:vimeo\.com\/)([0-9]+)/;
  const vimeoMatch = url.match(vimeoPattern);
  if (vimeoMatch) {
    return {
      platform: 'vimeo',
      id: vimeoMatch[1],
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
      thumbnailUrl: `https://vumbnail.com/${vimeoMatch[1]}.jpg`
    };
  }

  // Wistia
  const wistiaPattern = /(?:wistia\.com\/medias\/|wi\.st\/)([a-zA-Z0-9]+)/;
  const wistiaMatch = url.match(wistiaPattern);
  if (wistiaMatch) {
    return {
      platform: 'wistia',
      id: wistiaMatch[1],
      embedUrl: `https://fast.wistia.net/embed/iframe/${wistiaMatch[1]}`,
      thumbnailUrl: `https://embed-ssl.wistia.com/deliveries/${wistiaMatch[1]}.jpg`
    };
  }

  // Loom
  const loomPattern = /(?:loom\.com\/share\/)([a-zA-Z0-9]+)/;
  const loomMatch = url.match(loomPattern);
  if (loomMatch) {
    return {
      platform: 'loom',
      id: loomMatch[1],
      embedUrl: `https://www.loom.com/embed/${loomMatch[1]}`
    };
  }

  // Twitch
  const twitchPattern = /(?:twitch\.tv\/videos\/)([0-9]+)/;
  const twitchMatch = url.match(twitchPattern);
  if (twitchMatch) {
    return {
      platform: 'twitch',
      id: twitchMatch[1],
      embedUrl: `https://player.twitch.tv/?video=${twitchMatch[1]}&parent=${window.location.hostname}`
    };
  }

  // Dailymotion
  const dailymotionPattern = /(?:dailymotion\.com\/video\/)([a-zA-Z0-9]+)/;
  const dailymotionMatch = url.match(dailymotionPattern);
  if (dailymotionMatch) {
    return {
      platform: 'dailymotion',
      id: dailymotionMatch[1],
      embedUrl: `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}`
    };
  }

  return null;
};

export const generateThumbnailUrl = (platform: string, videoId: string): string | null => {
  switch (platform) {
    case 'youtube':
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    case 'vimeo':
      return `https://vumbnail.com/${videoId}.jpg`;
    case 'wistia':
      return `https://embed-ssl.wistia.com/deliveries/${videoId}.jpg`;
    default:
      return null;
  }
};

export const buildEmbedUrl = (platform: string, videoId: string, options: {
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
} = {}): string => {
  const { autoplay = false, muted = false, controls = true, loop = false } = options;

  switch (platform) {
    case 'youtube':
      const youtubeParams = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        mute: muted ? '1' : '0',
        controls: controls ? '1' : '0',
        loop: loop ? '1' : '0',
        rel: '0',
        modestbranding: '1'
      });
      return `https://www.youtube.com/embed/${videoId}?${youtubeParams}`;

    case 'vimeo':
      const vimeoParams = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        muted: muted ? '1' : '0',
        controls: controls ? '1' : '0',
        loop: loop ? '1' : '0',
        title: '0',
        byline: '0',
        portrait: '0'
      });
      return `https://player.vimeo.com/video/${videoId}?${vimeoParams}`;

    case 'wistia':
      const wistiaParams = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        muted: muted ? '1' : '0'
      });
      return `https://fast.wistia.net/embed/iframe/${videoId}?${wistiaParams}`;

    case 'loom':
      const loomParams = new URLSearchParams({
        autoplay: autoplay ? '1' : '0'
      });
      return `https://www.loom.com/embed/${videoId}?${loomParams}`;

    case 'twitch':
      const twitchParams = new URLSearchParams({
        video: videoId,
        parent: window.location.hostname,
        autoplay: autoplay ? 'true' : 'false',
        muted: muted ? 'true' : 'false'
      });
      return `https://player.twitch.tv/?${twitchParams}`;

    case 'dailymotion':
      const dailymotionParams = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        mute: muted ? '1' : '0',
        controls: controls ? '1' : '0'
      });
      return `https://www.dailymotion.com/embed/video/${videoId}?${dailymotionParams}`;

    default:
      return '';
  }
};
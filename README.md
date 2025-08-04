# IMPACTAvet - Landing Page

Uma landing page moderna e responsiva para o evento IMPACTAvet, construída com React, TypeScript e Tailwind CSS.

## 🎥 Componente de Incorporação de Vídeo

Este projeto inclui um sistema completo de incorporação de vídeos que suporta múltiplas plataformas:

### Plataformas Suportadas

- **YouTube** - Todos os formatos de URL
- **Vimeo** - URLs padrão do Vimeo
- **Wistia** - Links de mídia do Wistia
- **Loom** - Vídeos compartilhados do Loom
- **Twitch** - Vídeos do Twitch
- **Dailymotion** - Vídeos do Dailymotion

### Componentes Disponíveis

#### 1. VideoEmbed (Básico)
```tsx
import VideoEmbed from './components/VideoEmbed';

<VideoEmbed
  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Meu Vídeo"
  autoplay={false}
  thumbnailUrl="https://exemplo.com/thumbnail.jpg" // Opcional
/>
```

#### 2. VideoEmbedAdvanced (Avançado)
```tsx
import VideoEmbedAdvanced from './components/VideoEmbedAdvanced';

<VideoEmbedAdvanced
  videoUrl="https://vimeo.com/123456789"
  title="Vídeo Avançado"
  autoplay={false}
  muted={false}
  controls={true}
  loop={false}
  showSettings={true}
  onPlay={() => console.log('Vídeo iniciado')}
  onPause={() => console.log('Vídeo pausado')}
  onEnd={() => console.log('Vídeo finalizado')}
/>
```

### Funcionalidades

#### Detecção Automática de Plataforma
O sistema detecta automaticamente a plataforma do vídeo baseado na URL:

```tsx
import { detectVideoPlatform } from './utils/videoUtils';

const videoData = detectVideoPlatform('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
// Retorna: { platform: 'youtube', id: 'dQw4w9WgXcQ', embedUrl: '...', thumbnailUrl: '...' }
```

#### Geração de Thumbnails
Thumbnails são geradas automaticamente para plataformas suportadas:

```tsx
import { generateThumbnailUrl } from './utils/videoUtils';

const thumbnail = generateThumbnailUrl('youtube', 'dQw4w9WgXcQ');
// Retorna: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
```

#### URLs de Incorporação Personalizadas
Construa URLs de incorporação com opções customizadas:

```tsx
import { buildEmbedUrl } from './utils/videoUtils';

const embedUrl = buildEmbedUrl('youtube', 'dQw4w9WgXcQ', {
  autoplay: true,
  muted: true,
  controls: false,
  loop: true
});
```

### Exemplos de URLs Suportadas

#### YouTube
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- `https://youtu.be/dQw4w9WgXcQ`
- `https://www.youtube.com/embed/dQw4w9WgXcQ`

#### Vimeo
- `https://vimeo.com/123456789`

#### Wistia
- `https://company.wistia.com/medias/abc123def456`
- `https://wi.st/abc123def456`

#### Loom
- `https://www.loom.com/share/abc123def456`

#### Twitch
- `https://www.twitch.tv/videos/123456789`

#### Dailymotion
- `https://www.dailymotion.com/video/abc123def`

### Personalização

#### Estilos CSS
Os componentes usam classes Tailwind CSS e podem ser personalizados:

```tsx
<VideoEmbed
  videoUrl="..."
  className="rounded-2xl shadow-2xl border-4 border-orange-500"
/>
```

#### Callbacks de Eventos
O componente avançado suporta callbacks para eventos:

```tsx
<VideoEmbedAdvanced
  videoUrl="..."
  onPlay={() => {
    // Analytics, tracking, etc.
    gtag('event', 'video_play', { video_title: 'Meu Vídeo' });
  }}
  onPause={() => {
    // Pausar outros elementos da página
  }}
  onEnd={() => {
    // Mostrar call-to-action, próximo vídeo, etc.
  }}
/>
```

## 🚀 Como Usar

1. Importe o componente desejado
2. Forneça a URL do vídeo
3. Configure as opções conforme necessário
4. O componente detectará automaticamente a plataforma e renderizará o player

## 📱 Responsividade

Todos os componentes são totalmente responsivos e se adaptam a diferentes tamanhos de tela, mantendo a proporção de aspecto correta dos vídeos.

## 🎨 Temas

Os componentes seguem o design system do projeto, mas podem ser facilmente customizados através de props de className e CSS personalizado.
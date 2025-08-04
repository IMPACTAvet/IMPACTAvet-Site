import React, { useEffect, useRef, useState } from 'react';

interface WistiaEmbedProps {
  mediaId: string;
  aspectRatio?: number;
  title?: string;
  className?: string;
}

const WistiaEmbed: React.FC<WistiaEmbedProps> = ({
  mediaId,
  aspectRatio = 0.5660377358490566,
  title = "Vídeo",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carregar o script do player do Wistia
    const loadWistiaPlayer = () => {
      if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
        const playerScript = document.createElement('script');
        playerScript.src = 'https://fast.wistia.com/player.js';
        playerScript.async = true;
        document.head.appendChild(playerScript);
      }

      // Carregar o script específico do vídeo
      if (!document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`)) {
        const embedScript = document.createElement('script');
        embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
        embedScript.async = true;
        embedScript.type = 'module';
        document.head.appendChild(embedScript);
      }

      // Adicionar estilos específicos do Wistia
      if (!document.querySelector(`style[data-wistia-id="${mediaId}"]`)) {
        const style = document.createElement('style');
        style.setAttribute('data-wistia-id', mediaId);
        style.textContent = `
          wistia-player[media-id='${mediaId}']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
            display: block;
            filter: blur(5px);
          }
        `;
        document.head.appendChild(style);
      }

      setIsLoaded(true);
    };

    loadWistiaPlayer();
  }, [mediaId, aspectRatio]);

  return (
    <div className={`${className}`} ref={containerRef}>
      {isLoaded && (
        <wistia-player 
          media-id={mediaId} 
          aspect={aspectRatio.toString()}
          style={{ width: '320px', height: '566px' }}
        />
      )}
    </div>
  );
};

export default WistiaEmbed;
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface VideoEmbedProps {
  videoUrl?: string;
  thumbnailUrl?: string;
  title?: string;
  autoplay?: boolean;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  videoUrl,
  thumbnailUrl,
  title = "Assista ao vídeo de apresentação",
  autoplay = false,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Função para detectar o tipo de plataforma e extrair ID do vídeo
  const getVideoEmbedData = (url: string) => {
    if (!url) return null;

    // YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {
      return {
        platform: 'youtube',
        id: youtubeMatch[1],
        embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`,
        thumbnailUrl: thumbnailUrl || `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`
      };
    }

    // Vimeo
    const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) {
      return {
        platform: 'vimeo',
        id: vimeoMatch[1],
        embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=${autoplay ? 1 : 0}&title=0&byline=0&portrait=0`,
        thumbnailUrl: thumbnailUrl || `https://vumbnail.com/${vimeoMatch[1]}.jpg`
      };
    }

    // Wistia
    const wistiaRegex = /(?:wistia\.com\/medias\/|wi\.st\/)([a-zA-Z0-9]+)/;
    const wistiaMatch = url.match(wistiaRegex);
    if (wistiaMatch) {
      return {
        platform: 'wistia',
        id: wistiaMatch[1],
        embedUrl: `https://fast.wistia.net/embed/iframe/${wistiaMatch[1]}?autoplay=${autoplay ? 1 : 0}`,
        thumbnailUrl: thumbnailUrl || `https://embed-ssl.wistia.com/deliveries/${wistiaMatch[1]}.jpg`
      };
    }

    // Loom
    const loomRegex = /(?:loom\.com\/share\/)([a-zA-Z0-9]+)/;
    const loomMatch = url.match(loomRegex);
    if (loomMatch) {
      return {
        platform: 'loom',
        id: loomMatch[1],
        embedUrl: `https://www.loom.com/embed/${loomMatch[1]}?autoplay=${autoplay ? 1 : 0}`,
        thumbnailUrl: thumbnailUrl
      };
    }

    return null;
  };

  const videoData = videoUrl ? getVideoEmbedData(videoUrl) : null;

  const handlePlayClick = () => {
    if (videoData) {
      setIsPlaying(true);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setShowModal(false);
  };

  // Se não há URL de vídeo, mostra o placeholder padrão
  if (!videoUrl || !videoData) {
    return (
      <div className={`aspect-video bg-gradient-to-br from-black/40 to-transparent rounded-xl flex items-center justify-center relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-orange-500/50"></div>
        <button className="relative z-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 pulse-animation">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Video Thumbnail */}
      <div className={`aspect-video rounded-xl relative overflow-hidden cursor-pointer group ${className}`}>
        {videoData.thumbnailUrl ? (
          <img
            src={videoData.thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback para gradient se a thumbnail falhar
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-gradient-to-br', 'from-black/40', 'to-transparent');
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-black/40 to-transparent"></div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Play Button */}
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 pulse-animation">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </div>
        </button>

        {/* Platform Badge */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {videoData.platform}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Iframe */}
            <iframe
              src={videoData.embedUrl}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoEmbed;
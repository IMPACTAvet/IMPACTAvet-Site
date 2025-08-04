import React, { useState, useEffect } from 'react';
import { Play, X, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import { detectVideoPlatform, buildEmbedUrl } from '../utils/videoUtils';

interface VideoEmbedAdvancedProps {
  videoUrl: string;
  thumbnailUrl?: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  className?: string;
  showSettings?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
}

const VideoEmbedAdvanced: React.FC<VideoEmbedAdvancedProps> = ({
  videoUrl,
  thumbnailUrl,
  title = "Vídeo",
  autoplay = false,
  muted = false,
  controls = true,
  loop = false,
  className = "",
  showSettings = false,
  onPlay,
  onPause,
  onEnd
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [videoSettings, setVideoSettings] = useState({
    autoplay,
    muted,
    controls,
    loop
  });

  const videoData = detectVideoPlatform(videoUrl);

  useEffect(() => {
    if (isPlaying && onPlay) {
      onPlay();
    }
  }, [isPlaying, onPlay]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setShowModal(false);
    if (onPause) {
      onPause();
    }
  };

  const handleSettingsChange = (setting: string, value: boolean) => {
    setVideoSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  if (!videoData) {
    return (
      <div className={`aspect-video bg-gray-200 rounded-xl flex items-center justify-center ${className}`}>
        <p className="text-gray-500">URL de vídeo inválida</p>
      </div>
    );
  }

  const embedUrl = buildEmbedUrl(videoData.platform, videoData.id, videoSettings);
  const thumbnailSrc = thumbnailUrl || videoData.thumbnailUrl;

  return (
    <>
      {/* Video Thumbnail */}
      <div className={`aspect-video rounded-xl relative overflow-hidden cursor-pointer group ${className}`}>
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-gradient-to-br', 'from-gray-400', 'to-gray-600');
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
        
        {/* Controls Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </button>
        </div>

        {/* Platform Badge */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {videoData.platform}
        </div>

        {/* Settings Button */}
        {showSettings && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSettingsPanel(!showSettingsPanel);
            }}
            className="absolute top-4 right-4 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        )}

        {/* Settings Panel */}
        {showSettingsPanel && (
          <div className="absolute top-14 right-4 bg-white rounded-lg shadow-lg p-4 min-w-48 z-10">
            <h4 className="font-semibold text-gray-800 mb-3">Configurações</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={videoSettings.autoplay}
                  onChange={(e) => handleSettingsChange('autoplay', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">Reprodução automática</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={videoSettings.muted}
                  onChange={(e) => handleSettingsChange('muted', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">Silenciado</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={videoSettings.controls}
                  onChange={(e) => handleSettingsChange('controls', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">Mostrar controles</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={videoSettings.loop}
                  onChange={(e) => handleSettingsChange('loop', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">Repetir</span>
              </label>
            </div>
          </div>
        )}

        {/* Video Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-white/80 text-sm">Clique para assistir</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            {/* Header */}
            <div className="absolute -top-16 left-0 right-0 flex items-center justify-between text-white">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSettingsChange('muted', !videoSettings.muted)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  {videoSettings.muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Iframe */}
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoEmbedAdvanced;
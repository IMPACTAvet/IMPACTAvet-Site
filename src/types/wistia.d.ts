// Declarações de tipos para o Wistia Player
declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'media-id': string;
        aspect?: string;
        autoplay?: boolean;
        muted?: boolean;
        playsinline?: boolean;
        preload?: 'none' | 'metadata' | 'auto';
        responsive?: boolean;
        time?: string;
        volume?: string;
      },
      HTMLElement
    >;
  }
}

// Tipos globais do Wistia
declare global {
  interface Window {
    Wistia?: any;
    _wq?: any[];
  }
}
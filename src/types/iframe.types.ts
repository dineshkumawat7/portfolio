export interface IframeProps {
  src: string;
  title?: string;
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
  loading?: "eager" | "lazy";
  sandbox?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | string;
  onLoad?: () => void;
}

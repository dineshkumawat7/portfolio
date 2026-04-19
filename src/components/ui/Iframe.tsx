import { useEffect, useRef, useState } from "react";
import type { IframeProps } from "../../types/iframe.types";

const aspectRatioMap: Record<string, string> = {
  "16/9": "pb-[56.25%]",
  "4/3": "pb-[75%]",
  "1/1": "pb-[100%]",
};

const Iframe: React.FC<IframeProps> = ({
  src,
  title = "Embedded Content",
  className = "",
  allow = "fullscreen",
  allowFullScreen = false,
  loading = "lazy",
  sandbox,
  aspectRatio = "16/9",
  onLoad,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const ratioClass = aspectRatioMap[aspectRatio] || "pb-[56.25%]";

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div className={`relative w-full ${ratioClass} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <span className="text-sm text-gray-500">Loading...</span>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0 shadow"
        allow={allow}
        allowFullScreen={allowFullScreen}
        loading={loading}
        sandbox={sandbox}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Iframe;

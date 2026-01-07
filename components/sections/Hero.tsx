'use client';

import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is fine
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full-screen video background - like DeltaVee */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleVideoError}
          >
            <source
              src="/videos/aerofold-hero.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center px-4 text-white/20">
              <p className="text-small">[PLACEHOLDER: AeroFold product demonstration video]</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

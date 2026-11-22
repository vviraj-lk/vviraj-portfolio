import React from 'react';

export const WaveBackground: React.FC = () => {
  return (
    <>
      <div className="bg-field" aria-hidden="true" />
      <div className="bg-waves" aria-hidden="true">
        <svg className="wave-layer wave-1" viewBox="0 0 2880 640" preserveAspectRatio="none">
          <defs>
            <path
              id="wave-path-1"
              d="M0,640 L0,260 C120,180 240,180 360,260 C480,340 600,340 720,260 C840,180 960,180 1080,260 C1200,340 1320,340 1440,260 L1440,640 Z"
            />
          </defs>
          <use href="#wave-path-1" x="0" />
          <use href="#wave-path-1" x="1440" />
        </svg>
        <svg className="wave-layer wave-2" viewBox="0 0 2880 640" preserveAspectRatio="none">
          <defs>
            <path
              id="wave-path-2"
              d="M0,640 L0,340 C140,250 260,250 400,340 C540,430 660,430 800,340 C940,250 1060,250 1200,340 C1320,410 1400,410 1440,340 L1440,640 Z"
            />
          </defs>
          <use href="#wave-path-2" x="0" />
          <use href="#wave-path-2" x="1440" />
        </svg>
        <svg className="wave-layer wave-3" viewBox="0 0 2880 640" preserveAspectRatio="none">
          <defs>
            <path
              id="wave-path-3"
              d="M0,640 L0,420 C160,480 320,480 480,420 C640,360 800,360 960,420 C1120,480 1280,480 1440,420 L1440,640 Z"
            />
          </defs>
          <use href="#wave-path-3" x="0" />
          <use href="#wave-path-3" x="1440" />
        </svg>
      </div>
    </>
  );
};

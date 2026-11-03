import React from 'react';

interface NeomedikaLogoProps {
  /**
   * 'vertical' renders the full official vertical lockup (Hexagonal N symbol + lowercase neomedika + tagline)
   * 'compact' renders the single-line Top Bar lockup (Hexagonal N symbol + lowercase neomedika wordmark)
   * 'symbol' renders the standalone Hexagonal N symbol (minimum 48px digital per Brand Guideline v0.9)
   */
  variant?: 'vertical' | 'compact' | 'symbol';
  /**
   * Per Brand Guideline v0.9 Section 08:
   * "Untuk foto atau bidang berwarna, sediakan panel putih yang mencakup seluruh ruang aman."
   */
  onDarkBackground?: boolean;
  className?: string;
}

/**
 * Official Neomedika Hexagonal "N" Symbol SVG
 * Faithfully constructed from Neomedika_Brand_Guideline_v0.9.pdf:
 * - Magenta (#EE498E) top gradient to Purple (#903595) mid to Deep Purple (#342077) bottom
 * - Local fold shadow (#241154) at inner ribbon intersections
 */
export function NeomedikaSymbolSvg({
  size = 48,
  idPrefix = 'neo-brand',
}: {
  size?: number;
  idPrefix?: string;
}) {
  const leftGradId = `${idPrefix}-grad-left`;
  const rightGradId = `${idPrefix}-grad-right`;
  const centerGradId = `${idPrefix}-grad-center`;
  const shadowGradId = `${idPrefix}-grad-shadow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="neomedika hexagonal N symbol"
      className="shrink-0 select-none"
    >
      <defs>
        {/* Left outer hexagon ribbon + inner left vertical stem of N */}
        <linearGradient id={leftGradId} x1="34" y1="8" x2="34" y2="124" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EE498E" />
          <stop offset="52%" stopColor="#903595" />
          <stop offset="100%" stopColor="#342077" />
        </linearGradient>

        {/* Right outer hexagon ribbon + inner right vertical stem of N */}
        <linearGradient id={rightGradId} x1="86" y1="8" x2="86" y2="124" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EE498E" />
          <stop offset="50%" stopColor="#903595" />
          <stop offset="100%" stopColor="#342077" />
        </linearGradient>

        {/* Central diagonal N bridge */}
        <linearGradient id={centerGradId} x1="36" y1="42" x2="84" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C83E92" />
          <stop offset="55%" stopColor="#903595" />
          <stop offset="100%" stopColor="#342077" />
        </linearGradient>

        {/* Subtle local depth shadow on ribbon folds */}
        <linearGradient id={shadowGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E0E4A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#342077" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Left Hexagonal Ribbon Wing + Inner Left Ascender */}
      <path
        d="M55 8 L14 32 C10.5 34 8.5 37.5 8.5 41.5 L8.5 90.5 C8.5 94.5 10.5 98 14 100 L55 124 L55 58 L37 47 L37 92 L25.5 85.2 L25.5 44.5 L55 27.2 Z"
        fill={`url(#${leftGradId})`}
      />

      {/* Right Hexagonal Ribbon Wing + Inner Right Descender */}
      <path
        d="M65 8 L106 32 C109.5 34 111.5 37.5 111.5 41.5 L111.5 90.5 C111.5 94.5 109.5 98 106 100 L65 124 L65 104.8 L94.5 87.5 L94.5 46.8 L83 40 L83 76 L65 65 Z"
        fill={`url(#${rightGradId})`}
      />

      {/* Central N Diagonal Ribbon Connecting Left & Right Stems */}
      <path
        d="M37 47 L52 47 L83 78 L83 93 L68 93 L37 62 Z"
        fill={`url(#${centerGradId})`}
      />

      {/* Local Fold Shadows matching Brand Guideline v0.9 Page 3 */}
      <polygon points="37,62 55,62 55,78 37,68" fill={`url(#${shadowGradId})`} />
      <polygon points="65,40 83,40 83,58 65,48" fill={`url(#${shadowGradId})`} />
    </svg>
  );
}

export function NeomedikaLogo({
  variant = 'compact',
  onDarkBackground = false,
  className = '',
}: NeomedikaLogoProps) {
  const uniqueId = React.useId().replace(/:/g, '');

  // Brand Guideline v0.9 Section 08: When placed over dark/colored surfaces, wrap in a clean white safe-space panel
  const panelClasses = onDarkBackground
    ? 'bg-white px-5 py-3.5 rounded-xl shadow-sm border border-[#EAE4F2]'
    : '';

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${panelClasses} ${className}`}>
        <NeomedikaSymbolSvg size={48} idPrefix={uniqueId} />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div
        className={`inline-flex flex-col items-center text-center select-none ${
          onDarkBackground ? 'bg-white px-7 py-6 rounded-2xl shadow-sm' : 'p-3'
        } ${className}`}
      >
        <NeomedikaSymbolSvg size={84} idPrefix={uniqueId} />
        <div className="mt-3 leading-none tracking-[-0.03em] text-[30px] text-[#381B37] font-normal">
          <span className="font-extrabold">neo</span>
          <span className="font-normal">medika</span>
        </div>
        <div className="mt-1.5 text-[12.5px] tracking-[0.02em] text-[#666666] font-normal">
          trusted healthcare solutions
        </div>
      </div>
    );
  }

  // 'compact' single-line lockup for Top Bar Zone 1 using the official transparent logo image
  return (
    <span
      className={`relative inline-block overflow-hidden w-[136px] h-[52px] sm:w-[156px] sm:h-[60px] whitespace-nowrap shrink-0 select-none align-middle ${panelClasses} ${className}`}
    >
      <img
        src="/assets/aistudio/Logo_dan_Nama_Neomedika_4K_Transparan_93a165b0.png"
        alt="neomedika — trusted healthcare solutions"
        className="absolute max-w-none w-[122.84%] h-[180.6%] -left-[11.52%] -top-[26.76%] pointer-events-none select-none"
      />
    </span>
  );
}

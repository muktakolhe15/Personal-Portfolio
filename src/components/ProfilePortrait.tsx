import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ProfilePortraitProps {
  variant?: 'hero' | 'about';
}

/**
 * ProfilePortrait
 * Renders Mukta Kolhe's profile photograph in a circular 1:1 frame (~300px × 300px on desktop)
 * with a thin violet/pink animated gradient border, subtle glowing shadow, and smooth hover animation.
 */
export const ProfilePortrait: React.FC<ProfilePortraitProps> = ({ variant = 'hero' }) => {
  const hasPhoto = Boolean(PROFILE_DATA.profileImageUrl);

  return (
    <div className="relative group w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] aspect-square mx-auto md:ml-auto md:mr-0 transition-transform duration-300 ease-out hover:scale-[1.02]">
      {/* Subtle violet/pink glowing shadow behind circle */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#6B123F]/45 via-[#9333EA]/30 to-[#EC4899]/45 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Thin Violet / Pink Gradient Border */}
      <div className="relative h-full w-full p-[3px] rounded-full bg-gradient-to-br from-[#6B123F] via-[#A855F7] to-[#EC4899] animate-gradient-border shadow-[0_12px_40px_-8px_rgba(236,72,153,0.35)] group-hover:shadow-[0_16px_48px_-6px_rgba(236,72,153,0.5)] transition-shadow duration-300">
        <div className="relative h-full w-full rounded-full overflow-hidden bg-[#120918] dark:bg-[#0D0612] flex items-center justify-center">
          {hasPhoto ? (
            <img
              src={PROFILE_DATA.profileImageUrl}
              alt="Mukta Kolhe — Computer Engineering Student"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            /* Fallback Circular Portrait Placeholder */
            <div className="relative h-full w-full flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_30%_25%,rgba(157,23,77,0.38),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(126,34,206,0.28),transparent_58%)]">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 text-[#F472B6]/85"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="60"
                  cy="44"
                  r="19"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  fill="rgba(236,72,153,0.12)"
                />
                <path
                  d="M24 104C26 83 41 72 60 72C79 72 94 83 96 104"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="rgba(157,23,77,0.18)"
                />
              </svg>
              <span className="mt-2 font-mono text-xs text-[#F9A8D4]/80" data-variant={variant}>
                MK
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

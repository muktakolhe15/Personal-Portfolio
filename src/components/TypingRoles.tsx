import React, { useState, useEffect } from 'react';

interface TypingRolesProps {
  roles: string[];
}

/**
 * TypingRoles
 * Smoothly types and erases through Mukta's role titles in the Hero section.
 * Falls back cleanly to a static display when prefers-reduced-motion is enabled.
 */
export const TypingRoles: React.FC<TypingRolesProps> = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (reducedMotion || roles.length === 0) return;

    const currentRole = roles[roleIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeoutId = setTimeout(() => setCharIndex((c) => c + 1), 58);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1700);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => setCharIndex((c) => c - 1), 32);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, roleIndex, roles, reducedMotion]);

  const displayedText = reducedMotion ? roles[0] : roles[roleIndex].slice(0, charIndex);

  return (
    <div className="min-h-[2rem] flex items-center text-lg sm:text-xl font-medium text-[#9D174D] dark:text-[#F472B6]">
      <span>{displayedText}</span>
      {!reducedMotion && (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block w-[2px] h-5 bg-[#EC4899] animate-pulse"
        />
      )}
    </div>
  );
};

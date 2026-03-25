import React from "react";

interface MegamindLogoProps {
  className?: string;
  size?: number;
}

export const MegamindLogo: React.FC<MegamindLogoProps> = ({ className = "", size = 64 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    width={size}
    height={size}
    className={className}
  >
    <rect x="5" y="5" width="90" height="90" rx="20" ry="20" fill="#7c3aed" />
    <path
      d="M32 78 L32 48 L50 62 L68 48 L68 78"
      stroke="#9ca3af"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M20 75 L20 25 L50 55 L80 25 L80 75"
      stroke="white"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

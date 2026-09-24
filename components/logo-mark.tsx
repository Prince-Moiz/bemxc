"use client";

/** BEMXC X mark: continuous slate bar (TL→BR) over split green (BL / TR). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      aria-hidden
      className={className}
    >
      <g transform="translate(64 64)">
        <rect
          x="-10"
          y="-56"
          width="20"
          height="38"
          fill="#58B078"
          transform="rotate(45)"
        />
        <rect
          x="-10"
          y="18"
          width="20"
          height="38"
          fill="#58B078"
          transform="rotate(45)"
        />
        <rect
          x="-10"
          y="-56"
          width="20"
          height="112"
          fill="currentColor"
          transform="rotate(-45)"
        />
      </g>
    </svg>
  );
}

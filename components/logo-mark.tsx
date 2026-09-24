"use client";

/** BEMXC mark — dual-wing X on rounded black tile. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <rect width="512" height="512" rx="112" fill="#000000" />
      <path
        d="M150 160L250 256L150 352H210L310 256L210 160H150Z"
        fill="#FFFFFF"
      />
      <path
        d="M362 160L262 256L362 352H302L202 256L302 160H362Z"
        fill="#FFFFFF"
        opacity="0.6"
      />
    </svg>
  );
}

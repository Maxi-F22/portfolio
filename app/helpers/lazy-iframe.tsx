'use client';

import { useState } from "react";

type LazyIframeProps = {
  title: string;
  src: string;
  className?: string;
  buttonLabel?: string;
  scale?: number;
};

export default function LazyIframe({
  title,
  src,
  className = "min-h-[320px] md:min-h-[420px]",
  buttonLabel = "Load Project",
  scale = 1,
}: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const safeScale = Math.min(Math.max(scale, 0.1), 1);

  if (isLoaded) {
    return (
      <div className={`relative mb-3 w-full overflow-hidden rounded-xl border border-[#2a355c] bg-black ${className}`}>
        <iframe
          className="absolute left-0 top-0 block border-0 bg-black"
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            width: `${100 / safeScale}%`,
            height: `${100 / safeScale}%`,
            transform: `scale(${safeScale})`,
            transformOrigin: "top left",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`mb-3 flex w-full items-center justify-center rounded-xl border border-[#2a355c] bg-black/40 ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className="rounded-xl border border-[#56c7ff] bg-[#0f172e]/80 px-5 py-2.5 text-sm font-medium text-[#eef2ff] transition hover:-translate-y-0.5 hover:bg-[#152347] cursor-pointer"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
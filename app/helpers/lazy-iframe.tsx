'use client';

import { useState } from "react";

type LazyIframeProps = {
  title: string;
  src: string;
  className?: string;
  buttonLabel?: string;
};

export default function LazyIframe({
  title,
  src,
  className = "min-h-[320px] md:min-h-[420px]",
  buttonLabel = "Load Project",
}: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        className={`mb-3 w-full rounded-xl border border-[#2a355c] bg-black ${className}`}
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
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
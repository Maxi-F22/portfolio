"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageGalleryProps = {
  title: string;
  imageSources: string[];
};

export default function ProjectImageGallery({ title, imageSources }: ProjectImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const maxStartIndex = Math.max(0, imageSources.length - visibleCount);
  const visibleImages = imageSources.slice(startIndex, startIndex + visibleCount);

  if (!imageSources.length) {
    return null;
  }

  return (
    <>
      <div className="w-full min-w-0">
    
        <div className={imageSources.length > 2 ? "grid gap-3 grid-cols-3" : "grid gap-3 grid-cols-2"}>
        {visibleImages.map((source, index) => {
          const imageNumber = startIndex + index + 1;

          return (
            <button
              key={`${title}-${source}-${imageNumber}`}
              type="button"
              onClick={() => setSelectedImage(source)}
              className="cursor-pointer overflow-hidden rounded-xl border border-[#2a355c] transition hover:-translate-y-0.5 hover:border-[#56c7ff]"
              aria-label={`Open image ${imageNumber} for ${title}`}
            >
              <Image
                src={source}
                alt={`${title} screenshot ${imageNumber}`}
                width={1200}
                height={675}
                className="h-48 w-full object-cover"
              />
            </button>
          );
        })}
        </div>
      </div>

      {imageSources.length > visibleCount && (
          <div className="mt-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStartIndex((current) => Math.max(0, current - 1))}
              disabled={startIndex === 0}
              className="rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition enabled:hover:border-[#56c7ff] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
              aria-label="Show previous images"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setStartIndex((current) => Math.min(maxStartIndex, current + 1))}
              disabled={startIndex >= maxStartIndex}
              className="rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition enabled:hover:border-[#56c7ff] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
              aria-label="Show next images"
            >
              Next
            </button>
          </div>
        )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-0 top-0 rounded-xl border border-[#2a355c] bg-[#131a30] px-3 py-2 text-sm transition hover:border-[#56c7ff] cursor-pointer"
              aria-label="Close image"
            >
              Close
            </button>
            <div className="relative h-[85vh] w-full" onClick={(event) => event.stopPropagation()}>
              <Image
                src={selectedImage}
                alt={`${title} enlarged screenshot`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

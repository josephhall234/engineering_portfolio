"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectImageGalleryProps = {
  images: ProjectImage[];
  gallery?: "handcalcs" | "featured";
};

export default function ProjectImageGallery({
  images,
  gallery,
}: ProjectImageGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState<ProjectImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const isHandCalculations = gallery === "handcalcs";
  const isFeatured = gallery === "featured";
  const isSingleImage = images.length === 1;

  const gridClass = isHandCalculations
  ? images.length === 2
    ? "grid grid-cols-1 gap-8 md:grid-cols-2"
    : "grid grid-cols-1 gap-8 md:grid-cols-3"
  : isFeatured
  ? "grid grid-cols-1 gap-7 md:grid-cols-2"
  : isSingleImage
  ? "grid grid-cols-1"
  : "grid grid-cols-1 gap-6 md:grid-cols-2";

  return (
    <>
      <div className={gridClass}>
        {images.map((image) => {
          /*
           * Hand calculations retain their original page proportions.
           * Featured photographs fill their containers.
           * Single technical images use more horizontal space.
           */
          if (isHandCalculations) {
            return (
              <figure key={image.src}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group block w-full cursor-zoom-in text-left"
                  aria-label={`Enlarge ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={2200}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-auto w-full transition-opacity group-hover:opacity-90"
                  />
                </button>

                {image.caption && (
                  <figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          return (
            <figure
              key={image.src}
              className={isSingleImage ? "w-full" : undefined}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--placeholder)] ${
                  isFeatured
                    ? "aspect-[5/4]"
                    : isSingleImage
                      ? "aspect-video"
                      : "aspect-[4/3]"
                }`}
                aria-label={`Enlarge ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    isSingleImage
                      ? "(min-width: 768px) 700px, 100vw"
                      : "(min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                />

                <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  View larger
                </span>
              </button>

              {image.caption && (
                <figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-4 py-2 text-sm text-white transition hover:bg-black/80 md:right-6 md:top-6"
          >
            Close
          </button>

          <figure
            className="flex max-h-full max-w-[95vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[88vh] max-w-full object-contain"
            />

            {selectedImage.caption && (
              <figcaption className="mt-4 max-w-3xl text-center text-sm text-white/85">
                {selectedImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
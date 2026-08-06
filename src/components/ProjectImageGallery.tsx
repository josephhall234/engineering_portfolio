"use client";

import { useEffect, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectImageGalleryProps = {
  images: ProjectImage[];
  gallery?: string;
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

  const gridClass =
    gallery === "handcalcs"
      ? "grid grid-cols-1 gap-6 md:grid-cols-3"
      : gallery === "featured"
        ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:-mx-10"
        : "grid grid-cols-1 gap-6 md:grid-cols-2";

  const imageAspectClass =
    gallery === "handcalcs"
      ? "aspect-[3/4]"
      : gallery === "featured"
        ? "aspect-[5/4]"
        : "aspect-[4/3]";

  return (
    <>
      <div className={gridClass}>
        {images.map((image) => (
          <figure key={image.src}>
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 ${imageAspectClass}`}
              aria-label={`Enlarge ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                View larger
              </span>
            </button>

            {image.caption && (
              <figcaption className="mt-3 text-sm leading-relaxed text-neutral-600">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/25"
          >
            Close
          </button>

          <figure
            className="flex max-h-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[82vh] max-w-full rounded-xl bg-white object-contain"
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
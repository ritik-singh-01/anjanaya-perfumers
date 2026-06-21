"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory md:w-20">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "w-16 h-16 md:w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex-shrink-0 snap-start transition-all",
                i === activeIndex
                  ? "ring-2 ring-primary ring-offset-2"
                  : "hover:ring-1 hover:ring-outline-variant"
              )}
            >
              <Image
                src={img}
                alt={`${productName} view ${i + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image */}
      <div className="flex-1 aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest/20 to-transparent pointer-events-none z-10" />
        <Image
          src={images[activeIndex]}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

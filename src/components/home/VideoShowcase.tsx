"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

interface VideoShowcaseProps {
  /** Drop an .mp4 path (in /public) here later and it auto-plays instead of the poster image. */
  videoSrc?: string;
  poster: string;
  titleEn: string;
  titleHi: string;
  subEn: string;
  subHi: string;
  ctaHref?: string;
  ctaEn?: string;
  ctaHi?: string;
}

/**
 * Cinematic full-bleed band. Renders an autoplaying muted loop video when
 * `videoSrc` is provided, otherwise a poster image — so the layout is
 * video-ready today and lights up the moment footage exists.
 */
export default function VideoShowcase({
  videoSrc,
  poster,
  titleEn,
  titleHi,
  subEn,
  subHi,
  ctaHref,
  ctaEn,
  ctaHi,
}: VideoShowcaseProps) {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-on-surface md:aspect-[21/9]">
            {videoSrc ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={poster}
                src={videoSrc}
              />
            ) : (
              <Image
                src={poster}
                alt={t(titleEn, titleHi)}
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              <h2 className="display-serif text-3xl md:text-5xl lg:text-6xl">
                {t(titleEn, titleHi)}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/85 md:text-lg">
                {t(subEn, subHi)}
              </p>
              {ctaHref && ctaEn && ctaHi && (
                <Link
                  href={ctaHref}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-on-surface transition-all hover:bg-white/90 active:scale-95"
                >
                  {t(ctaEn, ctaHi)}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

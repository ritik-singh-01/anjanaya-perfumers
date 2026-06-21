import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <span className="material-symbols-outlined text-8xl text-outline-variant mb-6">
        search_off
      </span>
      <h1 className="text-4xl font-[family-name:var(--font-headline)] font-bold mb-4">
        Page Not Found
      </h1>
      <p className="text-on-surface-variant text-lg mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-primary text-on-primary px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-all"
        >
          Go Home
        </Link>
        <Link
          href="/shop"
          className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary/5 transition-all"
        >
          Browse Shop
        </Link>
      </div>
    </div>
  );
}

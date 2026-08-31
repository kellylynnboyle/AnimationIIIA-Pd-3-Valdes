import Image from "next/image";
import type { Media } from "@/data/projects";

export function MediaFrame({ media }: { media: Media }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line/70 bg-surface">
      <div className="relative aspect-video w-full bg-ink">
        {media.kind === "video" ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={media.poster}
            className="h-full w-full object-contain"
          >
            <source src={media.src} />
            Your browser can&apos;t play this video.{" "}
            <a href={media.src}>Download it instead.</a>
          </video>
        ) : (
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
          />
        )}
      </div>

      {media.caption && (
        <figcaption className="border-t border-line/70 px-5 py-3 text-sm text-muted">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

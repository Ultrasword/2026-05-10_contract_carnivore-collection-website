import Link from "next/link";
import type { CourseIntro } from "@/lib/recipes";

export default function ArchiveHero({
  intro,
  count,
  fastest,
  slowest,
}: {
  intro: CourseIntro;
  count: number;
  fastest: number;
  slowest: number;
}) {
  return (
    <section className="archive-hero">
      <div className="archive-crumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <span>{intro.tag}</span>
      </div>
      <span className="kicker" style={{ marginBottom: 12, display: "block" }}>
        {intro.kicker}
      </span>
      <h1 className="archive-title">{intro.title}</h1>
      <p className="archive-sub">{intro.sub}</p>
      <div className="archive-stats">
        <span>
          <strong>{count}</strong> recipes
        </span>
        <span>
          <strong>{fastest}</strong> min fastest
        </span>
        <span>
          <strong>{slowest}</strong> min slowest
        </span>
      </div>
    </section>
  );
}

import Link from "next/link";
import EquipmentList from "@/components/sections/EquipmentList";
import Newsletter from "@/components/sections/Newsletter";

export const metadata = {
  title: "Equipment — Carnivore Collections",
};

export default function EquipmentPage() {
  return (
    <>
      <section className="archive-hero">
        <div className="archive-crumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>Equipment</span>
        </div>
        <span className="kicker" style={{ marginBottom: 12, display: "block" }}>
          The shortlist
        </span>
        <h1 className="archive-title">
          Six tools, <em>no more.</em>
        </h1>
        <p className="archive-sub">
          The kitchen we cook from owns about a dozen things and uses six of
          them every day. These are those six — no affiliate fluff, no
          twenty-item buying guides. Buy what you&apos;ll actually use.
        </p>
        <div className="archive-stats">
          <span>
            <strong>6</strong> essentials
          </span>
          <span>
            <strong>$420</strong> total entry-level
          </span>
          <span>
            Updated <strong>Apr 2026</strong>
          </span>
        </div>
      </section>
      <EquipmentList />
      <Newsletter />
    </>
  );
}

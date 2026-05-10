import Link from "next/link";
import EquipmentList from "@/components/sections/EquipmentList";
import AffiliateDisclaimer from "@/components/sections/AffiliateDisclaimer";
import Newsletter from "@/components/sections/Newsletter";
import { EQUIPMENT, EQUIPMENT_CATEGORIES } from "@/lib/recipes";

export const metadata = {
  title: "Carnivore Tools, Appliances, & Equipment — Carnivore Collections",
};

export default function EquipmentPage() {
  return (
    <>
      <section className="archive-hero">
        <div className="archive-crumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>Tools &amp; equipment</span>
        </div>
        <span className="kicker" style={{ marginBottom: 12, display: "block" }}>
          The shortlist
        </span>
        <h1 className="archive-title">
          Carnivore tools, <em>appliances, &amp; equipment.</em>
        </h1>
        <p className="archive-sub">
          The kitchen we cook from owns a few dozen things and uses these
          every day. No twenty-item buying guides — just what we reach for,
          grouped by what it&apos;s for.
        </p>
        <div className="archive-stats">
          <span>
            <strong>{EQUIPMENT.length}</strong> essentials
          </span>
          <span>
            <strong>{EQUIPMENT_CATEGORIES.length}</strong> categories
          </span>
          <span>
            Updated <strong>Apr 2026</strong>
          </span>
        </div>
      </section>
      <AffiliateDisclaimer />
      <EquipmentList />
      <Newsletter />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  EQUIPMENT,
  EQUIPMENT_CATEGORIES,
  imgUrl,
  type EquipmentCategory,
} from "@/lib/recipes";

type Filter = "All" | EquipmentCategory;

const FILTERS: Filter[] = ["All", ...EQUIPMENT_CATEGORIES];

export default function EquipmentList() {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: EQUIPMENT.length };
    for (const cat of EQUIPMENT_CATEGORIES) {
      c[cat] = EQUIPMENT.filter((e) => e.category === cat).length;
    }
    return c;
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? EQUIPMENT : EQUIPMENT.filter((e) => e.category === filter)),
    [filter]
  );

  return (
    <section className="archive-body">
      <div className="archive-toolbar">
        <span className="archive-count">
          Showing {filtered.length} of {EQUIPMENT.length}
        </span>
        <div className="chips">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={"chip" + (filter === f ? " is-active" : "")}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="chip-count">{counts[f]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="equip-grid">
        {filtered.map((e) => (
          <div key={e.id} className="equip-row">
            <div className="equip-media">
              <img src={imgUrl(e.img)} alt={e.name} />
            </div>
            <div>
              <span className="equip-num">
                {e.num} · {e.category}
              </span>
              <h3 className="equip-name">{e.name}.</h3>
              <p className="equip-note">{e.note}</p>
              <div className="equip-meta">
                <span>
                  <strong>{e.brand}</strong>
                </span>
                <span>{e.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty">
          Nothing in <em>{filter}</em> yet.
        </div>
      )}
    </section>
  );
}

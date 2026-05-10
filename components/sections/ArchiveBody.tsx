"use client";

import { useMemo, useState } from "react";
import type { Recipe } from "@/lib/recipes";
import RecipeCard from "@/components/recipe/RecipeCard";

type Sort = "featured" | "fast" | "slow" | "az";

export default function ArchiveBody({ recipes }: { recipes: Recipe[] }) {
  const [sort, setSort] = useState<Sort>("featured");

  const sorted = useMemo(() => {
    const copy = recipes.slice();
    if (sort === "fast") copy.sort((a, b) => a.time - b.time);
    if (sort === "slow") copy.sort((a, b) => b.time - a.time);
    if (sort === "az") copy.sort((a, b) => a.title.localeCompare(b.title));
    return copy;
  }, [recipes, sort]);

  return (
    <section className="archive-body">
      <div className="archive-toolbar">
        <span className="archive-count">
          Showing {sorted.length} of {sorted.length}
        </span>
        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
        >
          <option value="featured">Sort: Featured</option>
          <option value="fast">Sort: Fastest first</option>
          <option value="slow">Sort: Slowest first</option>
          <option value="az">Sort: A → Z</option>
        </select>
      </div>
      <div className="grid">
        {sorted.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
      {sorted.length === 0 && (
        <div className="empty">
          Nothing here yet. <em>Check back Sunday.</em>
        </div>
      )}
    </section>
  );
}

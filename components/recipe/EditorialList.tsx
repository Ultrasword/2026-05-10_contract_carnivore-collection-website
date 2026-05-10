"use client";

import { fmtTime, type Recipe } from "@/lib/recipes";
import { useRecipeDrawer } from "./RecipeDrawerProvider";

export default function EditorialList({
  recipes,
  withSectionHead = true,
}: {
  recipes: Recipe[];
  withSectionHead?: boolean;
}) {
  const { open } = useRecipeDrawer();
  return (
    <section className="editorial">
      {withSectionHead && (
        <div className="section-head">
          <h2>Cook through the archive.</h2>
          <p>148 recipes, organised by patience required.</p>
        </div>
      )}
      <ol className="ed-list">
        {recipes.map((r, i) => (
          <li key={r.id} className="ed-row" onClick={() => open(r)}>
            <span className="ed-num">{String(i + 1).padStart(2, "0")}</span>
            <div className="ed-main">
              <h4>{r.title}</h4>
              <p>{r.note}</p>
            </div>
            <span className="ed-divider" aria-hidden="true"></span>
            <div className="ed-meta">
              <span>{r.course}</span>
              <span>{fmtTime(r.time)}</span>
              <span>{r.level}</span>
            </div>
            <span className="ed-arrow">→</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

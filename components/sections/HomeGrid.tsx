"use client";

import { useMemo, useState } from "react";
import { RECIPES, type Recipe } from "@/lib/recipes";
import RecipeCard from "@/components/recipe/RecipeCard";
import FeaturedCard from "@/components/recipe/FeaturedCard";
import EditorialList from "@/components/recipe/EditorialList";
import { useRecipeDrawer } from "@/components/recipe/RecipeDrawerProvider";
import { fmtTime } from "@/lib/recipes";

const COURSES_WITH_ALL = ["All", "Breakfast", "Mains", "Desserts", "Snacks"] as const;
type CourseFilter = (typeof COURSES_WITH_ALL)[number];

export default function HomeGrid() {
  const [course, setCourse] = useState<CourseFilter>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const { open } = useRecipeDrawer();

  const featured = useMemo<Recipe | undefined>(
    () => RECIPES.find((r) => r.hero),
    []
  );

  const filtered = useMemo(
    () => RECIPES.filter((r) => course === "All" || r.course === course),
    [course]
  );

  const grid = filtered.filter((r) => !r.hero).slice(0, 6);
  const list = filtered.filter((r) => !r.hero).slice(6);

  return (
    <>
      <section className="latest" id="recipes">
        <div className="section-head">
          <span className="eyebrow">Latest</span>
          <h2>Fresh this month.</h2>
          <div className="filters">
            <div className="chips">
              {COURSES_WITH_ALL.map((c) => (
                <button
                  key={c}
                  className={"chip" + (course === c ? " is-active" : "")}
                  onClick={() => setCourse(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="view-toggle">
              <button
                className={view === "grid" ? "is-active" : ""}
                onClick={() => setView("grid")}
              >
                Grid
              </button>
              <button
                className={view === "list" ? "is-active" : ""}
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {featured && course === "All" && <FeaturedCard recipe={featured} />}

        {view === "grid" ? (
          <div className="grid">
            {grid.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        ) : (
          <ol className="ed-list">
            {[...grid, ...list].map((r, i) => (
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
        )}

        {filtered.length === 0 && (
          <div className="empty">
            Nothing in <em>{course}</em> yet. Try another course.
          </div>
        )}
      </section>

      {list.length > 0 && view === "grid" && <EditorialList recipes={list} />}
    </>
  );
}

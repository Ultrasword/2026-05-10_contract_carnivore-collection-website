"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import type { Recipe } from "@/lib/recipes";
import { fmtTime, imgUrl } from "@/lib/recipes";

type Ctx = {
  open: (r: Recipe) => void;
  close: () => void;
  current: Recipe | null;
};

const DrawerCtx = createContext<Ctx | null>(null);

export function useRecipeDrawer() {
  const ctx = useContext(DrawerCtx);
  if (!ctx) throw new Error("useRecipeDrawer must be used inside RecipeDrawerProvider");
  return ctx;
}

export function RecipeDrawerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Recipe | null>(null);

  const open = useCallback((r: Recipe) => setCurrent(r), []);
  const close = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close]);

  return (
    <DrawerCtx.Provider value={{ open, close, current }}>
      {children}
      {current && <RecipeDrawer recipe={current} onClose={close} />}
    </DrawerCtx.Provider>
  );
}

function RecipeDrawer({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
  return (
    <div className="drawer-scrim" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="drawer-media">
          <img src={imgUrl(recipe.img)} alt={recipe.title} />
        </div>
        <div className="drawer-body">
          <span className="kicker">
            {recipe.course} · {recipe.tag}
          </span>
          <h2>{recipe.title}.</h2>
          <p className="lede">{recipe.note}</p>
          <div className="drawer-stats">
            <div>
              <span>Time</span>
              <strong>{fmtTime(recipe.time)}</strong>
            </div>
            <div>
              <span>Level</span>
              <strong>{recipe.level}</strong>
            </div>
            <div>
              <span>Serves</span>
              <strong>4</strong>
            </div>
            <div>
              <span>Macros</span>
              <strong>Coming soon</strong>
            </div>
          </div>
          <h4>Ingredients</h4>
          <ul className="ing-list">
            <li>
              <span>1</span> the headline ingredient, room temperature
            </li>
            <li>
              <span>2 tbsp</span> grass-fed butter
            </li>
            <li>
              <span>1 tsp</span> flaky salt
            </li>
            <li>
              <span>—</span> coarse-cracked pepper, optional
            </li>
          </ul>
          <h4>Method</h4>
          <ol className="method">
            <li>Preheat your heaviest pan until a drop of water dances and disappears.</li>
            <li>Lay the meat down. Don&apos;t move it. Walk away for four minutes.</li>
            <li>Flip once. Add butter. Tilt the pan and baste with a spoon.</li>
            <li>Rest, uncovered, for as long as it cooked.</li>
          </ol>
          <p className="drawer-fine">
            Full recipe in the live site — this is a design preview.
          </p>
        </div>
      </aside>
    </div>
  );
}

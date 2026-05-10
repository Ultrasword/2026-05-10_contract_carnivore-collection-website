"use client";

import { fmtTime, imgUrl, type Recipe } from "@/lib/recipes";
import { useRecipeDrawer } from "./RecipeDrawerProvider";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { open } = useRecipeDrawer();
  return (
    <article className="card" onClick={() => open(recipe)}>
      <div className="card-media">
        <img src={imgUrl(recipe.img)} alt={recipe.title} />
        <span className="card-tag">{recipe.tag}</span>
      </div>
      <div className="card-body">
        <span className="kicker">{recipe.course}</span>
        <h3 className="card-title">{recipe.title}.</h3>
        <p className="card-note">{recipe.note}</p>
        <div className="card-foot">
          <span>{fmtTime(recipe.time)}</span>
          <span className="dot">·</span>
          <span>{recipe.level}</span>
        </div>
      </div>
    </article>
  );
}

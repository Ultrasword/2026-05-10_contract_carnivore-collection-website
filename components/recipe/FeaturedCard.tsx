"use client";

import { fmtTime, imgUrl, type Recipe } from "@/lib/recipes";
import { useRecipeDrawer } from "./RecipeDrawerProvider";

export default function FeaturedCard({ recipe }: { recipe: Recipe }) {
  const { open } = useRecipeDrawer();
  return (
    <article className="featured" onClick={() => open(recipe)}>
      <div className="featured-media">
        <img src={imgUrl(recipe.img)} alt={recipe.title} />
        <span className="featured-badge">This week&apos;s pick</span>
      </div>
      <div className="featured-body">
        <span className="kicker">{recipe.course}</span>
        <h2 className="featured-title">{recipe.title}.</h2>
        <p className="featured-note">{recipe.note}</p>
        <div className="meta-row">
          <span>
            <span className="meta-label">Time</span>
            {fmtTime(recipe.time)}
          </span>
          <span>
            <span className="meta-label">Level</span>
            {recipe.level}
          </span>
          <span>
            <span className="meta-label">Cut</span>
            {recipe.tag}
          </span>
        </div>
        <span className="featured-cta">Read the recipe →</span>
      </div>
    </article>
  );
}

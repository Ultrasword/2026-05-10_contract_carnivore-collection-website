import { COURSE_INTROS, RECIPES } from "@/lib/recipes";
import ArchiveHero from "@/components/sections/ArchiveHero";
import ArchiveBody from "@/components/sections/ArchiveBody";
import Newsletter from "@/components/sections/Newsletter";

export const metadata = {
  title: "All recipes — Carnivore Collections",
};

export default function AllRecipesPage() {
  const intro = COURSE_INTROS.All;
  const recipes = RECIPES.slice();
  const times = recipes.map((r) => r.time);
  return (
    <>
      <ArchiveHero
        intro={intro}
        count={recipes.length}
        fastest={Math.min(...times)}
        slowest={Math.max(...times)}
      />
      <ArchiveBody recipes={recipes} />
      <Newsletter />
    </>
  );
}

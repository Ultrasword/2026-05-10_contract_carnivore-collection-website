import Link from "next/link";
import { COURSES, COURSE_SLUG, RECIPES, type Course } from "@/lib/recipes";

export default function CategoryRail() {
  const counts: Record<Course, number> = {
    Breakfast: RECIPES.filter((r) => r.course === "Breakfast").length,
    Mains: RECIPES.filter((r) => r.course === "Mains").length,
    Desserts: RECIPES.filter((r) => r.course === "Desserts").length,
    Snacks: RECIPES.filter((r) => r.course === "Snacks").length,
  };
  return (
    <section className="rail">
      {COURSES.map((c, i) => (
        <Link key={c} href={`/recipes/${COURSE_SLUG[c]}`} className="rail-card">
          <span className="rail-num">0{i + 1}</span>
          <span className="rail-name">{c}</span>
          <span className="rail-count">{counts[c]} recipes</span>
        </Link>
      ))}
    </section>
  );
}

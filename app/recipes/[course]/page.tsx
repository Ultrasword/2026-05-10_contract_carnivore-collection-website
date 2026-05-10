import { notFound } from "next/navigation";
import {
  COURSE_INTROS,
  COURSE_SLUG,
  RECIPES,
  SLUG_TO_COURSE,
  type CourseSlug,
} from "@/lib/recipes";
import ArchiveHero from "@/components/sections/ArchiveHero";
import ArchiveBody from "@/components/sections/ArchiveBody";
import Newsletter from "@/components/sections/Newsletter";

export function generateStaticParams() {
  return Object.values(COURSE_SLUG).map((course) => ({ course }));
}

export function generateMetadata({ params }: { params: { course: string } }) {
  const course = SLUG_TO_COURSE[params.course as CourseSlug];
  if (!course) return {};
  return { title: `${course} — Carnivore Collections` };
}

export default function CoursePage({ params }: { params: { course: string } }) {
  const course = SLUG_TO_COURSE[params.course as CourseSlug];
  if (!course) notFound();

  const intro = COURSE_INTROS[course];
  const recipes = RECIPES.filter((r) => r.course === course);
  const times = recipes.map((r) => r.time);

  return (
    <>
      <ArchiveHero
        intro={intro}
        count={recipes.length}
        fastest={recipes.length ? Math.min(...times) : 0}
        slowest={recipes.length ? Math.max(...times) : 0}
      />
      <ArchiveBody recipes={recipes} />
      <Newsletter />
    </>
  );
}

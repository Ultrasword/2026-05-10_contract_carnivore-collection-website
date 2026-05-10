import recipesJson from "@/public/recipes.json";
import equipmentJson from "@/public/equipment.json";

export type Course = "Breakfast" | "Mains" | "Desserts" | "Snacks";
export type CourseSlug = "breakfast" | "mains" | "desserts" | "snacks";

export type Recipe = {
  id: string;
  title: string;
  course: Course;
  time: number;
  level: string;
  tag: string;
  note: string;
  featured?: boolean;
  hero?: boolean;
  img: string;
};

export type EquipmentCategory =
  | "Cookware"
  | "Knives & Cutting"
  | "Tools & Gadgets"
  | "Heat & Smoke";

export type Equipment = {
  id: string;
  num: string;
  name: string;
  category: EquipmentCategory;
  note: string;
  brand: string;
  price: string;
  img: string;
};

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  "Cookware",
  "Knives & Cutting",
  "Tools & Gadgets",
  "Heat & Smoke",
];

export const RECIPES = recipesJson as Recipe[];
export const EQUIPMENT = equipmentJson as Equipment[];

export const COURSES: Course[] = ["Breakfast", "Mains", "Desserts", "Snacks"];

export const COURSE_SLUG: Record<Course, CourseSlug> = {
  Breakfast: "breakfast",
  Mains: "mains",
  Desserts: "desserts",
  Snacks: "snacks",
};

export const SLUG_TO_COURSE: Record<CourseSlug, Course> = {
  breakfast: "Breakfast",
  mains: "Mains",
  desserts: "Desserts",
  snacks: "Snacks",
};

export const fmtTime = (m: number): string =>
  m < 60 ? `${m} min` : m % 60 === 0 ? `${m / 60} hr` : `${Math.floor(m / 60)} hr ${m % 60}`;

export const imgUrl = (id: string): string =>
  `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`;

export type CourseIntro = {
  tag: string;
  count: number;
  kicker: string;
  title: string;
  sub: string;
};

export const COURSE_INTROS: Record<Course | "All", CourseIntro> = {
  Breakfast: {
    tag: "Breakfast",
    count: 18,
    kicker: "Course 01",
    title: "Breakfast.",
    sub: "Eggs done well, sausage worth waking up for, and the occasional excuse to brown butter before noon.",
  },
  Mains: {
    tag: "Mains",
    count: 47,
    kicker: "Course 02",
    title: "Mains.",
    sub: "The point of the meal. Steaks, roasts, slow-cooked things — recipes built around respecting the cut.",
  },
  Desserts: {
    tag: "Desserts",
    count: 39,
    kicker: "Course 03",
    title: "Desserts.",
    sub: "Carnivore-friendly sweets that don't feel like a compromise. Cream, eggs, and the patience of a good fridge.",
  },
  Snacks: {
    tag: "Snacks & treats",
    count: 44,
    kicker: "Course 04",
    title: "Snacks & treats.",
    sub: "Something to eat between meals, on the road, or with a glass of something cold.",
  },
  All: {
    tag: "All recipes",
    count: 148,
    kicker: "The archive",
    title: "Every recipe.",
    sub: "All 148 of them. Filter by course, sort by patience required, or search for anything specific.",
  },
};

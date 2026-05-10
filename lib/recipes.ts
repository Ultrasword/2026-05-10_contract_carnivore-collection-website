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

export type Equipment = {
  id: string;
  num: string;
  name: string;
  note: string;
  brand: string;
  price: string;
  img: string;
};

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

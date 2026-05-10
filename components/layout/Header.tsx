"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { label: "All recipes", href: "/recipes" },
  { label: "Breakfast", href: "/recipes/breakfast" },
  { label: "Mains", href: "/recipes/mains" },
  { label: "Desserts", href: "/recipes/desserts" },
  { label: "Snacks", href: "/recipes/snacks" },
  { label: "Equipment", href: "/equipment" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="nav">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={pathname === n.href ? "is-current" : ""}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

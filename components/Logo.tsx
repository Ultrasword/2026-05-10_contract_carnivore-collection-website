import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Carnivore Collections">
      <span className="logo-mark">CC</span>
      <span className="logo-word">
        Carnivore
        <br />
        Collections
      </span>
    </Link>
  );
}

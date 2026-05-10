import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div className="foot-brand">
          <span className="foot-mark">CC</span>
          <p>
            Recipes for people who eat meat. Published from a small kitchen in
            Toronto, Canada since 2024.
          </p>
        </div>
        <div>
          <h5>Cook</h5>
          <Link href="/recipes">All recipes</Link>
          <Link href="/recipes/breakfast">Breakfast</Link>
          <Link href="/recipes/mains">Mains</Link>
          <Link href="/recipes/desserts">Desserts</Link>
          <Link href="/recipes/snacks">Snacks &amp; treats</Link>
        </div>
        <div>
          <h5>Read</h5>
          <Link href="/equipment">Equipment</Link>
          <a href="#">Notes &amp; technique</a>
          <a href="#">Sourcing</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <h5>Follow</h5>
          <a href="#">YouTube</a>
          <a href="#">Instagram</a>
          <a href="#">Newsletter</a>
          <a href="#">RSS</a>
        </div>
      </div>
      <div className="foot-bar">
        <span className="foot-copy">
          © 2024–2026 Carnivore Collections. All recipes the work of their authors.
        </span>
        <span className="foot-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
          <a href="mailto:hello@carnivorecollections.test">Contact</a>
        </span>
      </div>
      <div className="foot-colophon">
        <span>Vol. 02 · Issue 14</span>
        <span>Original, tested in-house · No ads · No affiliates</span>
        <span>Made in Toronto, Canada</span>
      </div>
    </footer>
  );
}

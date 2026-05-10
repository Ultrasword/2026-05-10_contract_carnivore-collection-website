"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="newsletter" id="newsletter">
      <div className="news-inner">
        <span className="eyebrow light">The Sunday Send</span>
        <h2>
          One recipe. Every Sunday.
          <br />
          <em>No filler, ever.</em>
        </h2>
        <p>
          A single, tested recipe in your inbox each week — plus the occasional
          note on a cut, a technique, or a piece of equipment worth the counter
          space. Unsubscribe whenever.
        </p>
        <form className="news-form" onSubmit={submit}>
          <input
            type="email"
            placeholder="you@kitchen.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{sent ? "✓ You're in" : "Join the Newsletter"}</button>
        </form>
        <span className="news-fine">
          12,400 cooks. Zero spam. One unsubscribe link, always at the top.
        </span>
      </div>
    </section>
  );
}

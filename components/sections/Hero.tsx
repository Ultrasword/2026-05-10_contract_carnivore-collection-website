"use client";

import { FormEvent, useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="hero">
      <div className="hero-meta">
        <span className="eyebrow">Vol. 04 · Spring 2026</span>
        <span className="dot">·</span>
        <span>148 recipes · 12,400 cooks</span>
      </div>
      <h1 className="hero-title">
        Recipes for people
        <br />
        who <em>eat meat.</em>
      </h1>
      <p className="hero-sub">
        A weekly carnivore cookbook. Every Sunday we send one tested recipe —
        beef, butter, eggs, cheese — written tight and built around what
        actually works in a home kitchen.{" "}
        <strong>Subscribe to get this week&apos;s, free.</strong>
      </p>
      <form className="hero-form" onSubmit={submit}>
        <input
          type="email"
          required
          placeholder="you@kitchen.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {sent ? "✓ You're in" : "Get the Sunday recipe"}
        </button>
      </form>
      <div className="hero-fine">
        <span>Free · One email a week · Unsubscribe in one click</span>
        <a href="#recipes" className="hero-secondary">
          or browse 148 recipes <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

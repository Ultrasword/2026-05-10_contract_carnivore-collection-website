export default function YoutubeBar() {
  return (
    <a
      className="youtube-bar"
      href="https://www.youtube.com/@carnivorecollections"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5c-1 .3-1.8 1.1-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1.1 1.8 2.1 2.1 1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
      <span>Watch us on YouTube</span>
      <span className="arrow" aria-hidden="true">→</span>
    </a>
  );
}

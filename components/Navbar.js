import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">R</span>
          <span>Ruin Network</span>
        </Link>

        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/products" className="nav-link">
            Ecosystem
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <a
            href="https://discord.gg/rFVq8jJbxS"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary nav-cta"
          >
            Join Network
          </a>
        </div>
      </nav>
    </header>
  );
}
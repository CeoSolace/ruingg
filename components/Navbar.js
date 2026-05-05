import Link from 'next/link';

/**
 * Primary navigation bar for the Ruin Network site. Displays the brand
 * name on the left and navigation links on the right. The nav is
 * intentionally minimal to keep the focus on the content.
 */
export default function Navbar() {
  return (
    <nav
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0'
      }}
    >
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>
          Ruin Network
        </a>
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link href="/products">
          <a style={{ color: 'var(--foreground)', fontWeight: 500 }}>Products</a>
        </Link>
        <Link href="/about">
          <a style={{ color: 'var(--foreground)', fontWeight: 500 }}>About</a>
        </Link>
      </div>
    </nav>
  );
}
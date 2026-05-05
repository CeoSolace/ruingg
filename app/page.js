import Link from 'next/link';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

// Page metadata
export const metadata = {
  title: 'Ruin Network | Home',
  description: 'Disrupting how communities connect by powering platforms, tools and communities.'
};

/**
 * Home page of the Ruin Network site. Contains a hero section
 * introducing the brand and a grid showcasing the ecosystem.
 */
export default function HomePage() {
  return (
    <main className="container">
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '4rem',
          gap: '1rem'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Ruin Network</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '40rem' }}>
          Disrupting how communities connect.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Link href="/products">
            <a className="button">Explore Products</a>
          </Link>
          <a
            className="button"
            href="https://discord.gg/rFVq8jJbxS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Official Server
          </a>
        </div>
      </section>
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Our Ecosystem</h2>
        <div className="grid grid-columns-2 grid-columns-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
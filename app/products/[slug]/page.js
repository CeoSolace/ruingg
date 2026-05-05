import products from '../../../data/products';
import { notFound } from 'next/navigation';

// Generate static params for all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

/**
 * Individual product page. Looks up the product by slug from the data
 * file and renders its details. If the product is not found, a
 * 404 Not Found response is returned using the notFound helper.
 */
export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }
  return (
    <main className="container" style={{ marginTop: '4rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{product.name}</h1>
      <span className={`badge badge-${product.status.toLowerCase()}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>
        {product.status}
      </span>
      <p style={{ maxWidth: '40rem', color: 'var(--muted)', marginBottom: '2rem' }}>{product.description}</p>
      <a
        className="button"
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Official Site
      </a>
    </main>
  );
}
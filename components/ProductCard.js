import Link from 'next/link';

/**
 * Card component used to display a summary of a product or community
 * on the homepage and products listing page. Includes a status badge
 * and a button linking to the external site.
 *
 * @param {{ product: { slug: string, name: string, description: string, status: string, link: string } }} props
 */
export default function ProductCard({ product }) {
  // Compute a CSS class for the badge based on status
  const statusClass = product.status.toLowerCase();
  return (
    <div className="card">
      <span className={`badge badge-${statusClass}`}>{product.status}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <a
        className="button"
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  );
}
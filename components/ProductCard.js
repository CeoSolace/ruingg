export default function ProductCard({ product }) {
  const statusClass = product.status.toLowerCase();

  return (
    <div className="card">
      <span className={`badge badge-${statusClass}`}>
        {product.status}
      </span>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <div className="card-actions">
        <a
          className="button button-primary"
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Platform
        </a>
      </div>
    </div>
  );
}
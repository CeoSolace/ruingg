import products from '../../data/products';
import ProductCard from '../../components/ProductCard';

// Metadata for products listing
export const metadata = {
  title: 'Ruin Network | Products',
  description: 'Explore all platforms, tools and communities within the Ruin Network ecosystem.'
};

/**
 * Products listing page. Displays all products and communities
 * defined in the data file in a grid layout. Users can click
 * through to each individual product page for more details.
 */
export default function ProductsPage() {
  return (
    <main className="container" style={{ marginTop: '4rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Products & Communities</h1>
      <div className="grid grid-columns-2 grid-columns-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
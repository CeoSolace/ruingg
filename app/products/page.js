import products from '../../data/products';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Ruin Network | Ecosystem',
  description:
    'Explore the complete Ruin Network ecosystem including platforms, communities and infrastructure.'
};

export default function ProductsPage() {
  return (
    <main className="container">
      <section className="page-heading">
        <h1 className="page-title">
          Connected <span className="gradient-text">Ecosystem</span>
        </h1>

        <p className="page-copy">
          Every platform under Ruin Network is designed to strengthen
          online communities through infrastructure, automation,
          discovery and engagement.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid grid-columns-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
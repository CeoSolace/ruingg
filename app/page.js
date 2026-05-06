import products from '../data/products';
import ProductCard from '../components/ProductCard';

export const metadata = {
  title: 'Ruin Network | Official HQ',
  description:
    'Disrupting how communities connect through platforms, infrastructure, tooling and next generation digital ecosystems.'
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">
              <span className="kicker-dot" />
              Official Network HQ
            </div>

            <h1>
              <span className="gradient-text">Disrupting</span>
              <br />
              how communities connect.
            </h1>

            <p className="hero-copy">
              Ruin Network is a modern ecosystem powering platforms,
              infrastructure, creator tooling and online communities.
              Built with a startup-tech mindset and a competitive edge.
            </p>

            <div className="actions">
              <a
                href="/products"
                className="button button-primary"
              >
                Explore Ecosystem
              </a>

              <a
                href="https://discord.gg/rFVq8jJbxS"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Join Community
              </a>
            </div>

            <div className="stats">
              <div className="stat-card">
                <strong>4+</strong>
                <span>Connected Platforms</span>
              </div>

              <div className="stat-card">
                <strong>24/7</strong>
                <span>Community Infrastructure</span>
              </div>

              <div className="stat-card">
                <strong>Next‑Gen</strong>
                <span>Community Experience</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span>Network Status</span>
              <span className="signal" />
            </div>

            <div className="panel-list">
              <div className="panel-row">
                <div>
                  <strong>Bright</strong>
                  <span>Automation + moderation platform</span>
                </div>

                <span className="badge badge-live">Live</span>
              </div>

              <div className="panel-row">
                <div>
                  <strong>BioLinkHQ</strong>
                  <span>Social hub ecosystem</span>
                </div>

                <span className="badge badge-live">Live</span>
              </div>

              <div className="panel-row">
                <div>
                  <strong>CivCore SMP</strong>
                  <span>Community survival network</span>
                </div>

                <span className="badge badge-community">Community</span>
              </div>

              <div className="panel-row">
                <div>
                  <strong>Ruin Network</strong>
                  <span>Core infrastructure rebuild</span>
                </div>

                <span className="badge badge-rebuilding">Rebuilding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Ecosystem</h2>
              <p>
                A connected suite of products, platforms and communities
                built under one network.
              </p>
            </div>
          </div>

          <div className="grid grid-columns-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
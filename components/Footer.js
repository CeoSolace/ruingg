export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <strong>Ruin Network</strong>
          <p>Disrupting how communities connect.</p>
        </div>

        <div>
          <p>© {year} Ruin Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
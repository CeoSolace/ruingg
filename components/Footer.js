/**
 * Simple footer component displayed on every page. Contains
 * copyright information and could later include social links.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Ruin Network. All rights reserved.</p>
    </footer>
  );
}
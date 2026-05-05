import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Metadata shared across all pages
export const metadata = {
  title: 'Ruin Network',
  description: 'Disrupting how communities connect.'
};

/**
 * Root layout for the application. Wraps every page with
 * a header (navbar) and footer. The layout also imports
 * the global CSS so styles apply across the site.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
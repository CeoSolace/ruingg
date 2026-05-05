// Metadata for About page
export const metadata = {
  title: 'Ruin Network | About',
  description: 'Learn about the vision and mission behind Ruin Network.'
};

/**
 * About page describing the vision and mission of the Ruin Network.
 * Explains the overarching goal of creating an interconnected
 * ecosystem of tools, platforms and communities.
 */
export default function AboutPage() {
  return (
    <main className="container" style={{ marginTop: '4rem', maxWidth: '60rem' }}>
      <h1>About Ruin Network</h1>
      <p style={{ marginTop: '1rem', lineHeight: 1.6, color: 'var(--muted)' }}>
        Ruin Network exists to empower digital communities by providing
        robust tools, platforms and infrastructure. We believe in
        challenging outdated systems and building innovative solutions
        that connect people in meaningful ways. By integrating our
        suite of products under one network, we make it easy for
        creators, gamers and community leaders to grow and manage
        their audiences.
      </p>
      <p style={{ marginTop: '1rem', lineHeight: 1.6, color: 'var(--muted)' }}>
        Our mission is simple: disrupt the status quo and pave the
        way for next‑generation community experiences. Whether you
        are managing a Discord server with Bright, sharing your
        personal brand on BioLinkHQ or collaborating on our SMP,
        Ruin Network provides the foundation you need to succeed.
      </p>
    </main>
  );
}
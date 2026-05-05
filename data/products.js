/**
 * List of products and communities in the Ruin Network ecosystem.
 * Each entry defines the slug used for the dynamic route, its name,
 * description, current status and external link. Updating this file
 * will automatically update the site.
 */
const products = [
  {
    slug: 'bright',
    name: 'Bright',
    description:
      'A Discord bot for automation, moderation, and community engagement.',
    status: 'Live',
    link: 'https://brightbot.online'
  },
  {
    slug: 'biolinkhq',
    name: 'BioLinkHQ',
    description:
      'A social hub platform featuring biolinks, mini social features, analytics and discovery.',
    status: 'Live',
    link: 'https://biolinkhq.lol'
  },
  {
    slug: 'civcore',
    name: 'CivCore SMP',
    description:
      'A community‑driven Minecraft SMP server where players build, trade and explore together.',
    status: 'Community',
    link: 'https://discord.gg/PYeyvV7vUZ'
  },
  {
    slug: 'ruin-server',
    name: 'Ruin Network Server',
    description:
      'The main Ruin Network Discord server. Currently being rebuilt to host the core community.',
    status: 'Rebuilding',
    link: 'https://discord.gg/rFVq8jJbxS'
  }
];

export default products;
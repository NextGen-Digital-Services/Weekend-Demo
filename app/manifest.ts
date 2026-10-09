import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Weekend Thrills',
    short_name: 'Weekend Thrills',
    description: 'Dive Into Divine Adventure. Luxury Camping, Villas & Stays in Maharashtra.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F1E5',
    theme_color: '#2A1F1A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fee The Developer',
    short_name: 'Fee The Developer',
    description: 'Veteran-owned software and AI automation company.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [{ src: '/brand/ftd-logo.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}

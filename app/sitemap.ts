import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

const routes: Array<{ path: string; priority: number }> = [
  { path: '', priority: 1 },
  { path: '/pricing', priority: 0.9 },
  { path: '/data-intelligence', priority: 0.8 },
  { path: '/certifications', priority: 0.8 },
  { path: '/devil-to-developer', priority: 0.9 },
  { path: '/apprenticeship', priority: 0.9 },
  { path: '/start', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route.priority,
  }));
}

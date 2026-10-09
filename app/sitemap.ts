import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://weekendzthrills.com';

  const routes = [
    '',
    '/about-us',
    '/camping',
    '/camping/alibaug-beach-camping',
    '/camping/pawna-lake-camping',
    '/camping/matheran-jungle-camping',
    '/villa',
    '/villa/alibaug-villa',
    '/villa/lonavala-villa',
    '/resorts',
    '/resorts/alibaug-resorts',
    '/cottages',
    '/cottages/alibaug-cottage',
    '/faqs',
    '/blogs',
    '/privacy-policy',
    '/terms-condition',
    '/quick-links',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

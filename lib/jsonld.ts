import { Property, FAQItem } from '@/types';

export function getLodgingBusinessSchema(property?: Property) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: property ? property.name : 'Weekend Thrills',
    description: property ? property.overview : 'Handpicked luxury weekend getaways in Alibaug, Lonavala, Pawna Lake, and Matheran.',
    url: property ? `https://weekendzthrills.com/${property.stayType}/${property.slug}` : 'https://weekendzthrills.com',
    telephone: '+91 70306 97820',
    email: 'WeekendThrillsofficial@gmail.com',
    priceRange: property ? `₹${property.startingPrice}` : '₹849 - ₹8,999',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: property ? property.rating.toString() : '4.8',
      reviewCount: property ? property.reviewsCount.toString() : '10000',
    },
  };

  return JSON.stringify(baseSchema);
}

export function getFAQPageSchema(faqs: FAQItem[]) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

export interface ImageMetadata {
  url: string;
  alt: string;
  width: number;
  height: number;
  category: 'camping' | 'villa' | 'resort' | 'cottage' | 'landscape' | 'lifestyle' | 'hero';
}

export const IMAGES: Record<string, ImageMetadata> = {
  heroBanner: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    alt: 'Serene sunset over warm sands and coastal luxury waters',
    width: 2000,
    height: 1200,
    category: 'hero',
  },
  alibaugBeachCamp1: {
    url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    alt: 'Alibaug beach side camping tent illuminated under evening sky',
    width: 1200,
    height: 800,
    category: 'camping',
  },
  alibaugBeachCamp2: {
    url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Coastal beach campfire under night stars in Alibaug',
    width: 1200,
    height: 800,
    category: 'camping',
  },
  pawnaLakeCamp1: {
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Tents pitched on Pawna lake shore with mountain backdrop',
    width: 1200,
    height: 800,
    category: 'camping',
  },
  pawnaLakeCamp2: {
    url: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunset glow over tranquil Pawna lake waters',
    width: 1200,
    height: 800,
    category: 'camping',
  },
  matheranJungleCamp1: {
    url: 'https://images.unsplash.com/photo-1496545668846-56bf2ba78481?auto=format&fit=crop&w=1200&q=80',
    alt: 'Lush green forest canopy camping in Matheran',
    width: 1200,
    height: 800,
    category: 'camping',
  },
  alibaugVilla1: {
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    alt: 'Private luxury villa with pool and warm sunlit patio in Alibaug',
    width: 1200,
    height: 800,
    category: 'villa',
  },
  alibaugVilla2: {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spacious Mediterranean architecture villa exterior in Alibaug',
    width: 1200,
    height: 800,
    category: 'villa',
  },
  lonavalaVilla1: {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hillside modern villa in Lonavala overlooking green valleys',
    width: 1200,
    height: 800,
    category: 'villa',
  },
  alibaugResort1: {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    alt: 'Boutique resort with infinity pool and palm gardens in Alibaug',
    width: 1200,
    height: 800,
    category: 'resort',
  },
  alibaugCottage1: {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozy rustic cottage surrounded by coconut trees and tropical flora',
    width: 1200,
    height: 800,
    category: 'cottage',
  },
  bbqNight: {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Grilled outdoor barbecue evening feast for weekend guests',
    width: 1200,
    height: 800,
    category: 'lifestyle',
  },
  bonfireGathering: {
    url: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm evening bonfire gathering under night sky',
    width: 1200,
    height: 800,
    category: 'lifestyle',
  },
  italianArchTexture: {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm terracotta arches and olive foliage light',
    width: 1200,
    height: 800,
    category: 'landscape',
  },
};

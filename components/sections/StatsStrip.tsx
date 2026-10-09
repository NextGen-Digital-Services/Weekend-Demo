import React from 'react';
import { Users, Star, ShieldCheck, MapPin, Award } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    { label: 'Happy Travellers', value: '10,000+', icon: Users },
    { label: 'Google Rating', value: '4.8 ★', icon: Star },
    { label: 'Verified Stays', value: '100%', icon: ShieldCheck },
    { label: 'Scenic Destinations', value: '4 Hubs', icon: MapPin },
    { label: 'Satisfaction', value: '100%', icon: Award },
  ];

  return (
    <section className="bg-espresso text-cream py-8 border-y border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="pt-4 md:pt-0 flex flex-col items-center justify-center">
                <Icon className="w-5 h-5 text-gold mb-1" />
                <span className="font-serif text-2xl sm:text-3xl text-cream font-light">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light/80 font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

'use client';

import { Trans } from 'react-i18next';

export default function HeroTitle() {
  return (
    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal">
      <Trans 
        i18nKey="hero.title"
        components={{
          em: <em className="text-earth-green" key="em" />
        }}
      />
    </h1>
  );
} 
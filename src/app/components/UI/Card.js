import * as React from 'react';
import { Card as RadixCard } from '@radix-ui/themes';

export function Card({ children, className = '' }) {
  return (
    <RadixCard className={`bg-transparent rounded-xl shadow-lg p-6 ${className}`}>
      {children}
    </RadixCard>
  );
}
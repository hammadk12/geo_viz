import * as React from 'react';
import { Button as RadixButton } from '@radix-ui/themes';

export function Button({ children, variant = 'solid', className = '', ...props }) {
  return (
    <RadixButton
      variant={variant}
      className={`px-4 py-2 rounded-full transition-all duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </RadixButton>
  );
}
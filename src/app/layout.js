// Layout For Each Page

import '@radix-ui/themes/styles.css'
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import { lightTheme } from './theme.config';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme {...lightTheme}>
          {children}
        </Theme>
      </body>
    </html>
  );
}

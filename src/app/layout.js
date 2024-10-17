// Layout For Each Page

import '@radix-ui/themes/styles.css'
import "./styles/globals.css"
import { Theme } from '@radix-ui/themes';
import { darkTheme } from './theme.config';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme appearance='dark' {...darkTheme}>
          {children}
        </Theme>
      </body>
    </html>
  );
}

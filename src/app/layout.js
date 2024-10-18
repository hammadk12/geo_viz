// Layout For Each Page

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes';
import "./styles/globals.css"
import Navbar from './components/UI/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme appearance='dark'>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}

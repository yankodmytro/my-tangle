import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '../components/TopBar/TopBar';
import { Body } from '../components/Body/Body';

export const metadata: Metadata = {
  title: 'Storefront',
  description: 'E-commerce storefront',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Body>
        <TopBar />
        {children}
      </Body>
    </html>
  );
}

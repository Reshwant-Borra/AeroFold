import type { Metadata } from 'next';
import { SiteHeader } from '@/components/nav/SiteHeader';
import { SiteFooter } from '@/components/nav/SiteFooter';
import { MotionProvider } from '@/components/motion/MotionProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'AeroFold - Sustainable Deorbiting for CubeSats',
  description:
    'An origami-inspired drag sail that fits inside a CubeSat and uses shape-memory alloy to deploy at end-of-life, deorbiting satellites within a year instead of decades.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <SiteHeader />
          <main className="pt-20">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}


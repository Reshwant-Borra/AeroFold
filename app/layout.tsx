import type { Metadata } from 'next';
import { SiteHeader } from '@/components/nav/SiteHeader';
import { SiteFooter } from '@/components/nav/SiteFooter';
import { MotionProvider } from '@/components/motion/MotionProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'AeroFold | [PLACEHOLDER: Product title]',
  description: '[PLACEHOLDER: AeroFold meta description]',
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

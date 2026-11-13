import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Product Rail Gallery — demo',
  description: 'Interactive clothing rail demo embedded in Tilda.'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

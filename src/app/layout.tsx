import './globals.css';

export const metadata = {
  title: 'Doveon',
  description: 'Doveon Landing Page',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
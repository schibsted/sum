import { FC } from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="no" className={roboto.className}>
      <body className="h-screen bg-gray-100">{children}</body>
    </html>
  );
};

export const metadata = {
  title: {
    default: 'Sum',
    template: '%s - Sum',
  },
  themeColor: '#dd0000',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default Layout;

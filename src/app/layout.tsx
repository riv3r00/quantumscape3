import './globals.css';
import StockTicker from './components/stock-ticker';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StockTicker />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/stocks">Stocks</Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

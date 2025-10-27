import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/PretendardVariable.woff2',
      weight: '45 920',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio | Web Publisher',
  description: '웹퍼블리셔 포트폴리오',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${pretendard.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

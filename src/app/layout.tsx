import type { Metadata } from "next";
import  localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";

const avenir = localFont({
  src: [
    { path: '../../public/fonts/Avenir-Black-03.ttf', weight: '900', style: 'normal' },
    { path: '../../public/fonts/Avenir-BlackOblique-04.ttf', weight: '900', style: 'italic' },
    { path: '../../public/fonts/Avenir-Book-01.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Avenir-BookOblique-02.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Avenir-Heavy-05.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Avenir-HeavyOblique-06.ttf', weight: '700', style: 'italic' },
    { path: '../../public/fonts/Avenir-Light-07.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Avenir-LightOblique-08.ttf', weight: '300', style: 'italic' },
    { path: '../../public/fonts/Avenir-Medium-09.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Avenir-MediumOblique-10.ttf', weight: '500', style: 'italic' },
    { path: '../../public/fonts/Avenir-Oblique-11.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Avenir-Roman-12.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-avenir',
});


export const metadata: Metadata = {
  title: {
    template: '%s | richard álvarez',
    default: 'richard Alvarez',
  },
  description: 'Artist website of Richard Álvarez.',
  keywords: [
    'Rick Alvarez',
    'rick',
    'Alvarez',
    'dvi',
    'canon xl2',
    'Canon XL2',
    'glitch art',
    'raul duke',
    'Raoul Duke',
    'Raul Duke',
    'underground artist',
    'vfx',
    'chicago',
    'music scene',
    'music videos',
    'art',
    'poetry',
    'latinx art',
    'video art',
    'code',
    'programming',
    'p5js',
    'chicago underground artists',
    'cgi',
    'animation',
    'punk art',
    'youtube music videos',
    'nudity in music videos',
    'chicago underground film festival',
  ],
  openGraph: {
    siteName: 'raulduke.com',
    title: 'Richard Álvarez',
    description: 'Artist website of Richard Álvarez.',
    type: 'website',
    locale: 'en_US',
    url: 'https://raulduke.com',
    images: [
      {
        url: 'https://raulduke.com/images/BANNER.jpg',
        width: 800,
        height: 650,
        alt: 'Richard Álvarez',
      },
    ],
  },
  metadataBase: new URL('https://raulduke.com'),
  icons: [
    { rel: 'icon', href: '/favicon.ico', url: '/favicon.ico' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={avenir.className + " flex flex-col bg-black text-white justify-center items-center min-h-[100svh]"}>
        <Header></Header>
        <section className="flex grow flex-1 w-full"> 
          {children}
        </section>
        <section>
          <footer className="z-30 w-full flex flex-col items-center justify-center gap-2 text-[0.7em] pb-5 px-6">
            <p>© {new Date().getFullYear()} Richard Alvarez</p>
          </footer>
        </section>
      </body>
    </html>
  );
}

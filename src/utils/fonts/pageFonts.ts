import { Roboto, Bai_Jamjuree } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const baiJ = Bai_Jamjuree({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-baiJ',
  subsets: ['latin'],
});

export const bEs = localFont({
  src: '../../public/fonts/Beautiful_ES.ttf',
  variable: '--font-bEs',
});

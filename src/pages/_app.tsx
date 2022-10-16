import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
// import { ThemeProvider } from '@/context/ThemeContext';

import '@/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

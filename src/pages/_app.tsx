import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
// import { ThemeProvider } from '@/context/ThemeContext';

import '@/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

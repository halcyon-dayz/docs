// _app.tsx nextjs starter code
import App, { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

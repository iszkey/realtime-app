import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false, //fetch失敗時にリトライしない
            refetchOnWindowFocus: false, //ブラウザに戻ったときに再フェッチしない
            suspense: true, // react18 のsuspense機能を使用する
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />;
        </QueryClientProvider>
    );
}

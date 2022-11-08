import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header/Header';
import Toast from '../components/Toast/Toast';
import FloatingBtn from '../components/Whatsapp/FloatingBtn';
import '../styles/main.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Get Erizo 😎</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Header />

        <Component {...pageProps} />

        <FloatingBtn />
      </QueryClientProvider>

      <Toast />
    </>
  );
}

export default MyApp;

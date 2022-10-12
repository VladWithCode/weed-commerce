import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header/Header';
import FloatingBtn from '../components/Whatsapp/FloatingBtn';
import '../styles/main.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Component {...pageProps} />

      <FloatingBtn />
    </QueryClientProvider>
  );
}

export default MyApp;

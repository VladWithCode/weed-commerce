import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header/Header';
import '../styles/main.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

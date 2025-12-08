import '@/styles/globals.scss';
import Layout from '../components/layout/layout';
import ModalOverlay from '../components/ui/modal/modal-overlay';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ModalOverlay />
    </Layout>
  );
}

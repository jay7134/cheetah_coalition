import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { useEffect } from "react";

import 'animate.css';
import Layout from '../components/Temp';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>  
    </>
  );
}

export default MyApp

import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'accessible-nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
      <link rel='stylesheet' href='https://unpkg.com/accessible-nprogress/dist/accessible-nprogress.min.css'/>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
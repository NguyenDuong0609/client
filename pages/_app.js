import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import LayoutAdmin from '../components/Admin/Layout/LayoutAdmin';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.asPath === '/porfolio') {
    return <Component {...pageProps} />
  }
  if(router.asPath === '/admin/login') {
    return <Component {...pageProps} />
  }
  if(router.asPath === '/admin') {
    return (
      <LayoutAdmin>
        <Component {...pageProps}/>
      </LayoutAdmin>
    );
  }
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp

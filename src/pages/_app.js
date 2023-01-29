import '../../styles/styles.css'
import '../../styles/reset.css'

import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  const getDefaultLayout = (page) => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )}
  const getLayout = Component.getLayout || getDefaultLayout;
  
  return getLayout(<Component {...pageProps} />);
}

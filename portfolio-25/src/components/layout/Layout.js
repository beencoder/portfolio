import { Fragment } from 'react';

import Seo from './Seo';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, ...seoProps }) {
  return (
    <Fragment>
      <Seo {...seoProps} />
      <Header />
      <main id="main" className="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}

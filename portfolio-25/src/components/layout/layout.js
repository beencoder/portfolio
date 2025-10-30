import { Fragment } from 'react';

import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main id="main" tabIndex={-1}>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}

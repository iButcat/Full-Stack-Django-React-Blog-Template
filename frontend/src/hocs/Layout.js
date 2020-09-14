import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = (props) => (
  <div>
   <Navbar />
   {props.children}
   <Footer />
  </div>
);

export default Layout;

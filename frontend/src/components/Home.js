import React from 'react';

import Header from './Header';
import Blog from './Blog';

const backgroundImage = require("../images/blog_home.jpg");

const Home = () => (
  <React.Fragment>
  <Header
    styling={{ backgroundImage: `url(${backgroundImage})`}}
    title="Home"
    text="Lorem Ipsum has been the industry's standard dummy"
    />
  <Blog />
  </React.Fragment>
);

export default Home;

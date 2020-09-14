import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import About from './components/About';

import Layout from './hocs/Layout';

function App() {
  return (
    <Router>
        <Switch>
          <Layout>
           <Route exact path="/" component={Home} />
           <Route exact path="/blog/:id" component={BlogDetail} />
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/about" component={About} />
          </Layout>
        </Switch>
    </Router>
  );
}

export default App;

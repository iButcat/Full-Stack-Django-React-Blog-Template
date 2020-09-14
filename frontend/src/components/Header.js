import React from 'react';


const Header = (props) => (
  <header className="masthead" style={props.styling}>
    <div classNames="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="page-heading">
            <h1>{props.title}</h1>
            <span className="subheading">{props.text}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

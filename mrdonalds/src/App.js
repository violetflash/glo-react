import React from 'react';
// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import NavBar from "./Components/NavBar/Navbar";
import Menu from "./Components/Menu/Menu";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    background-color: #FFFBEC;
    //color: #fff;
    margin: 0;
    font-size: 20px;
    font-family: Roboto, sans-serif;

  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3 {
    font-family: 'Philosopher', sans-serif;
    padding: 0;
    margin: 0;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
`;

const App = props => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <NavBar />
            <Menu />
        </React.Fragment>
    );

};

export default App;
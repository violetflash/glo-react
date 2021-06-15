import React from 'react';
import NavBar from "./Components/NavBar/Navbar";
import Menu from "./Components/Menu/Menu";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";



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
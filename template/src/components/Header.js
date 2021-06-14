import React from 'react';
import Hyperlink from "./elements/Hyperlink";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Hyperlink children={<div className="header-logo"></div>} url="#"/>
                    <Hyperlink className="Header-phone" url="tel:888" text=""/>
                    <div className="header-phonelink">
                        <Hyperlink url="tel:7(962)556-1234" text="+7(962)556-1234"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

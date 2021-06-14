import React from 'react';

const Button = ({children, ...props}) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {children || props.text}
        </button>
    );
};

export default Button;

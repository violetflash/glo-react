const Button = ({children, ...props}) => {
    return (
        <button className={props.className}>
            {children || props.text}
        </button>
    );
};

export default Button;

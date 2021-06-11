const Hyperlink = ({children, ...props}) => {
    return (
        <a className={props.className} href={props.url}>
            {children || props.text}
        </a>
    )
};

export default Hyperlink;

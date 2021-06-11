
const SliderItem = props => {
    const { prefix, img, text } = props;

    return (
        <div className={prefix + 'slider_item'}>
            <div style={{ backgroundImage: `url(${img})` }} className={prefix + '-img'}></div>
            <div className="features-feature">{text}</div>
        </div>
    )
};

export default SliderItem;


const SliderItem = props => {
    const { prefix, img } = props;

    return (
        <div style={{ backgroundImage: `url(${img})` }} className={prefix + '-img'}></div>
    )
};

export default SliderItem;

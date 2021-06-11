import SliderItem from './SliderItem';

const Slider = props => {
    const { prefix } = props;

    return (
        <div className={prefix + '-slider'}>
            <div className={prefix + '-slider-items'}>
                <SliderItem prefix={prefix} img="../images/1.svg" />
            </div>
        </div>
    )
};

export default Slider;

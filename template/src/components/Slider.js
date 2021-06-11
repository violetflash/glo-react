import SliderItem from './SliderItem';
import Button from './elements/Button';
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';
import img3 from '../images/img3.svg';
import img4 from '../images/img4.svg';

const Slider = props => {
    const { prefix } = props;
    const prevArrow = (
        <svg width="9" height="16"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
            </path>
        </svg>
    );

    const nextArrow = (
        <svg width="9"
             height="16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
            </path>
        </svg>
    );

    return (
        <div className={prefix + '-slider'}>
            <div className={prefix + '-slider_items'}>
                <SliderItem prefix={prefix} img={img1} text="Первое целевое преимущество" />
                <SliderItem prefix={prefix} img={img2} text="Второе целевое преимущество"/>
                <SliderItem prefix={prefix} img={img3} text="Третье целевое преимущество"/>
                <SliderItem prefix={prefix} img={img4} text="Четвертое целевое преимущество"/>
            </div>
            <Button children={prevArrow} className={prefix + `-slider-arrow ${prefix}-slider-prev`} />
            <Button children={nextArrow} className={prefix + `-slider-arrow ${prefix}-slider-next`} />
        </div>
    )
};

export default Slider;

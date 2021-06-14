import H2 from './elements/H2';
import React from 'react';
import Slider from './Slider';

const Features = () => {
    const prefix = 'features';
    return (
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <H2 className="features-head" text="Уникальный заголовок для преимущества компании"/>
                    <div className="features-subhead">О нас</div>
                    <div className="features-description">
                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                        сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                        оратору отточить.
                    </div>
                    <Slider prefix={prefix}/>
                </div>
            </div>
        </section>
    );
}

export default Features;

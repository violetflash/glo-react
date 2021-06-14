import React from 'react';
import Hyperlink from "./elements/Hyperlink";

const Features = () => {
    const prefix = 'footer';
    return (
        <footer>
            <div className={prefix}>
                <div className={prefix + '-logo'}></div>
                <div children={<span>© 2020 XXXcompany. Все права защищены.</span>} className={prefix + '-company'}></div>
                <Hyperlink className={prefix + '-phone'} url="tel:888" />
                <div className={prefix + '-websurfer'}>
                    <span className={prefix + '-websurfer_build'}>Сделано</span>
                    <Hyperlink url="#" text="Ваше имя"/>
                </div>
                <div className={prefix + '-phonelink'}>
                    <Hyperlink url="tel:7(962)556-1234" text="+7(962)556-1234"/>
                </div>
            </div>
        </footer>
    );
}

export default Features;
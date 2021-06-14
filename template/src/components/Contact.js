import React from 'react';
import H2 from './elements/H2';
import Form from './elements/Form';
import Hyperlink from './elements/Hyperlink';

const Contact = () => {
    const prefix = 'contact';
    return (
        <section className={prefix}>
            <div className="wrapper">
                <div className="contact-wrapper">
                    <H2 className={prefix + '-title'} text="Остались вопросы?"/>
                    <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                    <Form prefix={prefix}/>
                    <div className={prefix + '-personal'}>
                        Я даю своё { }
                        <Hyperlink text="согласие" url="#"/>
                        { } на обработку моих персональных данных.
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;
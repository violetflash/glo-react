import React from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = props => {
    const { action, prefix } = props;
    return (
        <form action={action} className={prefix + '-form'}>
            <Input type='text' placeholder="Ваше имя" />
            <Input type='tel' placeholder="Телефон" />
            <Input type='email' placeholder="E-mail" />
            <Button children={<span>Позвоните мне</span>} className={`btn ${prefix}-btn`}/>
        </form>
    )
};

export default Form;
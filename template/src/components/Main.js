import Button from './elements/Button';

const Main = () => {
    return (
        <main>
            <div className="wrapper">
                <div className="main">
                    <h1 className="main-head">
                        Заголовок c уникальным торговым предложение по системе 4U
                    </h1>
                    <div className="main-small">
                        Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
                        вебмастеру сгенерировать несколько абзацев более.
                    </div>
                    <Button children={<span>Подробнее</span>} className="btn main-btn" />
                </div>
            </div>
        </main>
    )
}

export default Main;

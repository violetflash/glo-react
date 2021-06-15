const db = {
    additions: ['Гелий', 'Пакетик', 'Бантик', 'Подарочная упаковка', 'Фатин', 'Индивидуальная упаковка с полиграфией',
        'Конфетти', 'Лента'],
    foiled: [
        {
            name: 'Школа',
            img: './baloons/foiled/01.jpg',
            id: 1,
            price: 60,
            country: 'ru',
            size: '17"/43 см'
        },
        {
            name: 'Лесные друзья',
            img: './baloons/foiled/02.jpg',
            id: 2,
            price: 62,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Волшебный лес',
            img: './baloons/foiled/03.jpg',
            id: 3,
            price: 62,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Цум Цум',
            img: './baloons/foiled/04.jpg',
            id: 4,
            price: 62,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Холодное сердце Голография',
            img: './baloons/foiled/05.jpg',
            id: 5,
            price: 62,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Тигренок',
            img: './baloons/foiled/06.jpg',
            id: 6,
            price: 60,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Леди Баг',
            img: './baloons/foiled/07.jpg',
            id: 7,
            price: 32,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Комплимент для мамы',
            img: './baloons/foiled/08.jpg',
            id: 8,
            price: 77,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Комплимент для папы',
            img: './baloons/foiled/09.jpg',
            id: 9,
            price: 77,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Любимой мамочке!',
            img: './baloons/foiled/10.jpg',
            id: 10,
            price: 60,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Любимой мамочке. Цветы',
            img: './baloons/foiled/11.jpg',
            id: 11,
            price: 60,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Смелый и сильный',
            img: './baloons/foiled/12.jpg',
            id: 12,
            price: 60,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Покоряй вершины',
            img: './baloons/foiled/13.jpg',
            id: 13,
            price: 60,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Живи Ярко!',
            img: './baloons/foiled/14.jpg',
            id: 14,
            price: 62,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Смайл',
            img: './baloons/foiled/15.jpg',
            id: 15,
            price: 50,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Краски жизни',
            img: './baloons/foiled/16.jpg',
            id: 16,
            price: 62,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Ловец снов в упаковке',
            img: './baloons/foiled/17.jpg',
            id: 17,
            price: 330,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Летние цветы в упаковке',
            img: './baloons/foiled/18.jpg',
            id: 18,
            price: 82,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Ты наша гордость',
            img: './baloons/foiled/19.jpg',
            id: 19,
            price: 60,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Счастья, добра, тепла',
            img: './baloons/foiled/20.jpg',
            id: 20,
            price: 82,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Будь счастлива!',
            img: './baloons/foiled/21.jpg',
            id: 21,
            price: 62,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Пусть сбудутся все мечты',
            img: './baloons/foiled/22.jpg',
            id: 22,
            price: 72,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Лучшие друзья',
            img: './baloons/foiled/23.jpg',
            id: 23,
            price: 45,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Всего Cвежего',
            img: './baloons/foiled/24.jpg',
            id: 24,
            price: 62,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Сердце',
            img: './baloons/foiled/25.jpg',
            id: 25,
            price: 72,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Ты самый лучший',
            img: './baloons/foiled/26.jpg',
            id: 26,
            price: 60,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Детка, ты просто космос',
            img: './baloons/foiled/27.jpg',
            id: 27,
            price: 72,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Счастье это ты!',
            img: './baloons/foiled/28.jpg',
            id: 28,
            price: 72,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Сияй',
            img: './baloons/foiled/29.jpg',
            id: 29,
            price: 60,
            country: 'spain',
            size: '18"/46см'
        },
        {
            name: 'Ты просто огонь',
            img: './baloons/foiled/30.jpg',
            id: 30,
            price: 92,
            country: 'ru',
            size: '19"/48см'
        },
        {
            name: 'Синий мрамор',
            img: './baloons/foiled/31.jpg',
            id: 31,
            price: 172,
            country: 'ru',
            size: '19"/48см'
        },
    ],
    other: [
        {
            name: 'Ручной насос',
            img: '/baloons/other/01.jpg',
            id: 1,
            price: 250,
            choices: ['Фиолетовый', 'Белый', 'Синий', 'Красный'],
        },
        {
            name: 'Стойка для шаров',
            img: '/baloons/other/02.jpg',
            id: 2,
            price: 1340,
            choices: ['20 отверстий', '30 отверстий', '40 отверстий', '50 отверстий'],
        },
        {
            name: 'Сетка для сброса / запуска шаров',
            img: '/baloons/other/03.jpg',
            id: 3,
            price: 900,
            choices: ['100 шаров', '200 шаров', '300 шаров', '500 шаров'],
        },
        {
            name: 'Конфетти, квадраты',
            img: '/baloons/other/04.jpg',
            id: 4,
            price: 980,
            choices: ['Золото', 'Серебро', 'Ассортимент цветов'],
        },
        {
            name: 'Воздух',
            img: '/baloons/other/05.jpg',
            id: 5,
            price: 2600,
            choices: ['Простой', 'Апельсиновый', 'Клубничный', 'Лесные ароматы'],
        },
    ]
};

export default db;

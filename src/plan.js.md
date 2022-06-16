доделываем корзину {
    автоматическое высчитывание цены * количество товара
    надо сделать подсчет оплаты
}

сделать страницы для самих товаров

сделать фильтрацию 

на информации пишем карусель

добавить карту в контакты

сделать версию для планшетов и смартфонов

залить все на бесплатный хостинг






 





if значение стейта of инпута-чекбокса true, что делается на тру, то в другом стейте этого инпута-чекбокса передается значение равное 
лишке у этого инпута-чекбокса, все отвавливается на клик, так же при повторном клике передается пустая строка

крч скорее всего надо в инпуте написать тернар и присваивать инпуту 
дефолт пустой или бакстер и потом фильтрация будет происходить сама
либо по состоянию инпута либо через какую-то константу в которой будет 
дефолт нашего инпута но что-то должно контролить его и иметь булин
какой-то юзСтейт


function filter(array = [], filters = {}) {
    const keys = Object.keys(filters).filter(key => filters.hasOwnProperty(key));
    return array.filter(elem => {
        const commonKeys = keys.filter(key => elem.hasOwnProperty(key));
        return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
    });
}

const products = [
    {country: 'Russia', img: 'link.img', genre: 'Comedy', name: 'Вишнёвый сад'},
    {country: 'France', img: 'link.img', genre: 'Novel', name: 'Oberman'},
    {country: 'Italy', img: 'link.img', genre: 'Adventures', name: 'Il cimitero di Praga'},
    {country: 'USA', img: 'link.img', genre: 'Comedy', name: 'The Ransom of Red Chief'}
];

const filters = {
    country: ['Russia', 'Italy', 'France'],
    genre: ['Comedy', 'Novel']
};

const filteredProducts = filter(products, filters);


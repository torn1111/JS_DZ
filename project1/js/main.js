const header = document.querySelector('header');
header.style = 'background-color : gray; height : 100px;';

const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
];
//добавил значения по умолчанию
const renderProduct = (title = 'Something', price = 0) => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = (list) => {
  //по умолчанию при такой записи оно преобразует в струку и в качестве разделителя строк берет запятую, если использовать .join(" ") то вместо запятой будет пробел
 // const productList = list.map((item) => renderProduct(item.title, item.price)).join(" ")//тут можно было убрать скобки т.к. позвращает одну строку                  
 // console.log(productList);

 //сократить можно еще так, может есть еще способы но пока не понимаю как
  document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item.title, item.price)).join(" ");
};

renderProducts(products);
const btns = document.querySelectorAll('.by-btn');
console.log(btns);
 btns.forEach(element => {
  element.style = 'background-color : red; cursor : pointer;'
});

//Создаем класс для товара. //Creating the class for the product 
class GoodsItem {
    constructor (title, price, src) {
        this.title = title;
        this.price = price;
        this.src = src;
    }
    //метод возвращает html-разметку отрисовка корзины. 
    render () {
        return `<div class="goods-list__product-box">
        <span class="goods-list__product-box__name">${this.title}</span>
        <div class="goods-list__product-box__price">${this.price}</div>
        <img class="goods-list__product-box__img" src=${this.src} height="100px" alt="">
        <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
        </div>`
    }
}

//Создаем класс для списка товаров GoodsList. 
class GoodsList {
    constructor () {
        this.goods = [];
    }
     //метод для заполнения списка goods.
    fetchGoods () {
        this.goods = [
            { title : 'Клавиатура', price : 200, src : 'https://via.placeholder.com/200x150' },
            { title : 'Монитор', price : 250, src : 'https://via.placeholder.com/200x150' },
            { title : 'Мышка', price : 500, src : 'https://via.placeholder.com/200x150' }
        ];
    }

    // Метод вывод списка товаров. Для каждого элемента массива goods будем создавать экземпляр
    // класса GoodsItem и запрашивать его разметку
    // render () {
    //     let listHtml = '';
    //     let goodsList = document.getElementById('goods-list__product-box'); 
        
    //     this.goods.forEach (good => {
    //         const goodItem = new GoodsItem (good.title, good.price, good.src);
    //         listHtml += goodItem.render();
    //     });
    //     goodsList.innerHTML = listHtml;
    // }
    
}

//Создаем класс корзина Cart
class Cart {
    constructor () {
        this.goods = [];
    }
    //метод добавления товара в корзину
    addCartItem(cartItem) {
        this.goods.push(cartItem);
    }

    //Метод для вывода итоговой суммы корзины
    totalCartPrice() {
        let totalPrice = document.getElementById('goods-list__total'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    render() {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list__product-box'); 
        
        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.title, good.price, good.src);
            listHtml += goodItem.render();
        });
        goodsList.innerHTML = listHtml;
    }
}

var renderCart = () => {
    const list =  new GoodsList ();
    const cart = new Cart();

    list.fetchGoods();
    cart.addCartItem(list.goods[0]);
    cart.addCartItem(list.goods[1]);
    cart.addCartItem(list.goods[2]);
    cart.render();

    cart.totalCartPrice();
    goodsListSection.style.display = 'block';
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._goodsObjects = [];

    this._fetchGoods();
    this._render();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      const productObject = new ProductItem(product);
      this._goodsObjects.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
    }
  }
}

class ProductItem {
  constructor(item, img='https://via.placeholder.com/200x150') {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const catalog = new ProductsList();

// class ProductsList {
//   #goods;
//   #goodsObjects;
//
//   constructor(container = '.products') {
//     this.container = container;
//     this.#goods = [];
//     this.#goodsObjects = [];
//
//     this.#fetchGoods();
//     this.#render();
//   }
//
//   #fetchGoods() {
//     this.#goods = [
//       {id: 1, title: 'Notebook', price: 20000},
//       {id: 2, title: 'Mouse', price: 1500},
//       {id: 3, title: 'Keyboard', price: 5000},
//       {id: 4, title: 'Gamepad', price: 4500},
//     ];
//   }
//
//   #render() {
//     const block = document.querySelector(this.container);
//
//     for (const product of this.#goods) {
//       const productObject = new ProductItem(product);
//       this.#goodsObjects.push(productObject);
//
//       block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
//     }
//   }
// }
//
// class ProductItem {
//   constructor(item, img='https://via.placeholder.com/200x150') {
//     this.id = item.id;
//     this.title = item.title;
//     this.price = item.price;
//     this.img = img;
//   }
//
//   getHTMLString() {
//     return `<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="Some img">
//               <div class="desc">
//                   <h3>${this.title}</h3>
//                   <p>${this.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//   }
// }

// const catalog = new ProductsList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${item.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products')
//     .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);

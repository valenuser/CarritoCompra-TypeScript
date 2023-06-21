"use strict";
const cards = document.getElementById('card-space');
const cardSelected = document.getElementById('card-selected');
const price = document.getElementById('price'), fragment = document.createDocumentFragment();
const products = [
    {
        id: 1,
        nombre: 'Agua',
        precio: 1,
        img: 'https://www.pizzanando.com/wp-content/uploads/2016/09/agua.png'
    },
    {
        id: 2,
        nombre: 'Pasta',
        precio: 3,
        img: 'https://movemoscalanda.com/wp-content/uploads/2021/01/MACARRON-500G-COVIRAN-SUPER.png'
    },
    {
        id: 3,
        nombre: 'Milka',
        precio: 1,
        img: 'https://delikator.com/wp-content/uploads/MILMAXTRIO-3.png'
    }
];
let productsSelected = [];
function deleteProduct(data) {
    cardSelected.innerHTML = '';
    const productPrice = parseInt(price.innerText.replace('€', ''));
    productsSelected = productsSelected.filter(n => (n === null || n === void 0 ? void 0 : n.id) != data);
    const dataPriceProduct = products.find(n => (n === null || n === void 0 ? void 0 : n.id) == data);
    if (typeof (dataPriceProduct) == "object") {
        const newPrice = productPrice - dataPriceProduct.precio;
        if (newPrice > 0) {
            price.textContent = newPrice + '€';
        }
        else {
            price.textContent = '0€';
        }
    }
    productsSelected.forEach((newProduct) => {
        if (typeof (newProduct) == "object") {
            cardSelected.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'card mb-3';
            div.style.width = '18rem';
            div.style.height = '140px';
            div.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${newProduct.img}" class="img-fluid rounded-start" alt="${newProduct.nombre}">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${newProduct.nombre}</h5>
                <p class="card-text">${newProduct.precio}€</p>
            </div>
            </div>
        </div>
        `;
            div.setAttribute('onclick', `deleteProduct(${newProduct.id})`);
            fragment.appendChild(div);
        }
    });
    cardSelected.appendChild(fragment);
}
function addProduct(data) {
    const productPrice = parseInt(price.innerText.replace('€', ''));
    const dataPriceProduct = products.find(n => (n === null || n === void 0 ? void 0 : n.id) == data);
    if (typeof (dataPriceProduct) == "object") {
        const newPrice = productPrice + dataPriceProduct.precio;
        console.log(newPrice);
        price.textContent = newPrice + '€';
    }
    productsSelected.push(products.find(a => a.id == data));
    productsSelected.forEach((newProduct) => {
        if (typeof (newProduct) == "object") {
            cardSelected.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'card mb-3';
            div.style.width = '18rem';
            div.style.height = '140px';
            div.innerHTML = `
                <div class="row g-0">
                <div class="col-md-4">
                <img src="${newProduct.img}" class="img-fluid rounded-start" alt="${newProduct.nombre}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${newProduct.nombre}</h5>
                    <p class="card-text">${newProduct.precio}€</p>
                </div>
                </div>
            </div>
            `;
            div.setAttribute('onclick', `deleteProduct(${newProduct.id})`);
            fragment.appendChild(div);
        }
    });
    cardSelected.appendChild(fragment);
}
products.forEach((product) => {
    const div = document.createElement('div');
    const a = document.createElement('a');
    div.className = 'card';
    div.style.width = '18rem';
    div.innerHTML = `
    <img src="${product.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.nombre}</h5>
      <p class="card-text">Precio: ${product.precio}€</p>
      </div>
    `;
    div.setAttribute('onclick', `addProduct(${product.id})`);
    fragment.appendChild(div);
});
cards.append(fragment);
if (productsSelected.length == 0) {
    const h2 = document.createElement('h2');
    h2.innerText = 'No hay productos seleccionados';
    cardSelected.append(h2);
}

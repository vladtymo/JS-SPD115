// ------------ get page elements

const createBtn = document.getElementById('create-btn');
const clearBtn = document.getElementById('clear-btn');

const nameInput = document.querySelector('#nameInput');
const priceInput = document.querySelector('#priceInput');
const tBody = document.querySelector('#product-table tbody');

createBtn.onclick = () => {
    //alert("Clicked");

    // let item = {
    //     id: 1,
    //     name: nameInput.value,
    //     price: priceInput.value
    // };
    let item = new Product(nameInput.value, priceInput.value);
    
    console.log(item);

    addProductToTable(item);
};

clearBtn.onclick = () => {
    tBody.innerHTML = '';
}

function addProductToTable(item) {
    tBody.innerHTML += `<tr>
                            <th scope="row">${item.id}</th>
                            <td>${item.name}</td>
                            <td>${item.price}$</td>
                        </tr>`;
}

class Product {
    static count = 10;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Product.count++;
    }
}
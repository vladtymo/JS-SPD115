// ------------ send request to server

const apiUrl = 'https://dummyjson.com/products';

const pagination = {
    limit: 5,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    },
    get end() {
        if (this.total == null) return false;
        return this.skip >= this.total;
    }
}

async function getServerData(url) {
    
    const urlWithParams = url += `?skip=${pagination.skip}&limit=${pagination.limit}`;

    // HTTP GET: address
    const res = await fetch(urlWithParams);
    console.log("Status:", res.status);

    const data = await res.json();
    console.log(data);

    pagination.total = data.total;
    pagination.next();

    if (pagination.end)
        moreBtn.disabled = true;

    for (const i of data.products) {
        itemList.innerHTML += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    [${i.id}] ${i.title}
                                    <span class="badge bg-primary rounded-pill">${i.price}$</span>
                                </li>`;
    }
}

getServerData(apiUrl);

moreBtn.onclick = () => {
    
    getServerData(apiUrl);
};
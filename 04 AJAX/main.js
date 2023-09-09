// ------------ send request to server

const url = 'https://jsonplaceholder.typicode.com/users';

async function getServerData(url) {
    
    // HTTP GET: address
    const res = await fetch(url);
    console.log("Status:", res.status);

    const data = await res.json();
    console.log(data);

    for (const i of data) {
        userList.innerHTML += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    ${i.name}
                                    <span class="badge bg-primary rounded-pill">${i.address.city}</span>
                                </li>`;
    }
}

getServerData(url);
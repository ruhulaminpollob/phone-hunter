const loadPhones = async (searchPhone) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    const res = await fetch(url);
    const data = await res.json();

    return displayPhones(data.data)
}
const displayPhones = phones => {
    
    const showAll = document.getElementById('show-all')
    if (phones.length > 10) {
        phones = phones.slice(0, 10);

        showAll.classList.remove('d-none')
    } else {
        showAll.classList.add('d-none')
    }
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    const noPhoneFound = document.getElementById('no-phone-msg');

    if (phones.length === 0) {
        noPhoneFound.classList.remove('d-none')
    } else {
        noPhoneFound.classList.add('d-none')
    }
    // console.log(phones);
    phones.forEach(phone => {

        const div = document.createElement('div');
        div.classList.add = 'col';
        div.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top " alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        `
        cardContainer.appendChild(div)
    });

    spinnerLoad(false)
}
document.getElementById('search-btn').addEventListener('click', function () {
    spinnerLoad(true)

    const inputFiled = document.getElementById('input-filed');
    const inputText = inputFiled.value;
    loadPhones(inputText)

})

const spinnerLoad = isSpin => {
    const spinner = document.getElementById('spinner')
    if (isSpin) {
        spinner.classList.remove('d-none')
    } else {
        spinner.classList.add('d-none')
    }

}
// loadPhones()
const loadPhones = async (searchPhone,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    const res = await fetch(url);
    const data = await res.json();

    return displayPhones(data.data,dataLimit)
}
const displayPhones = (phones,dataLimit) => {
    
    const showAll = document.getElementById('show-all')
    if (dataLimit && phones.length > 10) {
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
            <button href="#" onclick="showDetails('${phone.slug}')" class="btn btn-primary">See Details</button>
        </div>
        </div>
        `
        cardContainer.appendChild(div)
    });

    spinnerLoad(false)
}

const prosesAllData=dataLimit=>{
    spinnerLoad(true)

    const inputFiled = document.getElementById('input-filed');
    const inputText = inputFiled.value;
    loadPhones(inputText,dataLimit)
}
document.getElementById('search-btn').addEventListener('click', function () {
    prosesAllData(10)

});
document.getElementById("input-filed").addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        prosesAllData(10)
    }
});

const spinnerLoad = isSpin => {
    const spinner = document.getElementById('spinner')
    if (isSpin) {
        spinner.classList.remove('d-none')
    } else {
        spinner.classList.add('d-none')
    }

}

document.getElementById('show-all-btn').addEventListener('click', function () {
    prosesAllData()
})



// show details
const showDetails=async id=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    const res=await fetch(url);
    const data =await res.json();
    console.log(data);
}

// loadPhones()
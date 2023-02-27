const loadPhones = async (searchPhone) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    const res=await fetch(url);
    const data=await res.json();
    return displayPhones(data.data)
}
const displayPhones=phones=>{
    phones=phones.slice(0,20)
    const cardContainer=document.getElementById('card-container');
    cardContainer.innerHTML='';
    // console.log(phones);
    phones.forEach(phone => {
        
        const div=document.createElement('div');
        div.classList.add='col';
        div.innerHTML=`
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
    document.getElementById('search-btn').addEventListener('click', function () {
        const inputFiled=document.getElementById('input-filed');
        const inputText=inputFiled.value;
        loadPhones(inputText)

    })

}

loadPhones()
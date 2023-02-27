const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=samsung`
    const res=await fetch(url);
    const data=await res.json();
    return displayPhones(data.data.slice(0, 9))
}
const displayPhones=phones=>{
    const cardContainer=document.getElementById('card-container');
    console.log(phones);
    phones.forEach(phone => {
        const div=document.createElement('div');
        div.classList.add='col';
        div.innerHTML=`
        <div class="card">
        <img src="${phone.image}" class="card-img-top " alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        `
        cardContainer.appendChild(div)
    });

}

loadPhones()
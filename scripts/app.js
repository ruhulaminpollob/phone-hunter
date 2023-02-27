const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=samsung`
    const res=await fetch(url);
    const data=await res.json();
    return displayPhones(data.data)
}
const displayPhones=phones=>{
    const cardContainer=document.getElementById('card-container');
    const div=document.createElement('div');
    div.innerHTML=`
    
    `
}

loadPhones()
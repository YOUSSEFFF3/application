let array=[]
let Name=document.querySelector(".name")
console.log(Name);

let priice=document.querySelector(".priice")

let discription=document.querySelector("#discription")
let form=document.querySelector(".form")
 let conter=1
function add(key,value) {
    localStorage.setItem("key","value")
}
 
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
console.log(priice.value);

    let object={
        id:conter,
        name:Name.value,
        price:priice.value,
        discription:discription.value,
    }
   
    console.log(localStorage);
    
    console.log(object);
    
    array.push(object)
  console.log(array);
   lesCard()
    conter++


})


function lesCard() {
    let clean =document.querySelector(".box")
   clean.innerHTML=""
array.forEach(element=>{
   clean.innerHTML+=` <div class="part1">
                <h1>product</h1>
                <div class="product-info">
                    <h2 class="namee">${element.name}</h2>
                    <h2 class="price">${element.price}</h2>
                    <p class="discription">${element.discription}</p>
                    <p class="id">${element.id}</p>
                    <button class="modifiad">modifiad</button>
                </div>
            </div>`
    console.log(clean.innerHTML);
})
}
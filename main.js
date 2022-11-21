//Part 1
let alertForm = document.querySelector("#alertForm");
let alertInput = document.querySelector("#alertInput");

alertForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = "";


})

//Part 2

let sandwhichForm = document.querySelector("#sandwhichForm");
let ingredients = document.querySelectorAll("#sandwhichForm .ingredients");

for(let item of ingredients){
    console.log(item.id);
}

sandwhichForm.addEventListener("submit", function(event){
    event.preventDefault();

    let newStr = "";
    for(let i=0; i<ingredients.length; i++){
        if(ingredients[i].checked === true){
            newStr += ` ${ingredients[i].id},  `;
        }
    }
    console.log(newStr)
    alert(`Your sandwhich contains: ${newStr}`)

})

//Part 3
let haircutForm = document.querySelector("#haircutForm");
let haircutInput = document.querySelector("#haircutInput");

barberInput = document.querySelector("#barberInput");
let LongHairRadio = document.querySelector("#longHair");
let shortHairRadio = document.querySelector("#shortHair");
let hair = document.querySelectorAll("#haircutForm .hair")


haircutForm.addEventListener("submit", function(event){
    event.preventDefault();

    let newStr1 = "";
    for(let i = 0; i < hair.length; i++){
        if(hair[i].checked === true){
             newStr1 += `${hair[i].id}`
        }
    }
    
    alert(`Haircut scheduled for ${haircutInput.value} with ${barberInput.value} for ${newStr1}.`);


LongHairRadio.checked = false;
shortHairRadio.checked = false;


})

//Part 4

let createForm = document.querySelector("#CreateAccountForm");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password1 = document.querySelector("#password");
let password2 = document.querySelector("#password2");

createForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert(`Username: ${userName.value} | Email: ${email.value}`)
    userName.value = "";
    email.value = "";
    password1.value = "";
    password2.value = "";
})





















// console.log('Hello world');


const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
let cnicRegex = /^42\d{11}$/;



form.addEventListener('submit' , (event)=>{
      event.preventDefault()
    //  console.log(userName.value);
    //  console.log(email.value);
    //  console.log(password.value)

    console.log(emailRegex.test(email.value));
    console.log(regex.test(email.value));
    console.log(cnicRegex.test(email.value))

    if(cnicRegex.test(email.value)){
        console.log(email.value);
    }
})


















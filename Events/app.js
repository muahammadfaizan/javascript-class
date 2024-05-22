// console.log('hello world')









// const btn = document.querySelector('#btn');

// function hello(){
//     console.log('hello world');
// }

// btn.addEventListener('click' , hello)







// btn.addEventListener('click' , function(){
//     console.log('hello world')
// })













// bubbling
// capturing




// const ul = document.querySelector('#ul')

// const about = document.querySelector('#about')



// ul.addEventListener('click' , function(){
//     console.log('click ul')
// } , false)

// about.addEventListener('click' , function(event){
//     event.stopPropagation();
//     console.log('about click')
// } , false)






// const ul = document.querySelector('.images')
// const image3 = document.querySelector('#image-3')
// const link = document.querySelector('#link')

// ul.addEventListener('click' , function(){
//     console.log(event.target.parentNode.tagName);
//     if(event.target.parentNode.tagName === "LI"){
//         event.target.parentNode.remove()
//     }

// })











// onchange event


// const input = document.querySelector('#input');


// input.addEventListener('change' , function(){
//     console.log('oncahnge event')
// })




// mouseover event


// const input = document.querySelector('#input');

// input.addEventListener('mouseover' , function(){
//     console.log('mouseover event')
// })





// mouseout event


// const input = document.querySelector('#input')

// input.addEventListener('mouseout' , function(){
//     console.log('mouseout click')
// })











// bulb project




// const image = document.querySelector('#image');

// image.addEventListener('mouseout' , function(){
//     image.src ="https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png"
// })


// image.addEventListener('mouseover' , function(){
//     image.src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png'
// })





const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const form = document.querySelector('#form');

// form.addEventListener('submit' , function(event){
//     event.preventDefault()
//     console.log(userName.value)
//     console.log(email.value)
//     console.log(password.value)


// })




form.addEventListener('submit' , function(event){
    event.preventDefault();
    console.log(userName.value);
    console.log(email.value)
    console.log(password.value)

})




























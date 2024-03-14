// console.log('hello world');

            //   console.log('hello array');


// let foods = ['biryani'  , 'pulao' , 'daal' , 'nihari' , 'krahi' , 'qourma' , ['spicy' , 'normal'] ]
// console.log(`${foods[1]} ${foods[6][1]}`);




 
// const fruits = ['orange' , 'mango' , 'watermelon' , 'pineapple'];
// // console.log(fruits[1]);

// fruits.push('apple')
// // fruits.pop()
// fruits.unshift('banana')
// // fruits.shift()
// console.log(fruits)

                 
  




//     splice


// const fruits = ['orange' , 'mango' , 'watermelon' , 'pineapple' , 'guave' , 'apple' , 'melon' , 'grapes' , 'kiwi' , 'annar' , 'nshpati'];
// fruits.splice(4 , 2 , 'kinno' , 'strawberry');
// console.log(fruits)




//    split 

 
// const names = 'my name is muhammad';
// const arr = names.split(' ');
// console.log(arr);




// slice 


// const names = "my name is muhammad";
// const arr = names.slice(" ")
// console.log(arr);



// join 





// console.log("hello array");

// var userName = "muhammad";    //declare
// var userName = "Faizan";      //redeclare
// userName = "Asim";            //reassign

// console.log(userName);


    //   var 
   //    redeclare
//    //     reassign


//    let userName = "muhammad";

//    console.log(userName)


// let userName = 'muhammad' ;
// // let userName = 'faizan' ;
// userName = 'Asim' ;
// console.log(userName)



// const userName = 'muhammad';
// userName = 'Asim' ;
// console.log(userName)






// let cities = 'karachi';
// let cities = 'lahore';
// let cities = 'balochistan';



// let cities = ["lahore" , 'karachi' , 'faislabad' , 'balochistan' , 'islamabad' , 'rawalpindi' , ['layari' , 'sea-view' , 'golimar' , 'clifton']];
// // console.log(cities[4])
// // console.log(cities[6][2]);
// // console.log(cities.length);
// // console.log(cities[3]);
// console.log(typeof(cities))





// const userName = ['Muhammad' , 'Faizan' , 'asim'];
// // console.log(`${userName[0]} ${userName[2]}`);


// userName[0] = 'talha';
// userName[4] = 'ali';

// console.log(userName[3])











// const userName = []
// userName[0] = prompt('enter name1');
// userName[1] = prompt('enter name2');
// userName[2] = prompt('enter name3');
// userName[3] = prompt('enter name4');
// userName[4] = prompt('enter name5');
// console.log(userName);










// const fruit = 'apple' ;
// const fruits = ['mango' , 'banana' , 'strawberry' , fruit];
// console.log(fruits);









//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof



//     push      // akhr mai add hoga

// const fruits = ['mango' , 'banana' , 'apple' , 'kinno' , 'grapes'];
// fruits.push('watermelon');
// console.log(fruits);


    //    pop   // Akri wala hat jayen ga


// const fruits = ['mango' , 'apple' , 'banana' , 'orange'];
// fruits.pop('')
// console.log(fruits)    



//   unshift    //  shuru mai add hoga

// const fruits = ['mango' , 'orange' , 'apple' , 'banana'];
// fruits.unshift('grapes');
// console.log(fruits)


    //   shift    // shuru se hat jayen ga

// const fruits = ['mango' , 'apple' , 'banana' , 'orange'];
// fruits.shift('');
// console.log(fruits);
    



// const fruits = ['mango' , 'apple' , 'banana' , "orange" ];
// fruits.push('strawberry');
// fruits.pop();
// fruits.unshift('watermelon');
// fruits.shift();
// console.log(fruits);





// fruits.splice('shurw kaha sa krna ha' , 'kitna delete krna hain' , 'uski jaga kiya rkhna haa')
// fruits.splice(2 , 1, 'strawberry' , 'watermelon' , 'melon' , 'mangoes' , 'guava' , 'nashpati' , 'grapes' , 'anaaar' , 'kinno');
// fruits.splice(2 , 4);
// fruits.splice(6 , 2 , 'banana');
// fruits[3].pop()
// console.log(fruits);


// const newArr = fruits.splice(3)
// console.log(newArr)



    //   split        

 
// const names = 'Muhammad faizan hanif';
// const arr = names.split(' ')
// console.log(arr)    


    
   
//     //  join

// const names = ['muhammad' , 'faizan' , 'hanif'];
// const arr = names.join(' ')
// console.log(arr);







// fruits.splice(1 , 3 , 'gvaue' , 'kiwi');
// console.log(fruits)




















// const fruits = ['apple' , 'banana' , 'orange' , 'mango' , 'grape' , 'straberry'];

// const input = document.querySelector('#input-1')
// // console.log(fruits.includes('banana'));


// const change = document.querySelector('.status');

// function fruitsbtn(){
//     console.log(input.value);

//     if(fruits.includes(input.value)){
//         console.log('fruits available hain..');
//         change.innerHTML = 'frutis is available';
    
//     }else{
//         console.log('fruits is not available...');
//         change.innerHTML = "frutis is not available";
//     }

//     input.value = ''
// }



















// const fruits = ['apple' , 'banana' , 'orange' , 'mango' , 'grape' , 'straberry'];


// const input = document.querySelector('#input-1')
// const change = document.querySelector('.status');

// function getfruits(){
//     console.log(input.value);
//     if(fruits.includes(input.value)){
//         console.log('fruits available ha');
//         change.innerHTML = 'fruits is available';
//     }else{
//         console.log('fruits availabe nhi hai');
//         change.innerHTML = 'Fruits is not available';
//     }
//     input.value = '' ;
// }









const fruitName =  ['apple' , 'banana' , 'mango' , 'grapes' , 'orange' , 'strawberry'];


const input = document.querySelector('#input');
const change = document.querySelector('.status')

function getfruits(){
    console.log(input.value);
    
    if(fruitName.includes(input.value)){
        console.log('fruits available hain')
        change.innerHTML = 'fruits is available';
    }else{
        change.innerHTML = 'fruits is not availabe'
    }

    input.value = '' ;

}










// const fruits = ['apple' , 'banana' , 'orange' , 'mango' , 'grape' , 'straberry'];

// fruits.splice(2 , 2);
// fruits.splice(2 , 0 , 'fruits-1' , "fruits-2");
// fruits.splice(3 , 0 , 'fruits-3' , 'fruits-4');
// console.log(fruits);








































































































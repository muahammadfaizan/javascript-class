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

                 
  






// const fruits = ['apple' , 'banana' , 'orange' , 'mango' , 'strawberry'];

// const fruits = ['apple' , 'banana' , 'orange' , 'mango' , 'strawberry' , ['pineapple' , 'melon' , 'grapes']];


// console.log(fruits);
// console.log(fruits.length);
// console.log(typeof(fruits));
// console.log(fruits[3]);
// console.log(fruits[5][2]);

// console.log(`${fruits[0]} ${fruits[5][0]}`);













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









    //    var      declare bhi hota hai 
   //     var      redeclare bhi hota hai
    //    var      reassign bhi hota hai




    // var userName = 'muhammad' ;     //  declare
// var userName = 'faizan' ;      // redeclare
// userName = 'asim';              //      reassign

// console.log(userName);



        //   let 

    // let redeclare nhi hota hain !
    // let reassign hota hain ! 


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




        //  Array Method 


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



//   unshift    //  shuru mai Value add hogi

// const fruits = ['mango' , 'orange' , 'apple' , 'banana'];
// fruits.unshift('grapes');
// console.log(fruits)


    //   shift    // shuru se value hat jayen gi

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



    //   split       value ko string mai torta hai      

 
// const names = 'Muhammad faizan hanif';
// const arr = names.split(' ')
// console.log(arr)    


    
   
//     //  join        value ko jorta hai

// const names = ['muhammad' , 'faizan' , 'hanif'];
// const arr = names.join(' ')
// console.log(arr);







// fruits.splice(1 , 3 , 'gvaue' , 'kiwi');
// console.log(fruits)







//      concat       2 array ko ek sath concat kar deta hai



// const num = ['Muhammad' , 'Faizan' , 'Asim'];
// const num1 = ['Talha' , 'sameer' , 'ali'];

// const myArr = num.concat(num1);
// console.log(myArr)





  //     sort       start se alphabet se use hota ha




// const fruits = ['orange' , 'mango' , 'apple' , 'banana'];
// fruits.sort();

// console.log(fruits);


// const point = [40 , 60 , 100 , 5 , 1 , 10 ,30];
// point.sort(function(b , c){return b - c});
// console.log(point);






//     Reverse          array method Reverse hote ha 




// const fruits = ['orange' , 'mango' , 'apple' , 'banana'];
// fruits.reverse()

// console.log(fruits);


  
//     indexof 



// const fruits = ['banana' , 'orange' , 'grapes' , 'apple' , 'strawberry']
// const index = fruits.indexOf('apple' , 3)

// console.log(index);













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








































































































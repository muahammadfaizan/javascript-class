

const people = [
    {
      name: "Alice",
      age: 30,
      hobbies: ["Reading", "Painting"]
    },
    {
      name: "Bob",
      age: 25,
      hobbies: ["Hiking", "Cooking"]
    },
    {
      name: "Charlie",
      age: 35,
      hobbies: ["Gardening", "Photography"]
    },
    {
      name: "David",
      age: 28,
      hobbies: ["Running", "Playing Guitar"]
    },
    {
      name: "Eva",
      age: 40,
      hobbies: ["Yoga", "Knitting"]
    },
    {
      name: "Frank",
      age: 22,
      hobbies: ["Swimming", "Video Games"]
    },
    {
      name: "Grace",
      age: 33,
      hobbies: ["Cooking", "Traveling" , 'football' , 'cricket' , 'basketball']
    },
    {
      name: "Hannah",
      age: 29,
      hobbies: ["Dancing", "Singing"]
    },
    {
      name: "Ian",
      age: 27,
      hobbies: ["Cycling", "Chess"]
    },
    {
      name: "Julia",
      age: 31,
      hobbies: ["Painting", "Reading"]
    },
    {
      name: "Kevin",
      age: 36,
      hobbies: ["Fishing", "Woodworking"]
    },
    {
      name: "Lily",
      age: 24,
      hobbies: ["Photography", "Baking"]
    },
    {
      name: "Mark",
      age: 32,
      hobbies: ["Skiing", "Watching Movies"]
    },
    {
      name: "Nancy",
      age: 38,
      hobbies: ["Bird Watching", "Writing"]
    },
    {
      name: "Oliver",
      age: 26,
      hobbies: ["Gaming", "Reading Comics"]
    }
];
  



const div = document.querySelector('div');




for(let i = 0 ; i < people.length ; i++){
   console.log(people[i]);

   let hobbies = '';

   for(let j = 0 ; j < people[i].hobbies.length ; j++){
      
    // console.log(people[i].hobbies[j]);

    hobbies += `<li>${people[i].hobbies[j]}</li>`

   }

   div.innerHTML += `<h1>Name : ${people[i].name}</h1>
   <h2>Age : ${people[i].age}</h2>
   <ul>${hobbies}</ul>
   <hr/>
   `

}











































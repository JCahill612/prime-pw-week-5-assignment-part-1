console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Jenny',
  lastName: ' Cahill',
  favThreeFoods: ['Pizza', 'Pasta', 'Mexican'],
  hasSiblings: true,
  shoeCount: 6,
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me[ 'firstName' ] + me[ 'lastName' ];
console.log( 'My full name is:', fullName );


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

let first = (me[ 'favThreeFoods' ][0]);{
  console.log( 'First Fav Food:', first);
}
let last = (me[ 'favThreeFoods' ][2]);{
  console.log( 'Last Fav Food:', last);
}

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('Shoe count:', me['shoeCount']);
let newShoeCount = (me['shoeCount'] + 1 );
console.log('New shoe count:', newShoeCount); 

//or

me.shoeCount = (me['shoeCount'] + 1 );
console.log('Other shoe count:', me['shoeCount']);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'black';
console.log('About me:', me);
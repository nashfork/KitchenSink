

let friends = [
{
  name: 'Adam',
  age: 31
},
{
  name: 'Sarah',
  age: 19
},
{
  name: 'Bill',
  age: 12
},
{
  name: 'Mary',
  age: 48
},
{
  name: 'Dianne',
  age: 14
}
];

function checkAge (num1, parameter2) {
  if (num1 > 21) {
    return "welcome";
  } else {
    return "sorry" + " " + parameter2 + "," + " " + "you are not old enough to view this page"
   }
  }

  

  for (let i = 0; i < friends.length; i++) {
    console.log(checkAge(friends[i].age, friends[i].name))
  }

  function getLength (x) {
    return (x.length)
  }
  console.log(getLength ('Hello World!'))

  let word = getLength('Hello World!')

  if (word % 2) {
    console.log('The world is nice and even')
  } else {
    console.log('The world is an odd place!')
  }
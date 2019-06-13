/* lets understand "arrow functions"
Concepts:
- Arow functions dont have their own "this"
- Their sintaxe are simpler than normal functions

*/

// normal function
multiply2Numbers = function(n1, n2){console.log(n1*n2)}
multiply2Numbers(10,10)

//arrow function
multiply2Numbers = (n1,n2) => {console.log(n1*n2)}
multiply2Numbers(10,10)

}



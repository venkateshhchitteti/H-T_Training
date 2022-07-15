//Lambda function (just like arrow function)
var foo = function (x) { return 10 + x; }; //return statement is implicit
//OR
// let foo = (x: number) => {                   //mentioned return
//     return 100 + x;
// }
// //OR
// const foo = function (x: number) {           //mentioned return
//     return 100 + x;
// }
console.log(foo(100));

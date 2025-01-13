//  function Calculator() {
//   if (!isNaN(A + B)) {
//     switch (O) {
//       case "+":
//         return (A + B);
//       case "-":
//         return (A - B);
//       case "*":
//         return (A * B);
//       case "/":
//         return (A / B);
//       default:
//         return ("error");
//     }
//   }
// }
// const A = +prompt("1")
// const B = +prompt("2")
// const O = prompt("?")
// console.log(Calculator(A,B,O))
// function Mean(A,B,C,D,E) {
//   const mean = A + B + C + D + E / 5;
//   if (mean < 12) {
//     return "error";
//   } else return mean;
// }
// console.log(Mean(100,200,30,40,31))
const letter =prompt("enter letter!")
function sentence(){
return letter.toUpperCase()
}
console.log(sentence(letter))
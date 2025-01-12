const leftNumber = +prompt("enter your first Number?");
const operator = prompt("Mathematical Operation?");
const rightNumber = +prompt("enter your first Number?");
if (isNaN(leftNumber) || isNaN(rightNumber)) {
  document.writeln("Error");
} else {
  if (operator==="+"){
    document.writeln(leftNumber+rightNumber)
  } else if (operator==="-"){
    document.writeln(leftNumber-rightNumber)
  }else if (operator==="*"){
    document.writeln(leftNumber*rightNumber)
  } else if (operator==="/"){
    if (rightNumber===0){
      document.writeln("Error: Division By Zero!")
    } else {
      document.writeln(leftNumber/rightNumber)
    }
  } else{
    document.writeln("Unexpected Error!")
  } 
}
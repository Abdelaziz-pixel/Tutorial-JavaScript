//exercise1
var number = 57;
var number1 = 23;
var number2 = 98;
var number3 = 67;

function biggestNumber(number, number1, number2, number3) {
    if (number > number1 && number > number2 && number > number3) 
    {
      console.log(a);
    } 
    else if (number1 > number && number1 > number2 && number1 > number3) 
    {
      console.log(b)
    } 
    else if (number2 > number1 && number2 > number1 && number2 > number3) 
    {
      console.log(c);
    } 
    else 
    {
      console.log(d);
    }
  }
  biggestNumber(number, number1, number2, number3);

  //exercise2
var userAge = Number(prompt("Quel âge avez-vous ?"));
if (userAge !== 0) {
  if (userAge <= 0) {
    alert("Rentrez votre vrai âge !"); 
  }
  if (userAge >= 21) {
    alert("vous pouvez entrer !");
  }
  if (userAge % 2 === 0) {
    alert("Votre âge est paire");
  }
  if (Number.isInteger(Math.sqrt(userAge))) {
    alert("Votre âge est un carré");
  }
} else {
  alert("Vous n'avez rien rentré !")
}
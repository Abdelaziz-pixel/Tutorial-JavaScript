//exercise1
var chest = "\n";

for(var i=1; i <= 8; i++) 
{
 for(var j=1; j <= 16; j++) 
 {
   if(j%2==0) {
     chest += " ";
   }
   else {
     chest += "#";
   }
 }
 chest += "\n";
}

console.log(chest);

//exercise2
var matrix = "\n";

for(var i=1; i <= 4; i++) 
{
 for(var j=1; j <= 4; j++) 
 {
   if(i === j) {
     matrix += "1 \n";
   }
   else 
   {
     matrix += "0 \n";
   }
 }
 matrix += "-------- \n";
}

console.log(matrix);

//Exercice 3 : Nombre paire ?

function isOdd(amont) 
{
 amont = Math.round(Number(amont));
 if(amont%2 === 0) {
   console.log(true);
 }
 else 
 {
   console.log(false);
 }
}

isOdd(4);

//Exercice 4 : Vous avez dit factorielle ?

function factorielle(value) 
{
 if(Number.isInteger(value)) 
 {
    var result = 1;
    for(var i=1; i < value; i++) 
    {
    result += result * i;
   }
   console.log(result);
 }
 else
{
   console.log("erreur");
}
}

factorielle(4);
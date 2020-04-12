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
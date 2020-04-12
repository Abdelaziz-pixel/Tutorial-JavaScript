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
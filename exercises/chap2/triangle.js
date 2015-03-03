console.log("With a do loop")

var sharp = "";
do{
    sharp += "#";
    console.log(sharp);
}while(sharp.length != 7)

console.log("with a for loop");

for (var sharp = "#"; sharp.length <=7 ; sharp += "#")
    console.log(sharp);

console.log("With a while loop")

var sharpWhile = "";
while(sharpWhile.length < 7){
    sharpWhile += "#";
    console.log(sharpWhile);
}

console.log("With a for loop and a break");

for(var sharp = "#"; ; sharp += "#"){
    console.log(sharp);
    if(sharp.length == 7)
	break;
}

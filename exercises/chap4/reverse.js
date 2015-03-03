function reverseArray(array){
    newArray = [];
    for(i=0;i<array.length;i++){
	newArray.unshift(array[i]);
    }
    return newArray;
}

console.log(reverseArray([]));


function reverseInPlace(array){
    if(array.length == 0)
	return array
    else{
        for(i=0;i<=Math.floor(array.length/2);i++){
            var temp = array[i] ;
	    var j = array.length -1 -i
	    array[i] = array[j];
	    array[j] = temp;
        }
    }
    return array;
}

var myArray = []
reverseInPlace(myArray);
console.log("array in place");
console.log(myArray);
	      

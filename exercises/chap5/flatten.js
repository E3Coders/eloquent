/*
Flatten an array of array
*/
function flatten(array){
    function concat(a,b){
	return a.concat(b);
    }
    return array.reduce(concat,[]);//[] not require if array not empty
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));


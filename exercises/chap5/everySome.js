function every(array, f){
    return array.map(f).reduce(and);
}

function some(array,f){
    return array.map(f).reduce(or);
}

function or(a,b){
    return a || b;
}

function and(a,b){
    return a && b;
}

function every2(array, f){
    for(var i = 0; i <array.length; i++){
	if(!f(array[i]))
	    return false;
    }
    return true;
}

//doesn't work!!! 
//the return false doesn't stop the main function but the subfunction
//inside the forEach. So you can't break the forEach with a return or
//a break
function every3(array,f){
    array.forEach(function(elem){a
	if(!f(elem)){
	    return false;
	}
	//break;//can't break the forEach the return is encapsluate to a subfunction
    });
    return true;
}

console.log(every([1,NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, NaN], isNaN));
// → false
//console.log(some([NaN, 3, 4], isNaN));
// → true
//console.log(some([2, 3, 4], isNaN));

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

function every3(array,f){
    array.forEach(function(elem){
	if(!f(elem)){
	    return false;
	}
	break;//can't break the forEach the return is encapsluate to a subfunction
    });
    return true;
}

    console.log(every3([1,NaN, NaN, NaN], isNaN));
// → true
console.log(every3([NaN, NaN, NaN], isNaN));
// → false
//console.log(some([NaN, 3, 4], isNaN));
// → true
//console.log(some([2, 3, 4], isNaN));

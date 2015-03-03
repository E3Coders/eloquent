function arrayToList(array){
    if(array.length == 0)
	return null;
    else
	return {value: array.shift(), rest: arrayToList(array)};
}

console.log(arrayToList([1,2,3]));

function listToArray(list){
    if(list.rest == null)
	return [list.value];
    else
	return [list.value].concat(listToArray(list.rest));
}

console.log(listToArray({value: 1, rest: { value: 2, rest: {value: 3,
							    rest: null}}}));

function prepend(elt, list){
    return {value: elt, rest: list};
}

console.log(prepend(10, prepend(20, null)));

function nth(i,list){
    if(list == null)
	return undefined
    else{
        if(i == 1)
	    return list.value;
	else
	    return nth(i-1,list.rest);
    }
}
console.log("nth");
console.log(nth(1,{value: 1, rest: { value: 2, rest: {value: 3,
						    rest: null}}}));

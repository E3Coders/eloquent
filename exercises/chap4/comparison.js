//It's a bit ugly, too many if in if in for... Find a better solution.
function deepEqual(elt1, elt2){
    // are elt1 and elt2 object and not null
    if(objectNotNull(elt1) && objectNotNull(elt2)){
	//objects have the same number or properties
        if(objectLength(elt1) != objectLength(elt2))
	    return false;
	else{
	    for(var prop in elt1){
                if(!(prop in elt2))
		    return false;
		if(!deepEqual(elt1.prop,elt2.prop))
		   return false;
	    }
	    //if everything is ok return true
	    return true;
	}	
    }else
	return elt1 === elt2;
}

function objectLength(obj){
    var result = 0;
    for(var prop in obj)
	result +=1;
    return result;
}

function objectNotNull(object){
    return (typeof(object) == "object" && object != null)
}


var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, {here: 1, bob: "bob"}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.log(deepEqual(obj, obj));

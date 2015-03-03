function range(start,end){
    var increment = start;
    array = [];
    //check that start and end are numbers and that start < end
    if(!isNaN(start) && !isNaN(end) && start < end){
        do{
	    array.push(increment);
	    increment += 1;
        }while(increment <= end)
    }
    return array;
}


function sum(array){
    var result = 0;
    for(i=0;i<array.length;i++)
	result += array[i];
    return result;
}

//need to check the exception rangeWithStep(5,1,3) is an infinite loop
function rangeWithStep(start,end,step){
    var array = [];
    
    if(arguments[2] == undefined){
	if(start > end)
	    return rangeWithStep(start, end, -1);
        else
	    return rangeWithStep(start, end, 1);
    }else{
	if(step > 0){
            for(i=start;i <= end; i +=step){
                array.push(i);
	    }
	}
	if(step<0){
	    for(i=start; i>= end; i +=step){
                array.push(i);
	    }
	}
    }
    return array;
}

console.log(rangeWithStep(1,5));
console.log(rangeWithStep(1,10,2));
console.log(rangeWithStep(5,1));
console.log(rangeWithStep(5,1,-2));


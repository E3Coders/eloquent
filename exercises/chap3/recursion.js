function isEven(n){
    //The function should accept a number
    if(!isNaN(n)){
	if(n < 0)
	    return isEven(-n);
	else{
	    if(n == 0)
		return true;
	    if(n == 1)
	        return false;
	    else
	        return isEven(n-2);
	}
    }else
        return NaN;	
}

console.log(isEven(36));

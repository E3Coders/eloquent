console.log("simple countBs");
function countBs(str){
    var result = 0;
    for(i=0;i<str.length;i++){
	if(str.charAt(i) == "B")
	    result += 1;
    }
    return result;
}

console.log(countBs("Hello BoB"));

console.log("countBs using countChar");
function countChar(str,character){
    var result = 0;
    for(i=0;i<str.length;i++){
	if(str.charAt(i) == character)
	    result += 1;
    }
    return result;
}

function counBs2(str){
    return countChar(str,"B");
}

console.log(counBs2("BoBB"));

console.log("coutBs as a clojure");
function countBs3(str){
    var result = 0;
    return function(character){
        for(i=0;i<str.length;i++){
            if(str.charAt(i) == character)
		result += 1;
	}
	return result;
    }
}

var charInBonjour = countBs3("Bonjour");
console.log(charInBonjour("B"));

console.log("Another clojure");

function searchChar(character){
    return function(str){
	var result = 0;
        for(i=0;i<str.length;i++){
            if(str.charAt(i) == character)
		result += 1;
	}
	return result;   
    }
}

var numberOfB = searchChar("B");
console.log(numberOfB("BoBBB"));

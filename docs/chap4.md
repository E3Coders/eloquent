#Objects and Array

##Array

An array is a list of value. Arrays have indexes. The index begin at 0! You can access a value of an
array with its index and the syntax array[index]

    var myArray = [1,2,3,4,5];
    console.log(myArray);
    console.log(myArray[3]);//return 4

If you try to access an index not defined in an array, the value
returned is undefined

    console.log(myArray[43]);//return undefined

##Properties

A property is an expression which can access a property of a value.

    console.log("hello".length);//length property

Most values have properties excepted null and undefined. If you try to
access a property from these values you will get an error.

You can access a property with the . or [] syntax:

* The name after . must be valid (no space, no number at the
  beginning...) and must name directly the property
* the name inside [] is evaluated and then used to access the property

Elements of an array are stored in properties.

##Methods

A property can refer to a function value.

    console.log("hello".toUpperCase());//return HELLO

Properties that contain functions are called methods

some common mehtods for Arrays:

* myArray.push("value"); //add the "value" at the end of the array
* myArray.join(" "); //the array is flatten
* myArray.pop();//the last value is deleted from the array
* indexOf(elt);//index of the elt or -1 if not find. Start the search from the beginning of the array
* lastIndexOf(elt); same as indexOf but start from the end of the array
* shift(); delete the first element of the array
* unshift(elt); add let at the beginning of the array
* slice(startIndex, endIndex); return the array selected by the indexes. endIndex is exclusive
* slice(startIndex); return the array from startIndex to the end of the array
* concat(array); return the concatenation of the two arrays

!! indexOf and lastIndesOf have a second optional argument to precise
where to start the search from !!

Some common methods for String:

* slice(indexStart, indexEnd); the same as for arrays
* indexOf("string"); same for array
* trim(); remove whitespace from the start and the end

##Objects

An object is a set of properties. We can add and remove these
properties. We use {} to define an object

    var week = {
        days: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
        goodWeek: true
    };

    week.badDay = "Monday";//add a new property

If you want to create a property with a non-valid name you must quote
the name of this property:

    var obj = {
        "my property": "this is a property of the object obj";
    }

If you try to access a non defined property of an object the value
undefined is returned.

You can delete a property of an object:

    var obj = {prop1: 1, prop2: 2}
    delete obj.prop1;
    console.log(obj.prop1);//return undefined

You can check if a property exist in an object with the keyword
in. The name of the property you want to check must be a string.

    var obj = {prop1: 1, prop2: 2} 
    console.log("prop1" in obj);//return true
    console.log("fasdfs" in obj);//return false

You can create an array of object:

    var myArray = [
        {prop1: 1, prop2: 2},
        {prop1: 3, prop2: 4},
        {prop1: 9, prop2: 5}
    ]

You can loop on an object:

    var obj = {...}
    for(var prop in obj)
        console.log("the property " + prop + "as a value of" + obj[prop]"); 

##Mutability

The types Number, String and Boolean represent immutable value.
The type Object is mutable.

You can create equal objects by sharing the same reference in memory
for the two objects: If you modify one object the other is also modified

    var obj1 = {prop: 1}
    var obj2 = obj1
    obj1.prop = 42;
    console.log(obj2.prop);//return 42
	console.log(obj2 == obj1);//return true

The == operator check if both object have the same reference.

!! It doesn't check if the property of the objects are the same !!

    var obj1 = {prop: 1}
	var obj2 = {prop: 1}
	console.log(obj1 == obj2);//return false

##Correlation

A correlation is a coeffecient include between -1 and 1. It express
the dependence between variables.

* 0, variables are not related
* 1, variables are related. A varible imply another one
* -1, variables have an opposite relation, when one is true the other
  one is false

For boolean (binary) variable we can use the phi coefficient to calculate the
correlation.

N00 false, false | N01 true, false

N10 false , true  | N11 true, true

If you use the number of occurence for each condition yo have:

phi = (N11 * N00 - N10 * N01) / SQUARE(N1. * N0. * N.1 * N.0)

Where Nx. is the sum of the element of the line x and N.y is the sum
of the element of the column y

You can use the method square of the object Math

    console.log(Math.sqrt(4));//return 2

##The arguments object

Remember, the number of arguments passed to a function is not
limited. It can be 0 or more than wanted.

When a function is called, a special object is created named
arguments. It store the arguments of the function and they can be
retrieve with the properties 0,1,2,3... like indexes of an array (but
it's not an array!).

    function argumentCounter() {
      console.log("You gave me", arguments.length, "arguments.");
    }

    //print the arguments
    function myFunction(){
        for(i=0;i<arguments.length;i++)
            console.log(arguments[i]);
	}

##The Math object

The Math object contain a lot of properties and enable them to be
include in a namspace. A namespace allow us to keep organise our code
and to avoid having too many "orphans" of global variables

Main methods:

* .cos(angle)
* .sin(angle)
* .tan(angle)
* .PI
* random(); return a value between 0 (inclusive) and 1 (exclusive)
* floor(number); rounds down
* ceil()
* round()

##The global object

The global scope where the global variables are defined is also an
object. Each global variables are properties of this object. Browsers
use the variable window to store the global scope.

    var myVar = 10;
    console.log("myVar" in window);//return true
    console.log(window.myVar);// return 10






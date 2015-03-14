###Main concepts of this chapter

* array.forEach(function(elt){code;}); iterate the array
* f.apply(null,[arguments]); apply the function to each arguments
* [{"prop": value,...},...]; JSON object
* JSON.strigify("js object"); returns a JSON object
* JSON.parse(json object); returns a JS object
* array.filter(function(elt){condition on elt}); filter an array
* array.map(function(elt){code;}); apply a function to each elt
* array.reduce(function(a,b){return a+b;}); reduce the array to one
value
* f.bind(null, arg); apply f with arg as first arg. It useful when you
  want to fix arguments

#Higher-Order Functions

Stop looping, make functions

##Abstraction

Defining the details of a program inside functions allow us to
abstract the main ideas of the programs. We can now play with those
functions wihout worrying about the details implementation. It's a
good way to minimize bugs.

We are now thinking on WHAT a program is doing instead of HOW a
program is implemented.

##Abstracting Array Traversal

Our goal is to abstract the way we loop over elements of an array. For
now we are doing this with a for loop:

    var array = [1, 2, 3];
    for (var i = 0; i < array.length; i++) {
       var current = array[i];
       console.log(current);
    }

It's working but there are too many things:

* we define a variable i to represent the index
* we increment the variable i
* we define a variable current
* we print the variable current

All these code can contain bugs. We can minimize the risk by defining
a function that we can reuse to parse an array:

    function forEach(array) {
        for (var i = 0; i < array.length; i++)
            console.log(array[i]);
    }

It's working but the function just allow us to print each element of
the array. If we want to do another actions (add 42 to each element
for exemple) we need to define another similar function and more code imply
more bugs.

We know that functions are values so why not having the action we
want to apply on the elements of the array as a parameter:

    function forEach(array, action) {
        for (var i = 0; i < array.length; i++)
            action(array[i]);
    }

It begins to look nice!

The only problem is that action need to be defined somewhere. Why not
define the function parameter at the same time we want to use it. We
define the action we want to use inside the call of the forEach function:

    var numbers = [1,2,3], sum = 0;
    forEach(numbers, function(number) {
       sum += number;
    });

!! The forEach method is already defined for arrays. It takes the
function to execute on each element of the array !!

    var myArray = [1,2,3,4];
    myArray.forEach(function(elt){console.log(elt);});

##Higher-order Functions

Funtions that can takes others functions as parameters or returns
functions are called higher-order functions.

Funtions allow to abstract over values, higher-order function abstract
over functions!

Higher-order functions allow us to:

* Create new function from a function
* Have function that change another fucntion
* Create new type of control flow

##Passing along arguments

You can use the method "apply" on a function to apply these function
to an array of arguments

    f.apply(arguments);

##JSON

Json is a format to store and communicate information.

    [
        {"prop": "string", "prop2": 42},
        {...},
        ...
    ]

It looks like an array of object but the proporties must be a string
and values are basic value (no function, no variables, no comments or
any expression computation).

There are two function to work with JSON:

* JSON.stringify(value);// return an JSON encoded string
* JSON.parse("string".property);//return the value of the property
  from a JSON string

##Filtering an array

The filter function. It create a new array with the element respecting
the condition of the function.

    array.filter(function(elt){
      condition on elt;
    });

##Transforming with map

The map method apply a function to each element of an array.

	myArray = [1,2,3]
	myArray.map(function(elt){console.log(elt);});

##Summarizing with reduce

Create a single value from elements of an array from left to right.

reduce([1,2,3,4], function(a,b){return a + b;}, 0);//return 10

If the array contain at least one element, you don't have to add the
start element as argument

	var myArray = [1,2,3,4];
	myArray.reduce(function(a,b){return a+b;});
 
##Composability

Instead of creating loops, it's better to compose functions

    console.log(average(ancestry.filter(male).map(age)));

##The cost

Functions call are costly compare to a loop. More memory is used. If
your programm work on data not too big, don't worry about the cost.

##Great Great Great

Create an object (byName) with the name of a person as a property and the
object person as a value. This allow to retrieve an person object with its name.

    console.log(byName["Philibert Haverbeke"]);

We reduce the family tree to one value. To get this value we need a
function (here f in argument) to convert a person object to a value.


	function reduceAncestors(person, f, defaultValue) {
		function valueFor(person) {
			if (person == null)
				return defaultValue;
			else
				return f(person, valueFor(byName[person.mother]),
					valueFor(byName[person.father]));
        }
		return valueFor(person);
	  }

We create a function to calculate a specific value of a person. It
replace f in the previous function.
 
	function sharedDNA(person, fromMother, fromFather) {
		if (person.name == "Pauwels van Haverbeke")
			return 1;
		else
			return (fromMother + fromFather) / 2;
    }


## Binding

The bind method is a method enable for all functions and allow to call
the function with fixed parameters. It's usefull to create a partial
function application.



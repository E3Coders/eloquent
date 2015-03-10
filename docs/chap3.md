#Functions

A function allow to wrap some code into a value.

Main avantages of using functions:

* Structure the program
* Reduce duplicate code
* Associate names with subprogram
* Isolate subprograms from each other

##Defining a function

A function definition is like a variable definition.

    var myVariable = function(parameter){
       code;
    };
    console.log(myVariable(param);

A function is an expression beginning with the keyword "function" and it
must have {} to delimite the statements of the function, even when
there is only one statement.

A function can have 0 or multiple parameters (also called arguments). Parameters are separated
with coma:

    var myFunction = function(parm1, param2, param3){...};

A function can return a value or simply just have a [side effect](https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29).
To return a value use the keyword "return" followed by the value you
want to return.

    //function with a value

    var square = function(x){
        return x*x;
    }

    square(42);

    //function with only a side effect

    var coucou = function(name){
        console.log("coucou " + name);
		}

    coucou("myName"); 

The return keyword stop the execution of the function (even if there
are more statements after the return) and return the value.

If no value is defined after the return keyword the function returns
undefined

##Parameter and Scope

### Local vs Global

* Parameters and variables defined inside a function are only accessible inside the
function. They are local to the function. 

* Variables defined outside a function are called global and are
accessible inside functions.

!! Carefull when you defined local variables with the same names as
global variables, and don't do this even if you can !!

Remember the difference between declaration and assignment

* var x = 11; // definition
* x = 11; // assignment

!! You can use x = 11; as a definition but the variable created is now a
GLOBAL variable. It's a good idea to avoid global variable because it
can messed up your code. If you use a same global variable inside a lot of function you will be lost !!

    x = 0;
    var myFunction = function(){
      x = 11;//x is global and you can now access it inside a function
	  y = 42;//create a new global variable
     }
     
    console.log(x);//return 11
    console.log(y);//return 42, y is a global variable, it's bad!!
	
##Nested Scope

You can define functions inside functions and create a nested local scope.

    var myGlobalVar = "hello";
    var myFunction = function(){
        console.log(myGlobalVar);
        var x = 33;//local to myFuntion and accessible from subfunction

        var mySubFunction = function(){
            console.log(x);
            retrun 42;
        }
    }

Variables created inside a function are recreated at each call of the function.

Functions are the only way to create new scope.

##Declaration notation

Instead of var square = function(x){ return x*x;};, You can use the function declaration syntax:

function square(x){ return x*x;}

A function defined with a declaration syntax can be called everywhere in your code, even before the declaration of the function itself:

    myFunction();
    function myFunction(){...};

!! Don't use function declaration inside a if statement (ca fout le bordel!) !!

##The call stack

JS store the context of the calls of function in memory named call stack. If the memory is full you have a stackoverflow!
The main purpose of a stack is to know where the programm must go after a call of a function.

These explaination is not really clear but it's ok for now. see https://en.wikipedia.org/wiki/Call_stack

##Optional arguments

* If a function has too many arguments, it just ignores them
* If it has not enough arguments, it uses the undefined value

You can create optional argument by testing in the function if an argument is undefined.

    function power(base, exponent) {
      if (exponent == undefined)
        exponent = 2;
      var result = 1;
      for (var count = 0; count < exponent; count++)
        result *= base;
      return result;
    }


##Closure

A closure is the ability for a function to have a reference to an outside local variable.

    function wrapValue(n) {
      var localVariable = n;
      return function() { return localVariable; };
    }

It's a function inside a function which can acces a local variable of the parent function.

Yea I know it's not clear, I will try to find a better explanation.

You can create some interesting calls:

    function multiplier(factor) {
      return function(number) {
        return number * factor;
      };
    }

    var twice = multiplier(2);//return a function
    console.log(twice(5));//call the function

##Recursion

A recusion is a function which call itself.

    function rec(a){
        if(a==0)
            return 0;
        else
           a + rec(a-1)
    }

!! Be carefull not to create a infinite recursion !!

Recursions are nice but are slower than a loop. But don't worry about the speed of your program until you know that your program is slow.

##Growing function

The main goal of a function is to encapsulate some code which will be used multiple times.
When creating functions try to limit the resposability of the functions and try to simplify the functions.
If a function is too complicated try to descontruct it with others functions and then compose these functions to get the right behavior.

KISS (Keep It Simple Stupid): https://en.wikipedia.org/wiki/KISS_principle

##Function and side effect

You can create a function to create a side effect, to return a value, or to do both of them.

A pure function is a function that doesn't create or use side effect and when it's called with the same arguments return the same values.
Pure functions are easier to test and to compose. Non-pure functions are great to create stuff!

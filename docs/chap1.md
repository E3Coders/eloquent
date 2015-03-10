#Values and Types

The role of a JS value can be determinded by its type. There are six
basic types:

* Numbers
* Strings
* Booleans
* Objects
* Functions
* Undefined

You can ask for the type of a value with the unary operator (operator which have only one argument) typeof.

* console.log(typeof 4.5); returns number
* console.log(typeof "Coucou"); returns string

## Numbers

Numbers are reperesented with 64 bits.

You can use operators +, -, *, /, % (there are others) on numbers.

There are three special numbers: Infinity, -Infinity and NaN (Not a Number).

##Strings

The type String is used to represent text and use double or simple quotes:

"Ceci est une valeur de type String", 'Celle-ci aussi'.

You can use specials characters inside a String but you need to escape them wiht a backslash (\):

* newline character with \n "First line\nSecond line"
* tab character with \t "A line follow by a \tTab line"

You don't need to add a space after the special character!
If you want to use the string "\n" but not the newline you need to
escape the characters:

* "I want \\n"; returns "I want \n"
* "I want a quote \""; returns "I want a quote ""

The operator + is used for concatenation (add together): "Hello" + "There"

##Booleans

The Booleans as only two values: true and false

It's often used for comparison:

* console.log(4>3); returs true
* console.log("hello" != "there"); returns true

It's very useful with logical operators:

==, !=, <=, >=, <, >

the AND &&, return true if both values are true. Otherwise return false.

* true && false, return false
* 1+1 == 2 && 2+2 == 4, returns true

The OR ||, return true if at least one value is true. If both value are false it returns false.

* NaN || true, return true

The ternary operator is nice and very useful! The syntax is: expression ? value_for_true : value_for_false;

* console.log(true ? 1 : 2); return 1
* console.log(false ? 1, 2); return 2

##Undefined values

There are two special values to represent an absence of value:

* null
* undefined

For the moment don't worry about the difference between the two values.

##Automatic type conversion

Javascript can convert a value if an operator is applied to the wrong type. It's called type coercion.

For example if you try to substract a number to a string.

* console.log("5" - 1); return the number 4

NaN, 0 and the empty string "" are converted to false.

* 0 == false, return true.

You can use === and !== when you don't want the value to be converted.
It compare with the real type given.

* "" === false, return false

##logical operators

&& and || try to convert the left value to decide what to return, the left or the right value.

|| will return the left value if it can be converted to true otherwise it will return the right value.

* console.log(null || "hello"); returns "hello"
* console.log("Coucou" || "hello"); returns "Coucou"

&& will return the left value if it can be converted to false otherwise it returns the right value




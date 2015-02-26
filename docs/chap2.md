#Programm Structure

##Expressions and Statements

For me:

* An expression is like a mathematical function. It take a value and return another value.
* A statement is a set of expressions with side effects (for exemple print
  something on the screen). Most of the time statement terminate with
  a ;

##Variables

We can define a variable with the keyword var.

the following statement define a variable myVar with the value 42:

* var myVar = 42;

We can redefine the value of a variable with the operator = (we don't
use the keyword var):

* myVar = 32;

You can redefine the value of the variable by using the variable
itself:

* var myVar = 55;
* myVar = myVar + 5;

There are some special shortcut operator for these kind of assigment:

* myVar += 5; instead of myVar = myVar + 5
* same with myVar -= 5;

If you try to access an empty variable the undifined value is
returned.

You can defined nultiple variable on one line:

* var myVar1 = 1, myVar2 = 2;

##Keywords

Keywords are reserved words in JS. You can't use it to create a
variable for example.

List of keywords:

break, case, catch, class, const, continue debugger,
default, delete, do, else, enum, export, extends, false,
finally, for, function, if, implements, import, in,
instanceof, interface, let, new, null, package, private,
protected, public, return, static, super, switch, this,
throw, true, try, typeof, var, void, while, with, yield,

##The Environment

The collection of variables and their values that exist at a given
time is called the environment.

##Functions

A function is a piece of program wrapped in a value. Executing a
function is called invoking, calling, or applying it

Common functions:

* alert()
* console.log()
* confirm()
* prompt()

##Control Flow

###If

    if(condition)
      statement;

If you need to have multiple statements in a if you need to use
{}. It's the same for the following control flow.

    if(condition){
      statment1;
      statment2
    }

Some usefull function:

* Number(value); Try to transform the value to a number
* isNaN(value); Check if the value is NaN

###If Else

    if(condition)
      statement;
    else
      otherStatment;

You can combine if and if else.

###While and Do loops

    while(condition){
      statements;
    }

    do{
      statments;
    }while(condition)

With the Do loop we are assured that we are looping at least one time.

###For loop

    for(var number = 0; number < 10; number++){
      statements;
    }

the number++ is equal to number = number + 1

###Break

    for (var current = 20; ; current++) {
      if (current % 7 == 0)
        break;
    }

The break keyword allow us to finish a loop. Notice how we didn't
declare any condition to stop the for loop. Without the break the loop
will be infinite.

the keyword continue is similar to break. It stop the current
execution of the loop but instead of stoping the loop it jumps to the
next iteration of the loop.

###Switch

    switch (prompt("What is the weather like?")) {
      case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
      case "sunny":
        console.log("Dress lightly.");
      case "cloudy":
        console.log("Go outside.");
        break;
      default:
        console.log("Unknown weather type!");
        break;
    }

Don't forget the break if you only want to execute the statment in the
right case. Otherwise it will continue to execute the other cases.

##Comments

* // simple line comment
* /* multipule lines comment */

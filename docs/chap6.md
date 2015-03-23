### Main concept of this chapter

* Object.create(prototypeOject); create object from a prototype
* new FunctionPrototype; FunctionPrototype is a constructor to create a new instance from the constructor
* Every functions (constructors) have a property prototype wich is the
  prototype of the object create with new MyConstructor
* the keyword this is used to refere to the current object
* function.call(object, arguments); call the function but doesn't need
array to store arguments unlike apply
* Object properties can be overide
* Object.defineProperty(object, "nameProp", {enumerable: false, value:
"val"})
* Object.hasOwnProperty("prop")
* Object.create(null); no proptotype
* getter setter
* inheritance wiht a call to the parent constructor
* obj instanceof constructor



#The Secret life of object

##History

To manage complexity in programm the solution is to create small
compartments isolated from each other. These compartments are called
objects.

The principe of objects is to hide the details of the functionalities
inside the objects and to access these functionality with
methods. It's called encapsulation.

##Methods

Methods are properties of object that are function values.
You can use the special variable "this" inside a method. It refers to
the object.

	function myMethod(arg){
		console.log(this.prop + arg);
	}

The methods apply and bind use as first argument the "this"
object. There is another method, call, which works like apply but
doesn't need to take an array as second argument

	function test(arg){
		console.log(this.type + arg);
		return 1;
	}

	test.call({type: "test"}, " call"});

##Prototype

Almost all object in addition to their properties have proptotypes.
When a non defined property is called, this property is searched on
the prototype.This is reapeted until the property is finded on a
prototype. A proptotype is anoter object.

The prototype Object.prototype is behind almost all objects.

You can retrieve the proptotype of an objects with the method
Object.getPrototypeOf(object)

Most of the objects doesn't have the prototype Object.prototype as
their direct prototype. Functions derive from Function.prototype and array
from Array.prototype

Use Object.create to create a specific proptotype for an object.

	var myPrototype = {...};
	var myObject = Object.create(myPrototype);

The Object.create method must have as parameter an object or null

##Constructors

A constructor is a way to create object from a prototype.
Use the keyword new in front of a function to create an instance of the
constructor. For each instance a new object is bind to "this".

A convention is to write the name of the constuctor Capitalized.

	function Test(arg){
		this.type = arg;
	}
	
	var subTest = new Test("hello");
	//create an object with the property type

Every constructor and functions have a property named prototype. 
The value of the property prototype is an empty object derived from
Object.prototype. Each object create with construct have that object
as prototype. You can add a function to each object by adding this
function to the object prototype of the function:

	Test.prototype.myFunction = function(arg){console.log(arg);};
	subTest.myFunction("hello");//print "Hello"

##Overriding derived property

You can create of redefine a property. It will not change the property
of the prototype if the property exist.

	subTest.myTest = "my test";

It's useful when you want to define a specific property of a more
general property.

##Prototype Interference

Sometimes you don't want to access to the properties of a prototype.
A property can be enumeralble or nonnumerable. All the properties
from Object.prototype are nonenumerable. You can use
Object.defineProperty to specify the type a property inside an object:

	Object.defineProperty(object,"property name",{enumerable: false,
    value: "hello"});

You can verify the existence of a property for an object itself.

	Object.hasOwnProperty("property");

This method won't check if the property exist in the prototype.

##Prototype-less object

To create an object without any prototypes:

	Object.create(null);

##Polymorphism

Polymorphic code can work with values of different shapes, as long as
they support the interface it expects.

##Laying out a table

from an array of arrays we create a string to display a table.

[ [name, height, country], [Kilimanjaro, 5895, Tanzania],...]

| name        | height | country  |
| ----------- | ------ | -------- |
| Kilimanjaro | 5895   | Tanzania |

For each rows we calculate the height needed:

	function rowHeights(rows){
		rows.map(function(row){
			row.reduce(function(max,cell){
				return Math.max(mas, cell.minHeight);
			},0)
		})
	}

For each columns we calculate the width:

	function colWidths(rows){
		rows[0].map(function(_, noCol){
			rows.reduce(function(max,row){ 
				return Math.max(max,row[noCol].minWidth);
			},0)
		})
	}

Now we can draw the table. I try to build the function step by step.
For each row we're going to draw the row:

	function drawTable(rows){
		return rows.map(drawRow).join("\n");
	}

We define the function drawRow. A row is a composition of object
cells. A cell can have multiple lines and will be represented with an
array of array called block, for example: [[country],[------]]. To
draw a cell we need to specifiy the heigth and the width.

	function drawRow(row,rowNum){
		var blocks = row.map(function(cell,ColNum){
			return cell.draw(widths[colNum], heigths[rowNum]
		});
		blocks[0].map(function(_,lineNum){
			return	drawLine(blocks,lineNum);
			}).join("\n");
	}


Now we just need to add the function drawline.

	function drawLine(blocks,lineNum){
		blocks.map(function(block){
			return block[lineNum]
		}).join(" ");
	}

Now we can create a TextCell constructor

	function TextCell(text){
		this.text = text.split("\n");
		//create lines in array ["first line","second line"]
		//for text = "first line \nsecond line"
	}

We add some functions to the proptotype

TextCell.prototype.minWidth = function(){
this.text.reduce(function(width,line){
	return Math.max(max,line.length);

},0);
}

TextCell.prototype.minHeight = function(){
  return this.text.length;
  }

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
  };


##Getter and setter

An interface is a function whick allow to access an object.
Never include nonmethod properties in the interface.
Setter and getter are method which allow us to access and define the
properties. The principale to access nonmethod value with a method(or
interface) follow the principale of
[encapsulation](http://en.wikipedia.org/wiki/Encapsulation_%28object-oriented_programming%29)
.

var obj = {elements: [1,2,3,4], get height(){return
this.elements.length;}, set height(value){console.log("impossible to
redefine the height);}

We can also add getter and setter to an existing object with
Object.defineProperty:

Object.defineProperty(object, "nameProperty", {get: function(){return
this.text.length();}});

If a getter is defined but no setter, writting on the property of the
object is not allowed.

##Inheritance

Inheritance allow you to create an object from another one without
recreating every functions. Then you can adapth the methods to the
specific role of the object

	function Test(text){
		this.text = text;
	}
	//reuse the object Test
	function SubTest(text){
		Test.call(this,text);
	}

	SubTest.prototype = Object.create(Test.prototype);
	SubTest.prototype.specificMethod = function(){...};

Do the difference between inheritance and polymorphism! While
polymorphism and encapsulation allow to reduce link between objects,
inheritance does the opposite! Don't overuse inheritance see it like a
trick to write less code. You can also extend types with
[composition](https://en.wikipedia.org/wiki/Composition_over_inheritance)

##The instanceof operator

to know if an object is an instance of another one:

	obj1 instance obj2;


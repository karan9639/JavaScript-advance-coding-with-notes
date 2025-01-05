// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// console.log("2" === 2); // false
// console.log("2" == 2); // true but it is not recommended to use ==  , use === instead

if (2 > 1 <= 1 && 1 <= "2" <= 3) {
  console.log("Hello");
} else {
  console.log("World");
}

/*
Operator Precedence Table in JavaScript

Grouping (()): Parentheses have the highest precedence, ensuring that expressions inside them are evaluated first.
Postfix Increment/Decrement (++, --): These operators are applied after the operand and do not affect other operations until the next step.
Prefix Increment/Decrement (++, --), Unary Plus (+), Unary Minus (-), Logical NOT (!): These are right-to-left associative and executed before most binary operators.
Exponentiation (**): Right-to-left associative, used for raising a number to a power.
Multiplication (*), Division (/), Modulo (%): Evaluated from left-to-right.
Addition (+), Subtraction (-): These follow multiplication, division, and modulo in precedence and are left-to-right associative.
Relational Comparisons (<, <=, >, >=): Used to compare values and are left-to-right associative.
Equality Operators (==, !=, ===, !==): Check for value and/or type equality and are left-to-right associative.
Logical AND (&&): Left-to-right associative, used to evaluate if both operands are truthy.
Logical OR (||): Left-to-right associative, used to evaluate if at least one operand is truthy.
Assignment Operators (=, +=, -=, etc.): Right-to-left associative, assigning values after evaluation.
Comma Operator (,): Has the lowest precedence and evaluates expressions from left-to-right, returning the last expression's value.
*/

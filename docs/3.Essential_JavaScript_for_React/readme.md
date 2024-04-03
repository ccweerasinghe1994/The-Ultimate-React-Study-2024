# 3.Essential_JavaScript_for_React

- [3.Essential\_JavaScript\_for\_React](#3essential_javascript_for_react)
  - [1. Section Overview](#1-section-overview)
  - [2. Destructuring Objects and Arrays](#2-destructuring-objects-and-arrays)
  - [3. RestSpread Operator](#3-restspread-operator)
  - [4. Template Literals](#4-template-literals)
  - [5. Ternaries Instead of ifelse Statements](#5-ternaries-instead-of-ifelse-statements)
  - [6. Arrow Functions](#6-arrow-functions)
  - [7. Short-Circuiting And Logical Operators \&\&](#7-short-circuiting-and-logical-operators-)
  - [8. Optional Chaining](#8-optional-chaining)
  - [9. The Array map Method](#9-the-array-map-method)
  - [10. The Array filter Method](#10-the-array-filter-method)
  - [11. The Array reduce Method](#11-the-array-reduce-method)
  - [12. The Array sort Method](#12-the-array-sort-method)
  - [13. Working With Immutable Arrays](#13-working-with-immutable-arrays)
  - [14. Asynchronous JavaScript Promises](#14-asynchronous-javascript-promises)
  - [15. Asynchronous JavaScript AsyncAwait](#15-asynchronous-javascript-asyncawait)

## 1. Section Overview

this section will cover the essential JavaScript concepts that you need to know to work with React. These concepts are fundamental to understanding how React works and how to build React applications effectively.

## 2. Destructuring Objects and Arrays

Destructuring in TypeScript is a convenient way to extract multiple properties from an object or array in a single statement. It can make your code more readable and less verbose.

Here's how you can destructure objects and arrays in TypeScript:

**Object Destructuring:**

```typescript
let obj = { a: 1, b: 2, c: 3 };

let { a, b, c } = obj;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

In the above example, `a`, `b`, and `c` are now variables that contain the values of the properties of the same name from `obj`.

**Array Destructuring:**

```typescript
let arr = ['Hello', 'World'];

let [first, second] = arr;

console.log(first); // 'Hello'
console.log(second); // 'World'
```

In the above example, `first` and `second` are variables that contain the values of the first and second elements of `arr`, respectively.

**Destructuring with Rest Parameters:**

You can also use destructuring with rest parameters to get some elements and then collect the remaining elements into another array:

```typescript
let arr = [1, 2, 3, 4, 5];

let [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

In the above example, `first` and `second` contain the first and second elements of `arr`, and `rest` is an array that contains the remaining elements.

**Destructuring with Type Annotations:**

In TypeScript, you can also provide type annotations while destructuring:

```typescript
let obj: { a: number, b: string, c: boolean } = { a: 1, b: 'Hello', c: true };

let { a, b, c }: { a: number, b: string, c: boolean } = obj;

console.log(a); // 1
console.log(b); // 'Hello'
console.log(c); // true
```

In the above example, `a`, `b`, and `c` are variables with types `number`, `string`, and `boolean` respectively. They contain the values of the properties of the same name from `obj`.

## 3. RestSpread Operator

The Rest/Spread Operator is a convenient feature in TypeScript that allows you to work with arrays and objects in a more efficient way.

**Rest Operator (`...`)**: The rest operator is used to collect the rest of the elements into an array. This is particularly useful when destructuring arrays and objects.

```typescript
let numbers = [1, 2, 3, 4, 5];
let [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]
```

In the above example, `first` is assigned the first element of the array, and `rest` is assigned an array of the remaining elements.

**Spread Operator (`...`)**: The spread operator is used to spread the elements of an array (or the properties of an object) into a new array (or object).

```typescript
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];

console.log(moreNumbers); // [1, 2, 3, 4, 5]
```

In the above example, `moreNumbers` is a new array that contains all the elements of `numbers`, followed by `4` and `5`.

The spread operator can also be used with objects:

```typescript
let obj = { a: 1, b: 2 };
let moreProps = { ...obj, c: 3 };

console.log(moreProps); // { a: 1, b: 2, c: 3 }
```

In the above example, `moreProps` is a new object that contains all the properties of `obj`, followed by `c: 3`.

## 4. Template Literals

Template literals are a feature in TypeScript (and JavaScript) that allow you to embed expressions within string literals, using backtick (``) characters. This can make working with strings more convenient and readable.

Here's an example of how you can use template literals in TypeScript:

```typescript
let name = 'John';
let age = 25;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // "Hello, my name is John and I am 25 years old."
```

In the above example, `${name}` and `${age}` are expressions embedded within the template literal. They are replaced with the values of the `name` and `age` variables when the template literal is evaluated.

Template literals can also span multiple lines:

```typescript
let multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);
// "This is a string
// that spans multiple
// lines."
```

In the above example, the template literal spans multiple lines, and the resulting string also spans multiple lines. This is different from regular string literals, which cannot directly span multiple lines.

## 5. Ternaries Instead of ifelse Statements

Ternary operators in TypeScript are a more concise way to write simple `if-else` statements. They take three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

Here's the syntax for a ternary operator:

```typescript
condition ? valueIfTrue : valueIfFalse;
```

And here's an example of how you can use a ternary operator in TypeScript:

```typescript
let age = 20;
let beverage = (age >= 21) ? "Beer" : "Juice";

console.log(beverage); // "Juice"
```

In the above example, if `age` is greater than or equal to 21, `beverage` is assigned the string "Beer". Otherwise, `beverage` is assigned the string "Juice". This is equivalent to the following `if-else` statement:

```typescript
let age = 20;
let beverage;

if (age >= 21) {
    beverage = "Beer";
} else {
    beverage = "Juice";
}

console.log(beverage); // "Juice"
```

As you can see, the ternary operator provides a more concise way to write this `if-else` statement.

## 6. Arrow Functions

Arrow functions are a more concise syntax for writing function expressions in TypeScript (and JavaScript). They are anonymous and change the way `this` binds in functions.

Here's the syntax for an arrow function:

```typescript
(parameters) => expression
```

And here's an example of how you can use an arrow function in TypeScript:

```typescript
let add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(1, 2)); // 3
```

In the above example, `add` is a function that takes two numbers and returns their sum. The function is defined using an arrow function.

Arrow functions have a couple of handy features:

1. **Implicit Returns**: If the function body consists of a single expression, you can omit the `return` keyword and the curly braces:

```typescript
let add = (a: number, b: number): number => a + b;

console.log(add(1, 2)); // 3
```

2. **Lexical `this`**: Unlike regular functions, arrow functions do not have their own `this` value. The value of `this` inside an arrow function is always inherited from the enclosing scope:

```typescript
class MyClass {
  value = 10;

  printValue = () => {
    console.log(this.value); // 10
  };
}

let myInstance = new MyClass();
myInstance.printValue();
```

In the above example, `printValue` is an arrow function, so it doesn't have its own `this` value. Instead, it inherits `this` from the enclosing scope, which is the instance of `MyClass`. Therefore, `this.value` inside `printValue` refers to `myInstance.value`.

## 7. Short-Circuiting And Logical Operators &&

Short-circuiting is a concept in JavaScript and TypeScript where the evaluation of expressions stops as soon as the outcome is determined. This is particularly useful with logical operators like `&&` (AND) and `||` (OR).

The `&&` (AND) operator is a binary operator that takes two operands. It returns `true` if both operands are truthy, and `false` otherwise. However, it short-circuits and returns the first operand if it is falsy, without even evaluating the second operand. If the first operand is truthy, it returns the second operand.

Here's an example of how you can use the `&&` operator in TypeScript:

```typescript
let a = 0;
let b = 2;

let result = a && b;

console.log(result); // 0
```

In the above example, `a` is falsy (because `0` is considered falsy in JavaScript and TypeScript), so the `&&` operator short-circuits and returns `a` without evaluating `b`.

Here's another example where both operands are truthy:

```typescript
let a = 1;
let b = 2;

let result = a && b;

console.log(result); // 2
```

In this example, `a` is truthy, so the `&&` operator evaluates and returns `b`.

This behavior is often used in conditional rendering in JavaScript and TypeScript frameworks like React. For example:

```jsx
let isLoggedIn = true;

return (
  <div>
    {isLoggedIn && <p>Welcome back!</p>}
  </div>
);
```

In the above example, the paragraph `<p>Welcome back!</p>` is only rendered if `isLoggedIn` is `true`. If `isLoggedIn` is `false`, the `&&` operator short-circuits and the paragraph is not rendered.

In JavaScript, a value is considered "falsy" if it is evaluated to `false` in a Boolean context. Here are the falsy values in JavaScript:

1. `false`
2. `0` and `-0`
3. `""` and `''` (empty string)
4. `null`
5. `undefined`
6. `NaN`

Here's an example of how these values behave in a Boolean context:

```javascript
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

In each of these cases, the `Boolean` function returns `false`, indicating that the value is falsy.

## 8. Optional Chaining

Optional chaining is a feature in TypeScript (and JavaScript) that allows you to access deeply nested properties within an object without having to explicitly check that each reference in the chain is valid. The optional chaining operator is `?.`.

Here's an example of how you can use optional chaining in TypeScript:

```typescript
type User = {
  name: string;
  address?: {
    street?: string;
    city?: string;
  };
};

let user: User = {
  name: 'John',
};

let street = user.address?.street;

console.log(street); // undefined
```

In the above example, `user.address` is `undefined`, but instead of throwing an error, the optional chaining operator `?.` returns `undefined`. This can be very useful for avoiding errors when accessing properties of potentially `undefined` or `null` values.

You can also use optional chaining with function or method calls:

```typescript
let user: User = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'Anytown',
  },
};

let getCity = user.address?.getCity?.();

console.log(getCity); // undefined
```

In this example, `getCity` is `undefined` because `getCity` is not a method on `user.address`. However, thanks to optional chaining, this code does not throw an error. Instead, it simply assigns `undefined` to `getCity`.

## 9. The Array map Method

The `map` method is a built-in function in JavaScript and TypeScript arrays that creates a new array with the results of calling a provided function on every element in the calling array. It does not mutate the original array.

Here's the syntax for the `map` method:

```typescript
array.map(callback(element, index, array), thisArg);
```

- `callback`: A function that is called for every element of the array. It accepts three arguments:
  - `element`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array `map` was called upon.
- `thisArg` (optional): A value to use as `this` when executing `callback`.

Here's an example of how you can use the `map` method in TypeScript:

```typescript
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map((number) => {
  return number * number;
});

console.log(squares); // [1, 4, 9, 16, 25]
```

In the above example, `map` is called on the `numbers` array. For each number in the `numbers` array, the callback function is called, which returns the square of the number. The `map` method then returns a new array (`squares`) with the results.

## 10. The Array filter Method

The `filter` method is a built-in function in JavaScript and TypeScript arrays that creates a new array with all elements that pass a test implemented by the provided function. It does not mutate the original array.

Here's the syntax for the `filter` method:

```typescript
array.filter(callback(element, index, array), thisArg);
```

- `callback`: A function that is called for every element of the array. It accepts three arguments:
  - `element`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array `filter` was called upon.
- `thisArg` (optional): A value to use as `this` when executing `callback`.

The `callback` should return `true` to keep the element, or `false` otherwise.

Here's an example of how you can use the `filter` method in TypeScript:

```typescript
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

In the above example, `filter` is called on the `numbers` array. For each number in the `numbers` array, the callback function is called, which returns `true` if the number is even, and `false` otherwise. The `filter` method then returns a new array (`evenNumbers`) with the numbers for which the callback returned `true`.

## 11. The Array reduce Method

The `reduce` method is a built-in function in JavaScript and TypeScript arrays that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value. It does not mutate the original array.

Here's the syntax for the `reduce` method:

```typescript
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
```

- `callback`: A function that is called for every element of the array. It accepts four arguments:
  - `accumulator`: The accumulator accumulates the callback's return values.
  - `currentValue`: The current element being processed in the array.
  - `currentIndex` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array `reduce` was called upon.
- `initialValue` (optional): A value to use as the first argument to the first call of the `callback`. If no initial value is supplied, the first element in the array will be used.

Here's an example of how you can use the `reduce` method in TypeScript:

```typescript
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```

In the above example, `reduce` is called on the `numbers` array. For each number in the `numbers` array, the callback function is called, which adds the current number to the accumulator. The `reduce` method then returns the final accumulated value (`sum`). The initial value of the accumulator is `0`.

## 12. The Array sort Method

The `sort` method is a built-in function in JavaScript and TypeScript arrays that sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

Here's the syntax for the `sort` method:

```typescript
array.sort(compareFunction);
```

- `compareFunction` (optional): Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

Here's an example of how you can use the `sort` method in TypeScript:

```typescript
let numbers = [5, 2, 1, 3, 4];

numbers.sort();

console.log(numbers); // [1, 2, 3, 4, 5]
```

In the above example, `sort` is called on the `numbers` array. The `sort` method sorts the numbers in ascending order.

If you want to sort in a different order, you can provide a `compareFunction`. Here's an example of sorting numbers in descending order:

```typescript
let numbers = [5, 2, 1, 3, 4];

numbers.sort((a, b) => b - a);

console.log(numbers); // [5, 4, 3, 2, 1]
```

In this example, the `compareFunction` is `(a, b) => b - a`, which sorts the numbers in descending order. If the result of `b - a` is less than 0, `b` is sorted to an index lower than `a`. If the result is 0, no changes are done with the sort order of the two values. If the result is greater than 0, `a` is sorted to an index lower than `b`.

Please note that the `sort` method sorts the array in place, meaning that it modifies the original array. If you want to keep the original array unmodified, you can create a copy of the array before sorting it.

## 13. Working With Immutable Arrays

Working with immutable arrays in JavaScript or TypeScript means that you do not directly modify the original array. Instead, you create a new array whenever you need to make changes. This is a common practice in functional programming and is often used in JavaScript frameworks like React.

Here are some common array methods that return a new array instead of modifying the original array:

1. **`map`**: Creates a new array with the results of calling a provided function on every element in the calling array.

```typescript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

2. **`filter`**: Creates a new array with all elements that pass the test implemented by the provided function.

```typescript
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

3. **`concat`**: Used to merge two or more arrays and returns a new array.

```typescript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

4. **`slice`**: Returns a shallow copy of a portion of an array into a new array object.

```typescript
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]
```

5. **`spread operator (...)`**: Allows an iterable to expand in places where zero or more arguments or elements are expected. It is commonly used to make shallow copies of arrays.

```typescript
let original = [1, 2, 3];
let copy = [...original];
console.log(copy); // [1, 2, 3]
```

Remember, all these methods do not mutate the original array. They return a new array that reflects the changes.

## 14. Asynchronous JavaScript Promises

Promises in JavaScript are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. They are a way to handle asynchronous operations without blocking the rest of your code.

A Promise is in one of these states:

- **Pending**: The Promise's outcome hasn't yet been determined, because the asynchronous operation that will produce its result hasn't completed yet.
- **Fulfilled**: The asynchronous operation has completed, and the Promise has a resulting value.
- **Rejected**: The asynchronous operation failed, and the Promise will never be fulfilled. In the rejected state, a Promise has a reason that indicates why the operation failed.

Here's the syntax for creating a new Promise:

```javascript
let promise = new Promise((resolve, reject) => {
  // asynchronous operation
});
```

- The `Promise` constructor takes one argument, a callback with two parameters, `resolve` and `reject`.
- `resolve` is a function that, when called, transitions the Promise from the "pending" state to the "fulfilled" state.
- `reject` is a function that, when called, transitions the Promise from the "pending" state to the "rejected" state.

Here's an example of how you can use Promises in JavaScript:

```javascript
let promise = new Promise((resolve, reject) => {
  let operationSuccessful = true;

  if (operationSuccessful) {
    resolve('Operation was successful.');
  } else {
    reject('Operation failed.');
  }
});

promise.then((message) => {
  console.log('Success: ' + message);
}).catch((message) => {
  console.log('Failure: ' + message);
});
```

In the above example, if `operationSuccessful` is `true`, the Promise is fulfilled with the message 'Operation was successful.' If `operationSuccessful` is `false`, the Promise is rejected with the message 'Operation failed.'

The `then` method is called when the Promise is fulfilled, and the `catch` method is called when the Promise is rejected. Both methods take a callback function that is called with the fulfilled value or rejection reason.

## 15. Asynchronous JavaScript AsyncAwait

Async/await is a modern way of handling asynchronous operations in JavaScript and TypeScript. It is built on top of Promises and allows you to write asynchronous code that looks and behaves like synchronous code.

The `async` keyword is used to declare an asynchronous function. An async function always returns a Promise. If the function returns a value, the Promise will be fulfilled with that value. If the function throws an error, the Promise will be rejected with that error.

The `await` keyword can only be used inside an async function and makes JavaScript wait until the Promise resolves or rejects.

Here's the syntax for async/await:

```typescript
async function functionName() {
  let result = await someAsyncOperation();
  // more code
}
```

Here's an example of how you can use async/await in TypeScript:

```typescript
async function getUserName(userId: string): Promise<string> {
  let response = await fetch(`https://api.example.com/users/${userId}`);
  let user = await response.json();
  return user.name;
}

getUserName('123')
  .then(name => console.log(name))
  .catch(error => console.error(error));
```

In the above example, `getUserName` is an async function that fetches a user from an API and returns the user's name. The `fetch` function returns a Promise, but the `await` keyword makes JavaScript wait until the Promise resolves before assigning the result to `response`. The same happens when calling `response.json()`. If any of these operations fail and throw an error, the Promise returned by `getUserName` will be rejected with that error.

Remember, error handling with async/await can be done using try/catch blocks:

```typescript
async function getUserName(userId: string): Promise<string> {
  try {
    let response = await fetch(`https://api.example.com/users/${userId}`);
    let user = await response.json();
    return user.name;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getUserName('123')
  .then(name => console.log(name))
  .catch(error => console.error(error));
```

In this example, if an error is thrown inside the try block, execution stops and control moves to the catch block. The error is then logged to the console and rethrown, causing the Promise returned by `getUserName` to be rejected with that error.

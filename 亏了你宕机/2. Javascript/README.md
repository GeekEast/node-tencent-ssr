<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [Javascript](#javascript)
  - [Weakly Typed Language](#weakly-typed-language)
  - [Object-Oriented Language](#object-oriented-language)
  - [Versatile Language](#versatile-language)
- [ES6](#es6)
  - [var;let,const](#varletconst)
  - [Arrow function](#arrow-function)
  - [Object](#object)
  - [Array](#array)
  - [Spread & Rest](#spread--rest)
  - [Destructuring](#destructuring)
  - [Async & Promise](#async--promise)
  - [Template Literal](#template-literal)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Javascript
#### Weakly Typed Language
- No explicit type assignment
- Data types can be switched dyanmically
#### Object-Oriented Language
- Data can be organized in logical objects
- Primitive and reference types
#### Versatile Language
- Run on browser as well as on pc
- Can handle different tasks
  
### ES6
#### var;let,const
- `var` is **outdated**
- use `let` and `const` instead now


#### Arrow function
- why use arrow function?
  - related to `this` key word


#### Object
```javascript
const obj1 = {
  name: 'max',
  age: 29,
  greet() {
    console.log("Hello world");
  }
}
```


#### Array
- Declaration
```javascript
const hobbies = ['Sports', 'Cooking'];
```
- Iteration
```javascript
//  you don't need to modify value
for (let hobby of hobbies){
  console.log(hobby);
}
```
- Map
```javascript
hobbies.map(hobby => {
  console.log(hobby);44
})
```

#### Spread & Rest
- Spread
```javascript
const hobbies = ['Sports', 'Cooking']; 
const new_hobbies = [...hobbies, 'Swimming'];
const new_object = {...old_object};
```
- Rest
```javascript
// variable length of arguments
const toArray = (...args) => {
  return args;
}
```


#### Destructuring
- Object
```javascript
const person = {
  name: "James"
}
// core
const print = ({name}) => console.log(name);
print(person);
```
- Array
```javascript
const hobbies = ['sports', 'gym'];
const [h1, h2, h3] = hobbies;
// not error, but h3 is undefined.
console.log(h1, h2, h3);
```

#### Async & Promise
- Async
  - non-blocking
  ```javascript
  // async
  setTimeout(() => console.log('Time out！'), 2000);
  // sync
  console.log('hello');
  console.log('world');
  ```
  - blocking: await for **promise** only
  ```javascript
  // async
  const syncRun = async () => {
  // sync
  await new Promise(done => setTimeout(() => done(), 2000));
  console.log('hello');
  console.log('world');
  }
  syncRun();
  ```
- Promise
  - only promise has `then`
  - only promise has `catch`
  - `await` only for promise
```javascript
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 3000)
  })
  return promise;
}
```

#### Template Literal
```javascript
const country = "china";
const x = `You are from ${country}`;
```
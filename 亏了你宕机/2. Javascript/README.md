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
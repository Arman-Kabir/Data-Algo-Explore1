const obj1 = { a: true };
let obj2 = obj1;

obj1.a='booye';
delete obj1;
// obj2= 'hello';
console.log(obj1,obj2);
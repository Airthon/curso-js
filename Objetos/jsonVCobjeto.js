const obj = {a: 1, b:2, c:3, soma(){return a + b + this.c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a:1, b:2, c:3 }"))
// console.log(JSON.parse("{ 'a':1, 'b':2. 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2}'))
console.log(JSON.parse('{ "a": 1.98, "b": "string", "c": true, "d": {}, "e": [] }'))
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 9] = [10, 3, 5, 6]
console.log(n1, n3, n5)

const [, [, nota]] = [[,8,8], [9,4,95]]
console.log(nota)
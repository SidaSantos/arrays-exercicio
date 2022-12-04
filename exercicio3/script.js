let nomeDoArrayOriginal1= [7, 8, 2,]
let nomeDoArrayOriginal2 = ["batata", "laranja"]
let nomeDoArrayOriginal3= [true, false, false]

let nomeDoArrayCopia1 = nomeDoArrayOriginal1.slice()
let nomeDoArrayCopia2 = nomeDoArrayOriginal2.slice()
let nomeDoArrayCopia3 = nomeDoArrayOriginal3.slice()

nomeDoArrayCopia1.unshift(4)
console.log(nomeDoArrayOriginal1)
console.log(nomeDoArrayCopia1)

nomeDoArrayCopia2.pop()
console.log(nomeDoArrayOriginal2)
console.log(nomeDoArrayCopia2)

nomeDoArrayCopia3.splice(1,1)
console.log(nomeDoArrayOriginal3)
console.log(nomeDoArrayCopia3)





let str="Please locate where 'locate' occurs!"

//.indexOf()
console.log(str.indexOf('locate'))

//.lastIndexOf()
console.log(str.lastIndexOf('locate'))
console.log(str.lastIndexOf('hanna'))

//.search()
console.log(str.search('locate'))


let str1='The rain in SPAIN stays mainly in the plain'

//.match()
console.log(str1.match(/ain/g))
console.log(str1.match(/ain/gi))


let str2='I love Cats. Cats are very easy to love. Cats are very popular'
console.log(str2.matchAll('Cats')) //REVISAR
console.log(str2.matchAll(/Cats/gi)) 


let str3='Hello world, welcome to the universe'

//.includes()
console.log(str3.includes('world')) //REVISAR
console.log(str3.includes('world',12)) //REVISAR

//.startsWith()
console.log(str3.startsWith('Hello')) //REVISAR
console.log(str3.startsWith('world')) //REVISAR

//.startsWith()
console.log(str3.endsWith('universe')) //REVISAR
console.log(str3.endsWith('welcome')) //REVISAR

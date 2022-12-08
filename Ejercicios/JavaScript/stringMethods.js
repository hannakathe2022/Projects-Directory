
let str='Hola soy Hanna Abril'
console.log(str.length)

//EXTRACCION PARTES DE STRINGS

//.slice(start,end)
console.log(str.slice(5))
console.log(str.slice('-15'))
console.log(str.slice(-20,-12))


//.substring(start,end)
console.log(str.substring(9,16))
console.log(str.substring(-10)) //Arroja el mismo string porque no permite numeros negetivos


//.substr(start,lenght)
console.log(str.substr(9,7))



//REMPLAZAR EL CONTENIDO

let str1='Please visit Microsoft, Microsoft.'

//replace(valor a remplazar, remplazo)
console.log(str1.replace('Microsoft','W3Schools'))
console.log(str1.replace(/MICROSOFT/i,'W3Schools'))
console.log(str1.replace(/Microsoft/g,'W3Schools'))

//.replaceAll()
console.log(str1.replaceAll('Microsoft','W3Schools'))



//CONVIRTIENDO A MAYUSCULAS Y MINUSCULAS

let str2='Hello world'


//.toUpperCase()
let str21= str2.toUpperCase()
console.log(str21)

//.toLowerCase()
console.log(str21.toLowerCase())



//CONCADENAR

//.concat()
let str3='Hello'
let str4='World!'
console.log(str3.concat(' '+str4))


//TRIM METHOD. Elimina los espacios en blanco del string

let str5='      Hello world      '

//.trim() 
console.log(str5.trim())

//.trimStart()
console.log(str5.trimStart())

//.trimEnd()
console.log(str5.trimEnd())



// PADDING

let str6='5'

//.padStart()
console.log(str6.padStart(5,'x'))

//.padEnd()
console.log(str6.padEnd(5,'x'))



//EXTRAER CARACTERES

let str7='HELLO WORLD'

//.charAt()
console.log(str7.charAt(6))

//.charCodeAt()
console.log(str7.charCodeAt(3))

// Property access
console.log(str7[0])



//CONVIRTIENDO STRINGS EN ARRAYS

let str8='a,b,c,d,e,f'

//.split()
console.log(str8.split(','))
console.log(str8.split('|'))
console.log(str8.split(' '))



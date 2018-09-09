Repasando clase 1...
ojo con className en lugar de class

en la primera clase vimos cómo hacer componentes

ahora vamos a repasar como hacer componentes en otros archivos. es bueno usar una carpeta "components". por convención, cada archivo de un componente va con mayúsculas. no olvidar exportarlo ¿al final siempre?

siempre que escribamos jsx, hay que tener react. un archivo que use jsx no necesariamente debe tener extensión .jsx. el profe prefiere usar simplemente .js. al final, jsx es javascript.

al importar un componente, no es necesario ponerle la extensión

Javascript Gym

funciones flecha

es otra forma de escribir funciones....

function multiplyByTwo(x)  {
	return x * 2;
}

const multiplyByTwo = x => x * 2

en lugar de abrir llaves, abrimos una flecha. al otro lado de la flecha, el derecho, tenemos lo que la función va a regresar. no se usa return.

también se pueden user funciones sin nombre

si tuvieramos más de un parámetro, sí se debe usar paréntesis en funciones flecha. del lado derecho queda igual...

cuando tenemos la flecha

function isEven(n) {
  return n % 2 === 0
}

const isEven = n => n % 2 === 0

hay más de una forma de declarar variables. ahorita estamos usando const. también está let y, la forma clásica es var. que puede causar problemas. const se usa para valores que no cambian.

"hay cosas en js que son raras"

en js 2 == "2" porque js trata de igualarlos por valor. js no quiere sacar error. por eso en la función pasada usamos triple igual; para que sea igualdad absoluta. es más seguro en js usar triple igual para evaluar igualdad.


function getFirstNLetters(word, n) {
  const letters = word.split('')
  const firstLetters = letters.slice(0, n)
  return firstLetters.join('')
}

const getFirstNLetters = (word, n) => {
	const letters = word.split('')
  	const firstLetters = letters.slice(0, n)
  	return firstLetters.join('')
}

cuando uso bloques en la función flecha, tenemos que usar return para que la función regrese

.map

a map solo le pasamos una funcíón como parámetro. a cada eleemento de un array le va a pasar esa función que pasamos como argumento, parámetro. map no transforma el arreglo donde estamos operando, nos va a regresar un arreglo nuevo.
puede ser un arreglo de cualquier tipo de dato, incluso de objetos

const astronauts = [ {first: "Jeffrey", middle: "N.", last: "Williams"} ]
const astronautFUllNames = astronauts.map(astro => {
	const fullName = `${astro.first} ${astro.middle} ${astro.last}`;
	return fullName
})

console.log(astronautFUllNames)

no en todos los lenguajes podemos pasar funciones como parámetros. basicamente podemos usar funciones como variables. js es un lenguaje híbrido funcional, objetos, etc....


const numbers = [3, 112, 32];

const squaredNumbers = numbers.map(x => x * x)

console.log(squaredNumbers)

const numbers = [3, 112, 32];

const squaredNumbers = numbers.map((elemento, indice, todosloselementos))

console.log(squaredNumbers)

en react usaremos mucho map porque es muy util

en js, cuando las funciones no regresan nada expliticamente, regresan undefined.

map siempre regresa un arreglo

acaba js Gym...



pensar en componentes es muy util con react

hay dos cosas importantes que definen a un componente o a lo que aspiramos:

- cada componente tiene una sola responsabilidad. su trabajo es usando

- todo componente es reutilizable o puede serlo...

las listas tienen elementos, items.

la granuralidad donde identificamos cosas repetidas es un tema de experiencia. ahí nos tenemos que preguntar qué tan util es crear un componente de algo. un item de una lista es un buen candidato, pero, ¿lo es para el título de cada item?

un logo, un header, un buscador... son buenos candidatos para componentes... una lista y sus items... 

también es dificil definir que es una sola responsabilidad... muchas veces es algo de feeling? (hay más alla?)

el navbar es un componenete siempre.

cada tipo de input, segun el profe, debería ser un componente...(selects, checkboxes, radios, etc.)
 el footer, la paginación...

 los componentes son funciones... ¿?

 hay cosad que pueden ser su propio componente, o parte de un componente

 leer el artículo thinking in react, que nos va a ayudar....

 background-attachment: fixed



 vamos a tocar más fuerte el tema de los props.
 vamos a hacer una lista de astronautas...

 comencemos c


 con import estamos importando un archivo y les estamos poniendo en una variable con un nombre

 podemos pasarle un json a un componente con props.

 Los props de un componente los accedemos con this.props.elnombredelaprop...

 para hacer que un json sea presentado de una forma presentable:

 const astronautsNames = this.props.data.map(astro => {
 	return <p>{astro.name}</p>
 })

 no olvidar poner los componentes en folder components
 prettier para formatear código automáticamente

 es conveniente agregar los datos externos que llegan a nuestra aplicación desde el elemento padre: App


 let es otra forma de declarar variables. a diferencia de const, que es una constante... en el pasado usábamos var. hoy en día, el uso preferido es let y const. es la forma moderna

 en mac, commando, control, space es para los emojis


 estudiar map en js

 ir modelando adelana

 solo hay un tipo de persona; persona física. has many solicitues, has one address? sí
admin con roles
person has many credit reports
has many credit queries
ver como modelar bayonet
financing request belongs to person? o requester o algo asi?
subdominios
bootstrap?

.repeat repite un string n veces "hola".repeat(n)
.includes devuelve true si string incluye string "hola como estas".include("hola") true

dash


en index.js obtuvimos la fuente de datos que fue un json y a App se lo pasamos como un prop llamado data.

en App.js tenemos nuestro componeente app con nuestro titulo y un componente de la lista de astronautas, nada más..

checarla y estudiarla...



Assignment

Para el sábado. es una continuación de la pasada. vamos a enfatizar el uso de props. consumiremos más datos de una base de datos. el resultado finan está el el github.
habrá un zip como en la tarea pasada con todos los assets... para importar la data que vamos a usar vamos a importar de la forma que está en el github. sólo podemos usar un default por archivo... por eso se usan llaves ¿?





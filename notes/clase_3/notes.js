clase 3 

en la clase pasada vimos map, como toma un arreglo, hace algo con él y termina regresando uno nuevo
key nos ayuda a darle un identificador único a acada elemento de un arreglo en jsx. key es necesario.
los props entraron por App y luego los pasamos de componente a componente a componente.

cuando acabamos nuestra aplicacion de react, necesitamos hacer un build de la aplicacion. cuando desarrollamos estamos en modo desarrollo, pero al hacer build este modo cambia.(ya no hay mensajes de error, etc.) una aplicación 'built' tiene mucho mayor rendimiento...


el entorno de create-react-app es muy estricto. por ejemplo, no se pueden usar modulos CSS...

con npm eject produce muchos más archivos y nos saca de 'autopilot' (investigar)

npm run build hace el build... crea una nueva carpeta build con archivos minificados... no hay carpeta de node moduloes. solamente está lo totalmente esencial...

la hace más rápida... nuestros archivos de datos se incluirán en nuestro 'bundle' (los jsons y demás)... 

hay muchas formas de obtener datos... de un json, de una api, etc. lo normal es obtenerla a través de un api, haciendo peticiones a un servidor

mediante 'deploy' lanzamos a internet

netlify es muy buena para lo que hacemos en clase... con la simple orden netlify deploy ya está en internet

las tareas las podríamos mandar como un link de netlify.

el metodo Array.filter(función) es parecido a map. recibe hasta tres parámetros: el elemento que estamos inspeccionando, el índice y el arreglo original. filter también regresa un arreglo nuevo
digamos que tenemos un arreglo de números y el filtro es un número para, el resultado será un arreglo de puros números pares

en js, los siguientes son valores falsy:
false, null, indefined, 0, NaN, ""(string vacío)

truthy
true, {}, [], 43, "foo", cualquier objeto nuevo, cualquier función, Infinity, -Infinity

const isEven = x => x%2 === 0 // regresa true o false
const numbers = [0, 1, 2, 3, 4 ,5]

const evenNumbers = numbers.filter(number => isEven(number))  // notese que aquí sólo estamos pasando un argumento: el del elemento. en una arrow function podemos agregar estos argumentos extras si quisiéramos... number, index, arreglo....
console.log(evenNumbers)
// [0,2,4]


const family = [
	{name: "Javier", age: 33}
]

function isOver18 (age) {
	return age >= 18
}

const adults = ....



import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    const catsAndDogs = this.props.pets.filter(animal => { //aquí 'animal' es cada elemento del arreglo this.props.pets
      // Verifica si el animal es un perro o un gato
      // Si sí lo es, entonces regresas `true`
      // Si no lo es, regresas `false`
      
      return animal.kind === "dog" || animal.kind === "cat"
    });

    return (
      <div className="App">
        <ul>
          {catsAndDogs.map(animal => (
            <li>
              {animal.emoji} {animal.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const pets = [
  { name: "Snoopy", kind: "dog", emoji: "🐶" },
  { name: "Firulai", kind: "lizard", emoji: "🦎" },
  { name: "Mini", kind: "cat", emoji: "😸" },
  { name: "Lilly", kind: "dog", emoji: "🐶" },
  { name: "Willy Nelson", kind: "hamster", emoji: "🐹" }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App pets={pets} />, rootElement);


/*

Ejercicio nuevo....
tenemos un botón y queremos que haga algo...

manejo de eventos o event handling
en react usamos event handling para manejar lo que pasa cuando le damos click a un botón
tradicionalmente, el ma... tradicionalmente para que un botón haga algo específicamos el evento usando on y el nombre del evento...
por ejemplo onclick, y luego le ponemos como valos el nombre de la función que queremos que corra... <button onclick="handleCLick()"... y handleCLick es una función donde definimos lo que queremos que pase...
luego se usó tipo jquey con selectors en en id

"en react, hacer esto es más fácil, más agradable y más legible..."

en react podemos hacer algo así:
*/

return <button className="BigRedButton" onClick={() => console.log("clicked")} /> // nótese el uso de camel case en onclick

/*
en react ¿y en js en general? para que no se ejecute una función le quitamos el parentesis

syntetic events.... es para cross browser

cuando importamos y no le ponemos './' al path, se entiende que viene de npm.

en la carpeta public podemos añadir recursos. si queremos referirnos a ellos, no hay que poner el nombre de la carpeta puclic en el path.


ojo... siempre hay que verificar el contexto de this... esto se puede ver por ejemplo cuando usamos funciones flecha vs funciones normales.
cuando usamos arrow functions, el contexto le pertenece a donde está escrito (léxico), en las funciones normales, el contexto le pertenece a quien lo llama...

para manejar el contexto, el profe prefiere bind. la forma del arrow function es la más popular hoy en día.

Javascript MDN es de lo mejor en cuanto documentación de javascript...

Junto a los componentes, el estado es el concepto más importante en react.

el estado o state es un objeto que vive en el componente... 

nuestro punto de entrada es App

para detener la acción predeterminada de un submit de una form usamos .preventDefault()


hay tres formas de leer valores de input de una forma en react. nos vamos a quedar con la última que vimos en clase. está documentado en lo que el profe nos da.

con state podemos mandar cosas de componentes hijos a componentes padre

las funciones se pueden pasar como props. las funciones son valores como cualquier otro... 
react se llama así porque react reacciona a acambios. solo cambia donde algo haya cambiado

setState es de react

en js em5

const objeto = {
    message: message
} 

es lo mismo que

const objeto = { message }

...

react no renderea las cosas que son falsas

cuando queremos correr una función que dependa de un evento, lo nombramos relacionado con el nombre del evento.
por ejemplo, onClick le pasariamos la funcion llamada handleClick
usualmente, el state y los createrefs los definimos hasta arriba... por convención. también, por convención, el render lo definimos hasta abajo


cuando tenemos una variable o constante booleana empezamos con 'is'. también hay quienes a veces usan 'should'

*/
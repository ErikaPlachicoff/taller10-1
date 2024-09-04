// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element)); //Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  //filtro los elementos de tipo string usando el metodo .filter y 
  //con typeof le digo el valor del elemento que busco
  let arraysString = strangeArray.filter(element => typeof element === "string");
  let  = strangeArray.filter(element => typeof element === "string");
  console.log('Los Strings son: ', arraysString);

  //Ordeno los strings alfabéticamente con sort() y localCompare()
  let stringsOrdenados = arraysString.sort(function (a,b){
    return a.localeCompare(b)
  });
  

  //Mostrar los strings ordenados en pantalla 
  showList(stringsOrdenados)

  // Obtener el tipo de strangeArray
  //const arrayType = typeof strangeArray;
  //console.log("Tipo de strangeArray:", arrayType); // Muestra el tipo en la consola

  // Mostrar el contenido del array en la consola
  
});

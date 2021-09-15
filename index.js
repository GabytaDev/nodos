// Los ejercicios a continuación, a menos que se indique lo contrario, deben realizarse manipulando el DOM mediante JavaScript, 
//es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento html.

// Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

// Ejercicio 1 : Creación de nodo.
// Crear un nodo de tipo h1
// Asignarle un texto Hola DOM!
// Colocarle un color, un tamaño de texto y una familia de fuente a elección.

// const body = document.querySelector("body");
// const titulo = document.createElement("h1")
// console.log(titulo)

// titulo.innerHTML = `<h1 class="titulo">Hola DOM</h1>`

// body.appendChild(titulo)


////// Ejercicio 2: Creación de listas ///////
// Crear un elemento desde el DOM de tipo ol

// Asignarle 3 elementos de tipo li, con lo siguientes textos:

// Home
// Nosotros
// Contacto

// const body = document.querySelector("body");
// const listaOrdenada = document.createElement("ol");
// console.log(listaOrdenada)

// listaOrdenada.innerHTML=`<li>Home</li>
// <li>Nosotros</li>
// <li>Contactos</li>`

// body.appendChild(listaOrdenada)

// const ol = document.createElement("ol")
// const array = ['Home', 'Nosotros', 'Contacto'];

// for (let i = 0; i < array.length; i++) {
//   const li = document.createElement("li")
//   li.textContent = array[i]
//   ol.appendChild(li);
// }

// body.appendChild(ol);


// Ejercicio 2: Listas anidadas
// Replica la siguiente estructura HTML creando nodos mediante javascript

// <ul>
//   <li>Verduras</li>
//   <li>Garbanzos</li>
//   <li>
//     Frutas
//     <ul>
//       <li>Manzanas</li>
//       <li>Naranjas</li>
//       <li>Bananas</li>
//       <li>Frutillas</li>
//     </ul>
//   </li>
// </ul>

// const body = document.querySelector("body");
// const listaDesordenada = document.createElement("ul");
// console.log(listaDesordenada)

// listaDesordenada.innerHTML=`<ul>
// <li>Verduras</li>
// <li>Garbanzos</li>
// <li>
//   Frutas
//   <ul>
//     <li>Manzanas</li>
//     <li>Naranjas</li>
//     <li>Bananas</li>
//     <li>Frutillas</li>
//   </ul>
// </li>
// </ul>`

// body.appendChild(listaDesordenada)

//Ejercicio 3: Botones
//Por cada ítem de la siguiente lista, crear un botón con el texto de dicho ítem. Al clickear un botón, 
//debe aparecer un alert que diga Has clickeado el mes X, dependiendo del mes clickeado (por ejemplo, 
//Has clickeado el mes: Mayo)

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
// "Septiembre", "Octubre", "Noviembre", "Diciembre"]

// const body = document.querySelector("body");



// for (let i = 0; i < meses.length; i++) {

//     const nuevosDivs = body.appendChild(document.createElement("div"))
    
//     nuevosDivs.innerHTML=`<button class="boton" id="${meses[i]}" onclick="botonesClicks(this.id)">${meses[i]}</button>` 
// }

// console.log(body.children)

// const body = document.querySelector("body");

// botonesClicks = (nombreMes) => {
//     //console.log("aprete y entre aca")
//     alert(`Has clickeado el mes: ${nombreMes}`)
// }


// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

//  for (let i = 0; i < meses.length; i++) {
//   const boton = document.createElement("button")
//   boton.textContent = `${meses[i]}`;

//   boton.onclick = () => {
//     //  alert(`Has Cliqueado en el mes ${meses[i]}`)
//     botonesClicks(meses[i])
//   }
//  body.appendChild(boton)  
//  }


// Ejercicio 4: Lista de tareas
// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem
// y un botón que diga Eliminar. Al clickear el botón, se debe eliminar de la lista el nodo correspondiente.

// const tareas = [
//   'Comprar comida',
//   'Estudiar para examen',
//   'Pagar impuestos',
//   'Pasear a perro',
//   'Comprar entradas para el cine',
// ]


// const body = document.querySelector("body");
// const ul = document.createElement("ul");

// for (let i = 0; i < tareas.length; i++) {

//   const li = document.createElement("li");
  
//   const boton = document.createElement("button");

//   boton.textContent = "Eliminar";

//   li.textContent = `${tareas[i]} `;

//   boton.onclick = () => {
//     ul.removeChild(li);
//   };

//   li.appendChild(boton);
//   ul.appendChild(li);
//   body.appendChild(ul);
// } 

// const tareas = [
//     'Comprar comida','Estudiar para examen','Pagar impuestos','Pasear a perro','Comprar entradas para el cine',]
//     for (let i = 0; i< tareas.length; i++) {
//     const ul = document.createElement("ul")
//     const li = document.createElement("li")
//     li.textContent = `${tareas[i]}`
//     const boton = document.createElement("button")
//     boton.textContent = "Eliminar"
//       boton.onclick = () => {
//         ul.removeChild(li)
//       }
//     body.appendChild(ul)
//     ul.appendChild(li)
//     ul.appendChild(boton)
// }

//Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem. 
//Cada vez que se clickea el ítem, debe ir cambiando de color, 
//siguiendo este orden: gris -> celeste -> amarillo -> rojo. 
//Cuando llega al último color y se lo vuelve a clickear, debe volver al primer color.

// const body = document.querySelector("body");

// const tareas = [
//   'Comprar comida',
//   'Estudiar para examen',
//   'Pagar impuestos',
//   'Pasear a perro',
//   'Comprar entradas para el cine',
// ]

// const colores = ['grey', 'lightblue', "yellow", "red"];

// for (let i = 0; i < tareas.length; i++) {
//     const ul = document.createElement('ul');
//     const li = document.createElement('li');
//     li.textContent = `${tareas[i]}`;

//     let posicionColor = 0
  
//    li.onclick = () => {
//     li.style.color = `${colores[posicionColor]}`;
//     posicionColor += 1
//     if(posicionColor > colores.length-1){
//         posicionColor = 0
//     }
//    }
//     body.appendChild(ul);
//     ul.appendChild(li);
//   }

  // Ejercicio 6: Completar tareas
  // Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem 
  //y un checkbox. Si el checkbox está tildado, al texto deben agregarse los estilos text-decoration: 
  //line-through; color: gray;. Si está destildado, debe volver a la normalidad.
  
  const body = document.querySelector("body");

  const tareas = [
    'Comprar comida',
    'Estudiar para examen',
    'Pagar impuestos',
    'Pasear a perro',
    'Comprar entradas para el cine',
  ]
  
  for (let i = 0; i < tareas.length; i++) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = `${tareas[i]}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
   
    checkbox.onclick = () => {
      if(checkbox.checked === true){
        li.style.textDecoration = "line-through";
        li.style.color = "grey";
      }else{
        li.style = 'none';
      }
     
    }
    body.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(checkbox);
  }

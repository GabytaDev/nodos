// Ejercicio 8: Grilla
// Crear una función generarGrilla(filas, columnas, contenedor, claseCasilla) que tome por parámetros:

// un número filas, representando la cantidad de filas
// un número columnas, representando la cantidad de columnas
// un nodo HTML contenedor que es el elemento donde se va crear la grilla
// un string claseCasilla, que es la clase que se le va a agregar a cada casilla
// La función debe en el elemento contenedor agregar filas * columnas cantidad de casillas, con clase claseCasilla,
// de ancho ancho contenedor / columnas y de alto alto contenedor / filas.

// El elemento contenedor debe tener los siguientes estilos: (en css)

const body = document.querySelector("body")
let contenedor = document.createElement("div")
contenedor.classList.add("contenedor")

body.appendChild(contenedor)
                    //  10       10       
const generarGrilla = (filas, columnas, contenedor, claseCasilla) => {

    for (let i = 0; i < filas * columnas; i++) {

        const casilla = document.createElement("div")
        casilla.classList.add(claseCasilla)
        contenedor.appendChild(casilla)
        
    }
}


console.log(generarGrilla(10,10,contenedor,"claseCasilla"))


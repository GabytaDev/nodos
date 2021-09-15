// Ejercicio 7: Tatetí
// En un documento .html, agregar dentro del body lo siguiente:
// <div class="tablero"></div>
// En un archivo .css, agregar lo siguiente: (en css)

//Por cada ítem de la siguiente matriz, agregar al elemento tablero un elemento div que contenga como texto 
//dicho ítem:

const body = document.querySelector("body");
const claseCasilla = document.querySelector(".casilla");
const divTablero = document.querySelector("div") //del tablero

const tablero = [
  ['X', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'O', 'X'],
]

for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
       const casilla = document.createElement("div")//casilla
        casilla.classList.add("casilla")
        casilla.textContent = `${tablero[i][j]}`
        casilla.onclick = () => {
            casilla.textContent = movimientos(casilla.textContent)

            // if(casilla.textContent === "X"){
            //     casilla.textContent = "O"
            // }else if (casilla.textContent === "O"){
            //     casilla.textContent = " "
            // }else if (casilla.textContent === " "){
            //     casilla.textContent = "X"
            // }
        }

        divTablero.appendChild(casilla)
    }   
}

const movimientos = (str) => {
    if(str === "X"){
        return "O"
    }else if (str === "O"){
        return " "
    }else if (str === " "){
        return "X"
    }
}

// Al clickear cada casilla, se debe cambiar el texto de la siguiente forma:
// Si hay una X, cambiar a una O
// Si hay una O, dejarla vacía
// Si está vacía, cambiar a una X



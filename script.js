let saludo = ("Bienvenido al kiosco virtual del colegio")

alert(saludo)

let mensaje = "Ingrese que opcion desea\n1 - Agua mineral $300\n2 - Jugo Baggio $180\n3 - Alfajor Jorgito Blanco $150\n4 - Alfajor Jorgito Nrgro $150\n5 - Tutucas $150\n6 - Chupetin Pico dulce $100\n7 - palitos salados $180\n8 - Papas Fritas $300\n9 - Finalizar compra"
let opcion
let total = 0

do {
    opcion = Number(prompt(mensaje))
    switch (opcion) {
        case 1:
        alert("Se agrega Agua mineral al carrito")
        total += 300
        break
        case 2:
            alert("Se agrega Jugo Baggio")
            total += 180
            break
        case 3:
            alert("Se agrega Alfajor Jorgito Blanco")
            total += 150
            break
        case 4:
            alert("Se agrega Alfajor Jorgito Negro")
            total += 150
            break
        case 5:
            alert("Se agrega Tutucas")
            total += 150
            break
        case 6:
            alert("Se agrega Chupetin Pico dulce")
            total += 100
            break
        case 7:
            alert("Se agrega Palitos Salados")
            total += 180
            break
        case 8:
            alert("Se agrega Papas Fritas")
            total += 300
            break
            case 9:
            alert("Total a pagar $" + total)
            let finalizar = prompt ("Desea agregar algo mas? Si o No"). toLowerCase()
                if (finalizar === "no") {
                    alert("Gracias por su compra")
                }
            //default:
            break
    }
} while (opcion != 0)
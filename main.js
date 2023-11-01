

let conocerTalla;

do{

    let nombreUsuario = prompt("Por favor, ingrese su nombre y/o apellido:")

    if (nombreUsuario) {
        alert("¡Hola, " + nombreUsuario + "! Bienvenido.")
    } else {
        alert("No ingresaste ningun nombre.")
        console.error("no ingreso ningun nombre")
        break
    }


    conocerTalla = confirm("¿necesitas saber tu talla de pantalón?")
    
    if (conocerTalla) {
        let cintura = parseFloat(prompt("Ingresa los cm de tu cintura:"))
        let cadera = parseFloat(prompt("Ingresa los cm de tu cadera:"))
        let largo = parseFloat(prompt("Ingresa los cm del largo de tu entrepiernas:"))
        
        if (!isNaN(cintura) && !isNaN(cadera) && !isNaN(largo)) {


            if (cintura >= 75 && cintura <= 79 && cadera >= 86 && cadera <= 90 && largo <= 72) {
                alert("Te recomendamos talla Xs o 30 americana.")

            } else if (cintura >= 80 && cintura <= 84 && cadera >= 91 && cadera <= 96 && largo >= 73 && largo <= 75) {
                alert("Te recomendamos talla S o 32 americana.")

            } else if (cintura >= 85 && cintura <= 89 && cadera >= 97 && cadera <= 102 && largo >= 76 && largo <= 78) {
                alert("Te recomendamos talla M o 34 americana.")

            } else if (cintura >= 90 && cintura <= 94 && cadera >= 103 && cadera <= 108 && largo >= 79 && largo <= 81) {
                alert("Te recomendamos talla L o 36 americana.")

            } else if (cintura >= 95 && cintura <= 99 && cadera >= 109 && cadera <= 114 && largo >= 82 && largo <= 85) {
                alert("Tu talla de pantalón recomendada es Xl o 38 americana.")

            } else {
                alert("Lo siento, no puedo determinar tu talla de pantalón con los valores ingresados.")
            }
            break 
            
        } else {
            alert("Por favor, ingresa valores numéricos válidos para cintura, cadera y largo.")
        } 
    } else {
        alert("Gracias por visitarnos. ¡Vuelve pronto!")

    }

} while (conocerTalla)




function conocerTallaPantalon() {
    do {
        let conocerTalla = confirm("¿Necesitas saber tu talla de pantalón?");

        if (conocerTalla) {
            let cintura = parseFloat(prompt("Ingresa los cm de tu cintura:"));
            let cadera = parseFloat(prompt("Ingresa los cm de tu cadera:"));
            let largo = parseFloat(prompt("Ingresa los cm del largo de tu entrepiernas:"));

            if (!isNaN(cintura) && !isNaN(cadera) && !isNaN(largo)) {
                if (cintura >= 75 && cintura <= 79 && cadera >= 86 && cadera <= 90 && largo <= 72) {
                    alert("Te recomendamos talla Xs o 30 americana.");
                } else if (cintura >= 80 && cintura <= 84 && cadera >= 91 && cadera <= 96 && largo >= 73 && largo <= 75) {
                    alert("Te recomendamos talla S o 32 americana.");
                } else if (cintura >= 85 && cintura <= 89 && cadera >= 97 && cadera <= 102 && largo >= 76 && largo <= 78) {
                    alert("Te recomendamos talla M o 34 americana.");
                } else if (cintura >= 90 && cintura <= 94 && cadera >= 103 && cadera <= 108 && largo >= 79 && largo <= 81) {
                    alert("Te recomendamos talla L o 36 americana.");
                } else if (cintura >= 95 && cintura <= 99 && cadera >= 109 && cadera <= 114 && largo >= 82 && largo <= 85) {
                    alert("Tu talla de pantalón recomendada es Xl o 38 americana.");
                } else {
                    alert("Lo siento, no puedo determinar tu talla de pantalón con los valores ingresados.");
                }
            } else {
                alert("Por favor, ingresa valores numéricos válidos para cintura, cadera y largo.");
            }
        } else {
            alert("Gracias por visitarnos. ¡Vuelve pronto!");
            break; 
        }
    } while (true);
}


//conocerTallaPantalon();// lo dejo comento pero asi se llamaria a la funcion para ejecutarla

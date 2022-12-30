
const user = "admin"
const pass = "123"

for (let i=2; i >= 0; i--) {

    let u = prompt ("Ingresa tu usuario")
    let p = prompt ("Ingresa tu contraseña")
    
    if (u == user && p == pass){
        alert ("Bienvenido")
        break
    }
    if (!u || !p) {
        alert ("ingresá los datos solicitados")
    }else if (i > 1){ 
    alert ("Usuario o contraseña incorrectos. Te quedan " +i+ " intentos")
    }else if (i == 1){ 
        alert ("Usuario o contraseña incorrectos. Te queda " +i+ " intento")
    }
    else {
        alert ("Usuario bloqueado. Pero es solo un ejercicio, podes continuar")
    }
}

function validar () {  
    let apellido = prompt ("Ingrese apellido de alumno");
    let nombre = prompt ("Ingrese nombre de alumno")


    if (!apellido || !nombre) {
        alert ("No ingresaste un apellido/nombre")
        validar () 
    }
    else if(!/^[a-zA-Z]+$/.test(apellido)) {
        alert ("Debes ingresar sólo letras")
        validar () 
    }
    else if(!/^[a-zA-Z]+$/.test(nombre)) {
        alert ("Debes ingresar sólo letras")
        validar ()
    }
    else{
        function validar2 (){ 
            let puntaje1 = parseInt (prompt ("Ingrese puntaje 1er cuatrimestre"))
            let puntaje2 = parseInt (prompt ("Ingrese puntaje 2do cuatrimestre")) //decidí usar parseInt en vez de Number para evitar demasiados promedios con coma
            if (!puntaje1 || !puntaje2) {
                alert ("No ingresaste el puntaje")
                validar2 ()
            }
            else{         
                let resultado
                let calificacion
                function promedio (n1, n2) {
                    resultado = (n1 + n2) / 2
                    return resultado }                        
                promedio (puntaje1, puntaje2)
                if (resultado){ 
                    switch (resultado){
                    case 1 : calificacion = "Insuficiente"; break
                    case 1.5 : calificacion = "Insuficiente"; break
                    case 2 : calificacion = "Insuficiente"; break
                    case 2.5 : calificacion = "Insuficiente"; break
                    case 3 : calificacion = "Insuficiente"; break
                    case 3.5 : calificacion = "Insuficiente"; break
                    case 4 : calificacion = "Insuficiente"; break
                    case 4.5 : calificacion = "Insuficiente"; break
                    case 5 : calificacion = "Insuficiente"; break
                    case 5.5 : calificacion = "Insuficiente"; break
                    case 6 : calificacion = "Aprobado"; break
                    case 6.5 : calificacion = "Aprobado"; break
                    case 7 : calificacion = "Bueno"; break
                    case 7.5 : calificacion = "Bueno"; break
                    case 8 : calificacion = "Muy bueno"; break
                    case 8.5 : calificacion = "Muy bueno"; break
                    case 9 : calificacion = "Sobresaliente"; break
                    case 9.5 : calificacion = "Sobresaliente"; break
                    case 10 : calificacion = "Excelente"; break
                    }
                }
                alert ("Promedio de " + apellido +" "+ nombre +" "+ resultado + " " + calificacion)
            }
        }
        validar2 ()
    }
    validar () 
}
validar ()




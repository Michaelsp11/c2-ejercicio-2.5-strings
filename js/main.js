/*
Crea una función llamada esItaliano que recibirá un valor de tipo string y devolverá un booleano.

Esta función tiene que devolver true si la cadena recibida acaba en i, y false en caso contrario.

Crea dos variables que contengan apellidos, uno acabado en i y otro no.Haciendo uso de la función anterior, haz que tu script imprima por consola "Este apellido tiene muchas probabilidades de ser italiano"
o "Este apellido podría ser de cualquier país", para cada una de las variables creadas.

Por ejemplo:

González: Este apellido podría ser de cualquier país

Falciani: Este apellido tiene muchas probabilidades de ser italiano
*/
const siEsItaliano = "Este apellido tiene muchas probabilidades de ser italiano";
const noEsItaliano = "Este apellido podría ser de cualquier país";
let apellido = "González";
console.log((esItaliano(apellido)) ? siEsItaliano : noEsItaliano);
apellido = "Falciani";
console.log((esItaliano(apellido)) ? siEsItaliano : noEsItaliano);

function esItaliano(apellido) {
    return apellido.charAt(apellido.length - 1) === "i";
}
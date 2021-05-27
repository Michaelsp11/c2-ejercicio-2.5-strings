/*
Punto 1
Crea un script JS que declare una variable y asígnale un string que sea una frase escrita en snakecase.

Haz que el script convierta esa frase en camelCase (con la primera en minúsculas) y la imprima por consola.
*/
let snakeCase = "hola_amigos_programadores";
snakeCase = snakeCase.split("_");
console.log(toCamelCase(snakeCase));

function toCamelCase(arrayString) {
    let camelCase = "";
    for (const i in arrayString) {
        if (i > 0) {
            camelCase += arrayString[i].charAt(0).toUpperCase();
            camelCase += arrayString[i].slice(1);
        } else {
            camelCase += arrayString[i].toLowerCase();
        }
    }
    return camelCase;
}
/*
Punto 2
Crea un script JS que declare una variable y asígnale un string que sea una frase escrita en camelCase (con la primera en minúsculas).

Haz que el script convierta esa frase en snakecase y la imprima por consola.
*/
let camelCase = "holaAmigosProgramadores";
console.log(toSnakeCase(camelCase));

function toSnakeCase(frase) {
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === frase.charAt(i).toUpperCase()) {
            frase = frase.replace(frase.charAt(i), '_' + frase.charAt(i).toLowerCase());
        }
    }
    return frase;
}
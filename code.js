const numeroIf = 12;

if(numeroIf > 0) {
    console.log('Es positivo');
} else {
    console.log('Es negativo')
}

let numeroWhile = 0;

while(numeroWhile < 3) {
    numeroWhile++;
    console.log(numeroWhile);
} 

do {
    console.log(numeroWhile)
} while( numeroWhile < 2)

for(let i = 0; i < 3; i++) {
    console.log(i);
}


const estacion = "verano";

switch(estacion) {
    case "otoño": 
        console.log('Es otoño')
        break;
    case "invierno":
        console.log("Es invierno")
        break;
    case "primavera":
        console.log('Es primavera')
        break;
    case "verano":
        console.log('Es verano')
        break;
    default:
        console.log('No hay nada')
        break;

}
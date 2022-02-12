var distancia = prompt("¿Cuál es la distancia que tienes que recorrer?(ingrese el valor en metros)");

if( distancia >= 0 && distancia < 1000){
    alert("Te conviene ir a pie ")
}
else if (distancia >= 1000 && distancia < 10000){
    alert("Te conviene ir en bicicleta ")
}
else if (distancia >= 10000 && distancia < 30000){
    alert("Te conviene ir en colectivo ")
}
else if (distancia >= 30000 && distancia < 100000){
    alert("Te conviene ir en auto")
}
else{
    alert("Te conviene ir en avion ")
}
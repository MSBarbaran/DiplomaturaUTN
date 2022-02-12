
var numeros = [100,9,20,677,35];
var maximo = 0;

for(var i=0; i< numeros.length;i++){
    if(maximo < numeros [i]){
        maximo = numeros [i];
    }
}
document.write("El valor mayor es " + maximo);
function sumanumeros (num1,num2) {
    var resultado= num1+num2;
    return resultado;
}

function sumalista (lista) {
    var suma=0;
    for (i in lista){ 
        suma+=lista[i];
    }
    return suma;
    
}

function themax (num1,num2,num3) {
    if (num1>num2 && num1>num3) {
        res=num1;
    }
    if (num2>num1 && num2>num3) {
        res=num2;
    }
    if (num3>num1 && num3>num2) {
        res=num3;
    }
    return res;
   
}

function compalistas(lista1,lista2) {
    if (lista1.lenght>lista2.lenght) {
        return lista1;
    }else {
        return lista2;
    }
}

var suma= sumanumeros(4,8);
var list= sumalista([1,2,3,4,5,6,7,8,9,10]);
var max= themax(1,265,65);
var comp= compalistas([1,2,3,4,5],[424,4,5,6,3,4,5]);
console.log(suma, "\n", list, "\n", max, "\n", "la lista mas larga es: ", comp);


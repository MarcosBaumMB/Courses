console.log(`Trabalhando com looops \n`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let contador = 0;
const destino = listaDestinos[1];
console.log(`Destino escolhido: ${destino}\n`);
//while
console.log(`\nPercorrendo lista para encontrar o destino com WHILE...`);
while (contador < listaDestinos.length){
    if (listaDestinos[contador] == destino){        
        console.log(`Destino encontrado na posição ${contador} - ${listaDestinos[contador]}`);
        break;
    }
    
    contador ++;
}

//For
console.log(`\nPercorrendo lista para encontrar o destino com FOR...`);
for (let cont = 0 ; contador < listaDestinos.length; cont++){
    if (listaDestinos[cont] == destino){        
        console.log(`Destino encontrado na posição ${cont} - ${listaDestinos[cont]}`);
        break;
    }
}

//Foreach
console.log(`\nPercorrendo lista para encontrar o destino com ForEach...`);
contador = 0;
listaDestinos.forEach(item => {
    if (item == destino){
        console.log(`Destino encontrado na posição ${contador} - ${item}`);
    }
    contador ++;
});


console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saopPaulo = `São Paulo`;
// const rioDejaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`); //Add element
console.log(`Destinos possíveis:`);
//console.log(salvador, saopPaulo, rioDejaneiro);
console.log(listaDestinos);

listaDestinos.splice(1, 1);//remove element by index

console.log(listaDestinos);
console.log(listaDestinos[1]);

//listando destinos
listaDestinos.forEach(element => {
    console.log(element);
});


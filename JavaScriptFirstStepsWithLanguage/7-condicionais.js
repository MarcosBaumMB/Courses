console.log(`Trabalhando com condicionais`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
console.log(`Destinos possíveis:`);
//listando destinos
listaDestinos.forEach(element => {
    console.log(element);
});

const estaAcompanhada = false;

// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade, vendido pacote`);
//     listaDestinos.splice(1, 1);//remove element by index
// } else if (estaAcompanhada) {
//     console.log(`Comprador está acompanhado, vendido pacote`);
//     listaDestinos.splice(1, 1);//remove element by index
// } else {
//     console.log(`Comprador não é maior de idade e não posso vender`);
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Comprador maior de idade, vendido pacote`);
    listaDestinos.splice(2, 1);//remove element by index
} else {
    console.log(`Comprador não é maior de idade e não posso vender`);
}

//listando destinos
console.log(`Destinos restantes:`);
listaDestinos.forEach(element => {
    console.log(element);
});

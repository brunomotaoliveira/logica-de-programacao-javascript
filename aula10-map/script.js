//tira a necessidade de usar for, para manipular o Vetor. Map recebe função como parametro, que vai manipular os itens do vetor.
const vetor = ["10.3", "20.2", "30.5"];
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);
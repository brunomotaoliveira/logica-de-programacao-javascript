//filter => filtra o vetor, dada uma condição.
const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x % 2 === 0);//function(x){return x % 2 === 0}

console.log(pares);
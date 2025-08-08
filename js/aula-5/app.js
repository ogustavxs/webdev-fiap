let nomes = ["Caio", 1, "Fulano"]
console.log(nomes[2])
nomes[2] = "Matheus Bidu"
console.log(nomes[2])
console.log(nomes.length)

function executarPush() {
  const array = ['🍎', '🍌'];
  array.push('🍇'); // Adiciona um novo elemento ao final do array
  const resultado = array;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop() // Remove um elemento do final do array
  const resultado = array;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift() // Remove um Elemento do inicio do array
  const resultado = array;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍓') // Adiciona um elemento no inicio do array
  const resultado = array;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝');
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a, b) => a-b);
  const resultado2 = array2.sort().reverse();
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array.slice(1, 3);
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.splice(1, 1);
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.indexOf('🍌');
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join(', ');
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(pegaItem => console.log(pegaItem))
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map((pegaItem) => `✅ ${pegaItem}`);
}

 function executarMapHTML() {

    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegaItem, indice) => {
      return `<h1> Item ${indice+1} em promoção </h1>
      <p> ${pegaItem} </p>`
    })
    console.log(resultado)
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => {
    return (pegaItem === '🍎')
  });
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaItem => pegaItem === '🍎');
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex(pegaItem => pegaItem === '🍎');
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  }, 0);
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = array.every((pegaItem) => pegaItem > 5);
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = array.some((pegaItem) => pegaItem === '🥝');
}
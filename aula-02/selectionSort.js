const livros = require(".././aula-01/listaLivros");
const menorValor = require(".././aula-01/menorValor");

// for (atual = 0; atual < livros.length; atual++) {
//     let menor = menorValor(livros, atual);

//     let livroAtual = livros[atual];
//     console.log(`Posição atual`, atual);
//     console.log(`Livro atual`, livros[atual]);
//     let livroMenorPreco = livros[menor];
//     console.log(`Livro menor preço`, livros[menor] + `\n================================`);

//     livros[atual] = livroMenorPreco;
//     livros[menor] = livroAtual;
// }

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)

console.log(livros);

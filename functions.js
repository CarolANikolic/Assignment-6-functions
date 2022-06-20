/*Crie uma função que receba como parâmetro o nome da pessoa e a idade, 

caso a pessoa seja maior de 18 anos a função deve retornar "nomeDaPessoa é de maior e tem x anos", 
caso seja de menor "nomeDaPessoa é de maior e tem x anos".


Em seguida chame essa função quatro vezes, passando 3 diferentes dados.*/

let nome = prompt('Digite o seu nome: ')
let idade = parseInt(prompt('Digite a sua idade: '))

function dadosPessoais(nome, idade) {
    if (idade > 18) {
        return (alert(`${nome} é de maior e tem ${idade} anos`));

    } else {
        return (alert(`${nome} é de menor e tem ${idade} anos`));
    }
}

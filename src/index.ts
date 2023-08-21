interface Aluno {
nome: string;
email: string;
matricula: string;
idade: number;


}


function medirTamanhoNome(nome: string): number {
    return nome.length;


}


const atribuirNome = (nome : string, aluno: Aluno) : void => {

aluno.nome = nome;


}

let aluno : Aluno = {
nome:"",
email: "",
idade: 0,
matricula: ""



}

atribuirNome
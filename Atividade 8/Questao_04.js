class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

let alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Maria", "Oliveira", 9, 7.5),
  new Aluno("Carlos", "Pereira", 6, 9),
  new Aluno("Ana", "Souza", 5, 4),
  new Aluno("Pedro", "Lima", 10, 9)
];

function mostrarDados() {
  for (let aluno of alunos) {
    alert(
      "Nome: " + aluno.nomeCompleto() +
      "\nMédia: " + aluno.media().toFixed(2) +
      "\nSituação: " + aluno.situacao()
    );
  }
}

mostrarDados();

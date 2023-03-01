//CLASSE PARA GERAR ALUNOS

import { Categorias } from "./categorias.js";

export class Aluno {


    //CONSTRUTOR

    constructor(nome, idade, altura, peso) {

        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
        this.imc = this.calcularImc()
        this.categoriaImc = this.catImc()

    }


    //MÉTODO CALCULAR IMC

    calcularImc() {

        return (this.peso / (this.altura * this.altura )).toFixed(1)
        
    }


    //MÉTODO CATEGORIA DO IMC

    catImc() {

        if(this.imc <= 0) return "INDEFINIDO"

        if(this.imc <= 18.5) {Categorias.abaixoDoPeso++; return "Abaixo do Peso"}

        else if (this.imc >= 18.5 && this.imc < 25) {Categorias.pesoNormal++; return "Peso Normal"}

        else if (this.imc >= 25 && this.imc < 30) {Categorias.sobrepeso++; return "Sobrepeso"}

        else if (this.imc >= 30 && this.imc < 35) {Categorias.obesidade1++; return "Obesidade Grau I"}

        else if (this.imc >= 35 && this.imc < 40) {Categorias.obesidade2++; return "Obesidade Grau II"}

        else {Categorias.obesidade3++; return "Obesidade Grau III"}

    }

}

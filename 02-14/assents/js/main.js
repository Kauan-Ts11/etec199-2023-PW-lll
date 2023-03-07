import { Lista_Alunos } from "./listaAlunos.js";
import { Categorias } from "./categorias.js";


function escreveObj() {
    for(let i = 0; i < Lista_Alunos.length; i++) {

        var {nome, imc, categoriaImc} = Lista_Alunos[i]
        console.log(nome+"\n -> Imc: "+imc+"\n -> Categoria: "+categoriaImc)

    }

    console.log("\nContagem das Categorias \n\n" + "Abaixo do Peso: " + Categorias.abaixoDoPeso + "\nPeso Normal: " + Categorias.pesoNormal + "\nSobrepeso: " + Categorias.sobrepeso + "\nObesidade Grau I: " + Categorias.obesidade1 + "\nObesidade Grau II: " + Categorias.obesidade2 + "\nObesidade Grau III: " + Categorias.obesidade3)

}

escreveObj()

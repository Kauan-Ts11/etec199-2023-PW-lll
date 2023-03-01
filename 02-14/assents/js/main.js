import { Lista_Alunos } from "./listaAlunos.js";
import { Categorias } from "./categorias.js";


function escreveObj() {
    for(let i = 0; i < Lista_Alunos.length; i++) {

        var {nome, imc, categoriaImc} = Lista_Alunos[i]
        console.log(nome+" -> Imc: "+imc+" -> Categoria: "+categoriaImc)

    }

    console.log(Categorias)

}

escreveObj()
//OBJETOS

var aluno01 = {
    
    nome: "Kauan",
    idade: 18,
    altura: 1.63,
    peso: 63,
    imc: 0,

}

var aluno02 = {
    
    nome: "Bruna",
    idade: 17,
    altura: 1.65,
    peso: 69,
    imc: 0,

}

var aluno03 = {
 
    nome: "Henry",
    idade: 17,
    altura: 1.70,
    peso: 65,
    imc: 0,

}

var aluno04 = {
    
    nome: "Kaio",
    idade: 18,
    altura: 1.72,
    peso: 86,
    imc: 0,

}

var aluno05 = {
    
    nome: "Miguel",
    idade: 16,
    altura: 1.60,
    peso: 55,
    imc: 0,

}


//FUNÇÃO CALCULAR IMC

function calcularImc(obj) {

    obj.imc = (obj.peso/(obj.altura*obj.altura)).toFixed(1)
    
}

calcularImc(aluno01)
calcularImc(aluno02)
calcularImc(aluno03)
calcularImc(aluno04)
calcularImc(aluno05)


//DESCONSTRUÇÃO

function escreveObj(obj) {

    var {nome, imc} = obj
    console.log(nome+" -> Imc: "+imc)

}

escreveObj(aluno01);
escreveObj(aluno02);
escreveObj(aluno03);
escreveObj(aluno04);
escreveObj(aluno05);
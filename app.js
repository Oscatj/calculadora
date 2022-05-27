const forma = document.getElementById('forma');
let operandoA = forma['operandoA'];
let operandoB = forma['operandoB'];

function sumar(){

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'Debe llenar los campos en blanco';
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
function restar(){

    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'Debe llenar los campos en blanco';
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
function multiplicar(){

    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'Debe llenar los campos en blanco';
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
function dividir(){

    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'Debe llenar los campos en blanco';
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
const valorX = document.getElementById('numberX');
const valorY = document.getElementById('numberY');
const form = document.getElementById('form-calcular');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    compararNumero()
} )

function compararNumero(){
    var inputNumberX = document.getElementById("numberX").value;
    var inputNumberY = document.getElementById("numberY").value;

    var numberX = parseInt(inputNumberX);
    var numberY = parseInt(inputNumberY);

    if (!isNaN(numberX) && !isNaN(numberY)) {
        if (numberX === numberY) {
            alert("os numeros sao iguais.");
        } else if (numberX > numberY) {
            alert("o primeiro numero é maior");
        } else if (numberX < numberY) {
            alert ("o segundo numero é maior");
        }
        
    } 
}

    console.log(form);




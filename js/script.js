

function converterValor(){
    window.alert("Convertendo...");
    let valorReal = document.getElementById('entrada-user').value;
    let converterDolar = (valorReal / 5.33).toFixed(2);
    let converterEuro = (valorReal / 5.52).toFixed(2);
    let converterIene = (valorReal / 0.038).toFixed(2);
    document.getElementById('valor-dolar').innerHTML = converterDolar;
    document.getElementById('valor-euro').innerHTML = converterEuro;
    document.getElementById('valor-iene').innerHTML = converterIene; 
}
function apagarValor(){
     document.getElementById('entrada-user').value = "";
     document.querySelector('euro-conteudo').setAttribute("class","laranja");
     document.getElementById('valor-euro').value =" " ;
     document.getElementById('valor-iene').value =" " ;
     
} 


const botao = document.getElementById("exclusao").addEventListener('click', apagarValor)

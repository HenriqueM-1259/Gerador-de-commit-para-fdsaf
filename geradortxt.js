function gerar(){
    //variaveis 
    var nTarefa = document.getElementById('NumeroT').value;
    var titulo = document.getElementById('Titulo').value;
    var cIssue = document.getElementById('Issue').value;
    var tTipo = document.getElementById('Tipo').value;
    var tAmbiente = document.getElementById('ambiente').value;
    var tTextArea = document.getElementById('TextArea').value;
    
    var blob = new Blob(["t" + nTarefa + " - " + titulo + "\n\n\n" + "Commit: "+"#"+nTarefa+" - " + titulo + "\n\n\n"  + "Ambiente: " + tAmbiente + "\n\n\n" +"Branch: " + tTipo + "/" + tTipo + "_" + cIssue + "\n\n\n\n\n" + "Arquivos modificados: " + tTextArea], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "t" + nTarefa + " - " + titulo);
}

function verificaCheck(status){

    var nChe = document.getElementById('naochecado');
    var verifica = document.getElementById('poucas');
    if(status == true){
        verifica.style.display = 'block';
        nChe.style.display = 'none'
        checkado.style.display = 'block'
    }else{
        verifica.style.display = 'none';
        nChe.style.display = 'block'
        checkado.style.display = 'none'
    }

}
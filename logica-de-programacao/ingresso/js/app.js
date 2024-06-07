function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }
    else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    }
    else {
        comprarInferior(qtd);
    }
}
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(sup){
    let qtdsup = parseInt(document.getElementById('qtd-superior').textContent);

    if (sup > qtdsup){
        alert('Quantidade indisponível para cadeira superior');
    } else {
        qtdsup = qtdsup - sup;
        document.getElementById('qtd-superior').textContent = qtdsup;
        alert('Compra realizada com sucesso!');
    
    }

}
function comprarInferior(inf){
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);

    if (inf > qtdInf){
        alert('Quantidade indisponível para cadeira inferior');
    }
    else{
        qtdInf = qtdInf - inf;
        document.getElementById('qtd-inferior').textContent = qtdInf;
        alert('Compra realizada com sucesso!');
    }


}
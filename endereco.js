'user strict' //modo restrito
// este modo faz com que o javaScript operea de formas mais seguras e rigorosa, ajuda a evitar erros comuns de programação
    /*consumo de API - https://viacep.com.br/ */


    const limparforulario = () =>{
        document.getElementById('lagrodouro').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('localidade').value ='';
        document.getElementById('uf').value = "";
    }
// lenth e uma propiedade que verifica a quantidade de careacteres dentro do argumento cep
// -------------------------------------------------------------------------------------------------------------------------------------------
   const eNumero = (nuemero) => /^[0-9]+$/.teste(numero);
   const cepValido = (cep) => cep.length == 8& eNumero(cep); 
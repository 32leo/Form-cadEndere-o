'user strict' //modo restrito
// este modo faz com que o javaScript operea de formas mais seguras e rigorosa, ajuda a evitar erros comuns de programação
    /*consumo de API - https://viacep.com.br/ */

// função para limpar formulario
// -------------------------------------------------------------------------------------------------------------
    const limparforulario = () =>{
        document.getElementById('cep').value  = '';
        document.getElementById('lagrodouro').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('localidade').value ='';
        document.getElementById('uf').value = "";
    }
// lenth e uma propiedade que verifica a quantidade de careacteres dentro do argumento cep
// -------------------------------------------------------------------------------------------------------------------------------------------
   const eNumero = (nuemero) => /^[0-9]+$/.teste(numero);
   const cepValido = (cep) => cep.length == 8& eNumero(cep);

//    função para prencher fromularios com os campos da API

  const preencherFormulario = (endereco) =>{
      document.getElementById('logradouro').value = endereco.logradouro;
      document.getElementById('bairro').value = endereco.bairro;
      document.getElementById('localidade').value = endereco.localidade;
      document.getElementById('uf').value = endereco.uf;

}
// FUNÇÃO DE CONSUMO  DE API viaCEP
// -----------------------------------------------------------------------------------------------------------------------------------------

const pesquisarCEP = async() =>{
        limparforulario();
        const url = `https://viacep.com.br/ws/${cep.value}/json/`;
        if(cepValido(cep.value)){
            const dados = await fetch(url);
            const addres = await dados.json();
            

            if(addres.hasOwnPropety('erro')){
            alert('CEP não encontrado')
            

            }
            else{
                alert("CEP incorreto")
            }
    }
        else{
            alert('CEP incorreto!')
        }
}
// adicionar escutador pata executar consumo de API da ViaCEP
document.getElementById('cep').addEventListener('focusout', pesquisarCEP);




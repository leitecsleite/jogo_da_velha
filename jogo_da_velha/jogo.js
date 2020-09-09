
 var rodada = 1 ; 
 var matriz_jogo = Array (3);


$(document).ready(function(){
   $('#btn-incia-jogo').click(function(){
     
     if($('#entrada_apelido_jogador_1').val() ==''){
      alert(' Apelido do jogador 1 não foi preenchido');
       return false;

     }

     if($('#entrada_apelido_jogador_2').val() ==''){
        alert(' Apelido do jogador 2 não foi preenchido');
         return false;
  
     }

      // exibir os apelidos
      $('#nome_jogar_1').html($('#entrada_apelido_jogador_1').val()); // $(''#nome).html($('#nome)).val());
      $('#nome_jogar_2').html($('#entrada_apelido_jogador_2').val());
       

      //controle a visualização das divs
      $('#pagina_inicial').hide();
      $('#palco_jogo').show();
    });
   
    // click pra começar a partida do jogo
    $('.jogadas').click(function(){
      var id_campo_clicado = this.id;
      jogada(id_campo_clicado);

    });

    function jogada(id){
      var icone = '';
      var ponto = 0;
     // criação da jogada do jogo
      if (( rodada % 2) == 1){
          ponto = - 1;
          icone = 'url("imagens/marcacao_1.png")';
          
      }else {
          icone = 'url("imagens/marcacao_2.png")';
         ponto = 1;
      }
      
      rodada ++;
     
      $('#' + id).css('background-image', icone);



    }


 });
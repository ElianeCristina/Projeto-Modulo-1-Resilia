function chaves1() {
  
    while(true) {    
      let resposta;
      resposta = prompt(`Escolha a sua resposta:
      1. Nada, ela deu o dinheiro pra mim e vou comprar tudo de sanduiche de presunto.
      2. R$ 10.00.`);
      
      if (resposta == 2) {
        alert("Resposta certa, parabéns! Siga para a próxima fase!");
        location.replace('./FaseDois.html');
        break;
      } else if (resposta == 1) {
        alert("Resposta errada, você perdeu e irá para a semana de recuperação.");
        location.replace("../Finais/gameend.html");
        break;
      }
      alert ("Tá, tá, tá, tá, tá, tá! Responda a pergunta!")
    }
}

function chaves2() {
  
    while(true) {    
      let resposta;
      resposta = prompt(`Escolha a sua resposta:
      1. O sujeito está se escondendo para não pagar o aluguel.
      2. O senhor Barriga.`);
      
      if (resposta == 2) {
        alert("Resposta certa, parabéns! Siga para a próxima fase!");
        location.replace('./FaseTres.html');
        break;
      } else if (resposta == 1) {
        alert("Resposta errada, você perdeu e irá para a semana de recuperação.");
        location.replace("../Finais/gameend.html");
        break;
      }
      alert ("Tá, tá, tá, tá, tá, tá! Responda a pergunta!")
    }
}

function chaves3() {
  
    while(true) {    
      let resposta;
      resposta = prompt(`Escolha a sua resposta:
      1. No sovaco do Quico.
      2. Em 70% da região Nordeste.`);
      
      if (resposta == 2) {
        alert("Parabéns!!");
        location.replace('../Finais/vencedor.html');
        break;
      } else if (resposta == 1) {
        alert("Que pena, você errou");
        location.replace("../Finais/gameover.html");
        break;
      }
      alert ("Tá, tá, tá, tá, tá, tá! Responda a pergunta!")
    }
}

function inicio() {
  let confirmou;
  confirmou = confirm("Quer voltar para a página inicial?");
  
  if(confirmou == true) {
    location.replace("../index.html");
  }
  else {
    location.reload();
  }
}


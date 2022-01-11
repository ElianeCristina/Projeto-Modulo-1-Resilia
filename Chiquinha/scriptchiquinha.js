function chiquinha1() {
  
    while(true) {    
      let resposta;
      resposta = prompt(`Escolha a sua resposta:
        1. Nada, já que ela me deu o dinheiro, eu comprei também um pirulito bem grande.
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

function chiquinha2() {
  
    while(true) {    
      let resposta;
      resposta = prompt(`Escolha a sua resposta:
      1. Meu pai não está, saiu para procurar emprego e ainda não voltou
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

function chiquinha3() {
  
    while(true) {    
      let resposta;
      resposta = prompt(`Escolha a sua resposta:
      1. No pé do Chaves.
      2. Em 70% da região Nordeste.`);
      
      if (resposta == 2) {
        alert("Parabéns!!");
        location.replace('../Finais/vencedor.html');
        break;
      } else if (resposta == 1) {
        alert("Que pena, você errou!");
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


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
  function fotos() {
    let confirmou;
    confirmou = confirm("Quer ver as fotos da viagem?");
    
    if(confirmou == true) {
      location.replace("./fotos.html");
    }
    else {
      location.reload();
    }
  }
function submit() {
  return new Send();
}
class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
    this.Validar();
  }

  Validar() {
    if (this.numero.length === 11 ) {
      return this.Enviar();
    }
    
  }

  Enviar() {
    const select = document.getElementById('select');
    const options = select.options[select.selectedIndex].value

    const numFull = options+this.numero;
    
    const link = `https://api.whatsapp.com/send/?phone=${numFull}`;
    console.log(link)

    return document.getElementById('WppApiLink').setAttribute('href', link);
  }

  // sucesso() {
  //   return document.getElementById('alert_sucess').style.display = '', document.getElementById('alert_sucess').innerHTML = "Tudo certo :)";
  // }

  // erro() {
  //   return document.getElementById('alert_danger').style.display = '', document.getElementById('alert_danger').innerHTML = "O número passado deve ter 11 digitos";
  // }
}

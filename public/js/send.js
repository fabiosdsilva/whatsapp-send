function submit() {
  return new Send();
}
class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
    this.Validar();
  }

  Validar() {
    if (this.numero.length === 13) {
      return this.sucesso(), this.Enviar();
    }
    setTimeout(() => {
      return this.erro();
    },1000)
  }

  Enviar() {
    const link = `https://api.whatsapp.com/send/?phone=${this.numero}`;
    return document.getElementById('WppApiLink').setAttribute("href", link);
  }

  sucesso() {
    return document.getElementById('alert_sucess').style.display = '', document.getElementById('alert_sucess').innerHTML = "Tudo certo :)";
  }

  erro() {
    return document.getElementById('alert_danger').style.display = '', document.getElementById('alert_danger').innerHTML = "O número passado deve ter 11 digitos";
  }
}

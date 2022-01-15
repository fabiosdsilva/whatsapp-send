function submit() {
  return new Send();
}
class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
    this.Validar();
  }

  Validar() {
    if (this.numero.length === 11) {
      return this.sucesso(), this.Enviar();
    }
    return this.erro();
  }

  Enviar() {
    const link = `https://api.whatsapp.com/send/?phone=${this.numero}`;
    return document.getElementById('WppApiLink').setAttribute("href", link);
  }

  sucesso() {
    return document.getElementById('alert_sucess').style.display = '', document.getElementById('alert_sucess').innerHTML = "Tudo certo :)", this.numero.value = "";
  }

  erro() {
    return document.getElementById('alert_danger').style.display = '', document.getElementById('alert_danger').innerHTML = "O número passado deve ter 11 digitos";
  }
}

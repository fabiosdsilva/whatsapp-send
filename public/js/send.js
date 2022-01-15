function submit() {
  return new Send().numero;
}

class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
    this.Validar();
  }

  Validar() {
    if (this.numero.length === 11) {
      return this.sucesso();
    }
    return this.erro();
  }

  Enviar() {
    console.log('faibo');
  }

  sucesso() {
    return document.getElementById('alert_sucess').style.display = '', document.getElementById('alert_sucess').innerHTML = "Tudo certo :)";
  }

  erro() {
    return document.getElementById('alert_danger').style.display = '', document.getElementById('alert_danger').innerHTML = "O número passado deve ter 11 digitos";
  }
}

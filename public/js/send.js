function submit() {
  return new Send().numero;
}

class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
  }

  Validar() {
    if (this.numero.length > 11) {
      throw this.erro();
    }
  }

  sucesso() {

  }

  erro(msg) {

  }
}

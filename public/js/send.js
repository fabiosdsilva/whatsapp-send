function submit() {
  return new Send().numero;
}

class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
  }

  Validar() {
    if (this.numero.length > 11) {
      const msg = 'O número iformado tem mais de 11 digitos.';
      this.erro(msg);
    }
  }

  sucesso() {

  }

  erro(msg) {

  }
}

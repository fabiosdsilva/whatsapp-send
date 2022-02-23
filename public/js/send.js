function submit() {
  return new Send();
}
class Send {
  constructor() {
    this.numero = document.getElementById('input').value;
    this.Validar();
  }

  Validar() {
    const exception = [' ', '-', '(', ')', '.', '+', '_', '*', '#', '@'];
    let num = '';

    for (let i of this.numero) {
      if (!exception.includes(i)) {
        num += i;
      };
    };

    if (num.length == 11) {
      this.numero = num;
      return this.numero, this.Enviar();
    };
  }

  Enviar() {
    const select = document.getElementById('select');
    const options = select.options[select.selectedIndex].value

    const numFull = options+this.numero;
    
    const link = `https://api.whatsapp.com/send/?phone=${numFull}`;
    console.log(link)

    return document.getElementById('WppApiLink').setAttribute('href', link);
  }
}

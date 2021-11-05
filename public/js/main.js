//<script>
        function calcular(tipo, numero) {
            if(tipo === 'acao') {
                if(tipo === 'acao' && numero === 'c'){
                    var limpar = document.getElementById('resultado').value = ''
                }else{
                    var acao = document.getElementById('resultado').value += numero
                }
                
            }else if(tipo === 'numero') {
                var display = document.getElementById('resultado').value += numero
            }
            if(numero === '='){
               console.log(document.getElementById('resultado').value);
            }
        }

   // </script>

   console.log(document.getElementById('resultado').value)
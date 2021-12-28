// //REMOVER O CARACTERE "()"
// //REMOVER OS ESPAÇOS ENTRE OS NÚMEROS

// function clear(num) {
//     //REPLACE remove todo espaço em branco
//     var remove = num.replace(/\s/g, '')

//     //REMOVE TODOS OS CARACTERES ESPECIAIS
//     remove = remove.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

//     console.log(remove);
    
// }


function submit(){
    var number = document.getElementById('input').value
    var counter = number.slice(0,2)
    var ddd = number.slice(2,4)
    var area = number.slice(4,5)
    var phone = number.slice(5,14)
    var link = `https://api.whatsapp.com/send/?phone=${number}&text=&app_absent=0`
    if(number.length === 13){
        document.getElementById('alert').style.display = "";
        document.getElementById('alert').className = "alert alert-success";
        document.getElementById('alert').innerHTML = "Tudo certo :)";
        document.getElementById('msg_send').style.display = "";
        document.getElementById('innernumber').innerHTML = "<b>Número:</b>"+" "+counter+" "+ddd+" "+area+" "+ phone;

        document.getElementById('WppApiLink').setAttribute("href", link)

        document.getElementById('input').value = "";

        

        
    }else if(number.length > 13){
        document.getElementById('alert').style.display = "";
        document.getElementById('alert').innerHTML = "Tem muito números. O número de telefone tem 11 digitos.";
        document.getElementById('alert').className = "alert alert-danger";
        document.getElementById('msg_send').style.display = "none";
    }else{
        document.getElementById('alert').style.display = "";
        document.getElementById('alert').innerHTML = "Falta alguns números. O número de telefone tem 11 digitos.";
        document.getElementById('alert').className = "alert alert-danger";
        document.getElementById('msg_send').style.display = "none";
    }
}

// function submit() {
//     var numero = document.getElementById('input')
//     validar()

//     function enviar() {
//         var link = `https://api.whatsapp.com/send/?phone=${this.number}`
//         document.getElementById('WppApiLink').setAttribute("href", link)
//     }

//     function validar() {
//         limpar()
//         if(Number.parseInt(numero, 10)){
//             if(numero.length == 11){
//                 sucesso()
//                 enviar()
//             }else if(numero.length > 11){
//                 muitosNumeros()
//             }
//             else{
//                 poucosNumeros()
//             }
//         }
//     }

//     function limpar() {
//         // var remove = numero.replace(/\s/g, '') //Isso se chama Redex
//         // remove = remove.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
//         // return numero = remove
//     }

//     function poucosNumeros() {
//         document.getElementById('alert').style.display = "";
//         document.getElementById('alert').innerHTML = "Falta alguns números. O número de telefone tem 11 digitos.";
//         document.getElementById('alert').className = "alert alert-danger";
//         document.getElementById('msg_send').style.display = "none";
//     }

//     function muitosNumeros() {
//         document.getElementById('alert').style.display = "";
//         document.getElementById('alert').innerHTML = "Tem muito números. O número de telefone tem 11 digitos.";
//         document.getElementById('alert').className = "alert alert-danger";
//         document.getElementById('msg_send').style.display = "none";
//     }

//     function sucesso() {
//         document.getElementById('alert').style.display = "";
//         document.getElementById('alert').className = "alert alert-success";
//         document.getElementById('alert').innerHTML = "Tudo certo :)";
//         document.getElementById('msg_send').style.display = "";
//         document.getElementById('input').value = "";
//     }
    
// }

// class Send{
//     constructor(number){
//         this.number = number
//     }

//     enviar(){
//             var link = `https://api.whatsapp.com/send/?phone=${this.number}`
//             document.getElementById('WppApiLink').setAttribute("href", link)
//     }

//     validarNumber(){
//         this.clear()
//        if(Number.parseInt(this.number, 10)){ //Vou converter o this.number em números inteiros. Se n conseguir, entao vou exibir uma msg
//           if(this.number.length == 11){
//                 this.sucesso()
//                 this.enviar()
//           }
//           else if(this.number.length > 11){
//             this.muitosNumeros()
//           }
//           else{
//             this.poucosNumeros()
//           }
//        }
//        else{
//            console.log('nao converteu')
//        }
//     }

//     clear(){
//         /**
//          * Eu quero pegar o número passado e retirar os caracteres () e espacos
//          */
//         // var remove = this.number.replace(/\s/g, '') //Isso se chama Redex
//         // remove = remove.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
//         // return this.number = remove
//     }

//     muitosNumeros(){
//         document.getElementById('alert').style.display = "";
//         document.getElementById('alert').innerHTML = "Tem muito números. O número de telefone tem 11 digitos.";
//         document.getElementById('alert').className = "alert alert-danger";
//         document.getElementById('msg_send').style.display = "none";
//     }

//     poucosNumeros(){
//         document.getElementById('alert').style.display = "";
//         document.getElementById('alert').innerHTML = "Falta alguns números. O número de telefone tem 11 digitos.";
//         document.getElementById('alert').className = "alert alert-danger";
//         document.getElementById('msg_send').style.display = "none";
//     }

//     sucesso(){
//         document.getElementById('alert').style.display = "";
//         document.getElementById('alert').className = "alert alert-success";
//         document.getElementById('alert').innerHTML = "Tudo certo :)";
//         document.getElementById('msg_send').style.display = "";
//         document.getElementById('input').value = "";
//     }

// }



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

        document.getElementById('button-addon2').setAttribute("href", link)

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

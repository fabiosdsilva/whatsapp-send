function submit(){
    let number = document.getElementById("input").value
    return new Send(number)
    
}

class Send {
    constructor(number){
        this.number = number
        this.send()
    }

    send(){
        this.validator()
    }

    validator(){
        this.number = parseInt(this.number, 10)
        return window.alert(this.number)
    }
}
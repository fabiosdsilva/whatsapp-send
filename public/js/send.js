const num = document.getElementById('input').value
const str = toString(num, 8)
const rep = str.replace(/[\u0300-\u036f]/g, "")

console.log(rep);
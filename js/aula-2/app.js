console.log(5=="5");
console.log(5==="5");
console.log('0'==false)
console.log('0'===false);
console.log(''==0)
console.log(''===0)
console.log("uva">"banana")


let nome = "gustavo"

if (nome === "gustavo") {
    console.log("O nome é gustavo")
}
else if (nome === "gabriel") {
    console.log("O nome é gabriel")
}
else {
    console.log("Definitivamente não são gemeos")
}

nome === "gustavo" ? console.log("O nome é gustavo") : console.log("O nome não é gustavo")

if (nome === "gusavo" || nome == null) {
    console.log("as coisas deram certo")
}

if (nome === "gustavo" && nome != null) {
    console.log("as coisas deram certo")
}

switch(nome) {
    case "gustavo":
        console.log("O nome é gustavo")
        break;
    case "gabriel":
        console.log("O nome é gabriel")
        break;
    default:
        console.log("Definitivamente não são gemeos")
        break;
}
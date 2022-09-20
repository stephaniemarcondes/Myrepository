let bateria = prompt("insira o quantidade de bateria do seu celular")

if (bateria > 100 || bateria < 0) { 
    console.log("valor inválido")
}
else if (bateria >= 20 && bateria <= 100) {
    console.log ("não é preciso carregar seu celular")
}
else {
    console.log ("Recarregue seu celular")
}
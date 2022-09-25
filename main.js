addEventListener("DOMContentLoaded",()=>{
    // Punto 2. calcular mayor de tres numeros
    
    // Datos
    let num1= Number(prompt("Ingrese el primer valor: ",43))
    let num2= Number(prompt("Ingrese el segundo valor: ",80))
    let num3= Number(prompt("Ingrese el tercer valor: ",13))
    

    if (num1>num2 && num1>num3){
        console.log(`El numero 1 es mayor`)
    
    }  else if (num2>num1 && num2>num3) {
        console.log(`El numero 2 es mayor`)
        
    } else {
        console.log(`El numero 3 es mayor`)
    } 
})


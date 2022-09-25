addEventListener("DOMContentLoaded",()=>{
    // #determinar si un numero es positivo y menor que 100
    
    // Datos
    let num= Number(prompt("Ingrese el numero: ",68))
    
    if (num >0 && num <=100){
        console.log(`El numero es positivo y menor a 100`)
    
        }  else if (num <0) {
            console.log(`El numero es negativo y menor a 100`)
        }
})


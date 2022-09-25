addEventListener("DOMContentLoaded",()=>{
    // 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    //área triangulo= lado * lado.

    
    // Datos
    let base= Number(prompt("Coloca la base del rectangulo: "))
    let lado= Number(prompt("Coloca el lado del rectangulo: "))
    s=lado*base
    
    //codigo

    if (lado<0){
        console.log(`El numero del lado es negativo`)
    
    }if (base<0){
        console.log(`El numero de la base es negativo`)
    }
    console.log(`El area del rectangulo es: "${s}"`)
        
})


addEventListener("DOMContentLoaded",()=>{
    // 7. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
    //$130.000 el descuento será del 15%, de lo contrario no hay descuento.

    
    // Datos
    let fac= Number(prompt("Valor total de la factura del restaurante: "))
    
    //Si el valor es mayor a 130000

    if (fac>130000){
        alert("¡Felicidades!, obtienes un descuento del 15%")
        des=fac*0.15
        total=fac-des
        console.log(`Valor total de la factura es: "${total}"`)
    }

    //Si el valor es menor a 130000
    if (fac<130000){
        alert("Lo siento, esta vez no tienes descuento.")
        console.log(`Valor total de la factura es: "${fac}"`)
    }
    
})


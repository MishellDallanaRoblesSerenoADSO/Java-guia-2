addEventListener("DOMContentLoaded",()=>{
    // 8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    //la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    //a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
        
    // Datos
    let trb= String(prompt("¿El trabajador es de (p)planta o (a)administrativo?: "))
    
    //Si el trabajador es de planta

    if (trb=="p"){
        ht1=Number(prompt("Horas trabajadas del empeado de planta: "))
        h1=20000*ht1
        console.log(`El pago por horas del trabajador de planta es: "${h1}"`)
    }

    //Si el valor es menor a 130000
    if (trb=="a"){
        ht2=Number(prompt("Horas trabajadas del empeado administrativo: "))
        h2=10000*ht2
        console.log(`El pago por horas del trabajador administrativo es: "${h2}"`)
    }
    
})


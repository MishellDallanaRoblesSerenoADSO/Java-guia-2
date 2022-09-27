addEventListener("DOMContentLoaded",()=>{
    //13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    //de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    //Los descuentos son los siguientes:
    //Tipo A 10% de descuento
    //Tipo B 15% de descuento
    //Tipo C 20% de descuento

    
    
    //Datos
    let helado=Number(prompt("Coloca el valor del helado: ",2500))
    let mem=prompt("A que tipo de membresia pertenece A, B o C: ")
    
    //codigo
    if (mem=="a"){
        console.log(`Felicidades!, recibes un descuento del 10%`)
        a= helado*0.10
        des= helado-a
        console.log(`El descuento fue de: "${a}"`)
        console.log(`El valor total es: ""${des}`)
    } 

    if( mem=="b"){
        console.log(`Felicidades!, recibes un descuento del 15%`)
        b=helado*0.15
        des1=helado-b
        console.log(`El descuento fue de: "${b}"`)
        console.log(`El valor total es: ""${des1}`)
    }
    
    if (mem=="c"){
        console.log(`Felicidades!, recibes un descuento del 20%`)
        c=helado*0.20
        des2=helado-c
        console.log(`El descuento fue de: "${c}"`)
        console.log(`El valor total es: ""${des2}`)
    }
})


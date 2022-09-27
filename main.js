addEventListener("DOMContentLoaded",()=>{
    //10. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
    //Iva, Subtotal y Total de la compra de los artículos.
    
    alert("Coloca el precio de 5 productos")
    
    //Datos
    let p1=Number(prompt("Coloca el precio del producto 1: ",21))
    let p2=Number(prompt("Coloca el precio del producto 2: ",64))
    let p3=Number(prompt("Coloca el precio del producto 3: ",87))
    let p4=Number(prompt("Coloca el precio del producto 4: ",89))
    let p5=Number(prompt("Coloca el precio del producto 5: ",17))
    
    //codigo

    subt=(p1+p2+p3+p4+p5)


    if (subt){
        console.log(`El subtotal de la compra es "${subt}"`)

        iva=subt*0.20
        console.log(`El valor del iva incluido es de: "${iva}"`)
        total=subt+iva
        console.log(`Total a pagar es: "${total}"`) 
    }
    })


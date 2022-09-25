addEventListener("DOMContentLoaded",()=>{
    // 4. Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    //¿Qué figura quiere calcular (Escriba T o C)?
    //Triangulo = base * altura / 2
    //Circulo = PI * radio* radio
    
    // Datos
    let f= String(prompt("¿que figura quiere calcular t o c?: "))
    
    //Triangulo

    if (f=="t"){
        alert("Calcular area de un triangulo")
        base= Number(prompt("Coloca la base del triangulo: "))
        h= Number(prompt("Coloca la altura del triangulo: "))
        area= base*h/2
        console.log(`El area del triangulo es: "${area}"`)
    
    }else if (f=="c"){
        alert("Calcular area de un circulo")
        r=Number(prompt("Coloca el radio del circulo: "))
        area2= (Math.PI)*r*r
        console.log(`El area del circulo es: "${area2}"`)
    }
        
    
})


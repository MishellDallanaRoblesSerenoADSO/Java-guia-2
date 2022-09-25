addEventListener("DOMContentLoaded",()=>{
    // 3. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o
    //si son iguales.
    
    // Datos
    let num1= Number(prompt("Ingrese el primer valor: ",53))
    let num2= Number(prompt("Ingrese el segundo valor: ",53))
    let num3= Number(prompt("Ingrese el tercer valor: ",78))
    
    //Condicion para el numero mayor

    if (num1>num2 && num1>num3){
        console.log(`El numero 1 es mayor`)
    
    }else if (num2>num1 && num2>num3) {
        console.log(`El numero 2 es mayor`)
        
    }else if(num3>num1 && num3>num2) {
        console.log(`El numero 3 es mayor`)
    } 
    
    // Condicion para el numero menor

    if (num1<num2 || num1<num3){
        console.log(`El numero 1 es menor`)
    
    } else if (num2<num1 || num2<num3){
    console.log(`El numero 2 es menor`)

    } else if (num3<num1 || num3<num2){
    console.log(`El numero 2 es menor`)
    }

    //Condicion si el numero es igual

    if (num1==num2){
    console.log(`El numero 1 es igual al numero 2`)
    
    }else if (num1==num3){
        console.log(`El numero 1 es igual al numero 3`)
    
    }else if (num2==num1){
        console.log(`El numero 2 es igual al numero 1`)
    
    }else if (num2==num3){
        console.log(`El numero 2 es igual al numero 3`)
    }       
})


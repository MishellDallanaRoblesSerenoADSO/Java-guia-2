addEventListener("DOMContentLoaded",()=>{
    //12. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
    //caso contrario indicar con un mensaje que la operación no es posible realizarla.

    
    
    //Datos
    let num1=Number(prompt("Coloca el numero 1: ",18))
    let num2=Number(prompt("Coloca el numero 2: ",11))
    
    //codigo
    if (num1 > num2){
        resta=num1 - num2
        console.log(`El resultado de la resta es: "${resta}"`)
    
    }else
    alert("No es posible realizar la resta")
    
})


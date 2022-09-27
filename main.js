addEventListener("DOMContentLoaded",()=>{
    //9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
    //impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    
    let can=Number(prompt("Cuantos numeros desea ingresar?: "))
    parseInt(can) 
    
    for (let a=1; a<=can; a++){
        if (a %2 ==0 && a!=0){
            console.log(`El numero,"${a}", es  par `)
        }else{
            console.log(`El numero "${a}", es impar`)
        }
    }
    
    })


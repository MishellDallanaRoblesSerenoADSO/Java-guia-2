addEventListener("DOMContentLoaded",()=>{
    // 6. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre
    //en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es
    //mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.

    
    // Datos
    let t= Number(prompt("Asigne el valor de la temperatura: "))
    
    //temperatura

    if (t>100){
        alert("¡ALARMA! ☠ (.❛̀ ● ́❛.)")
        
    }else if (t<=100){
        alert("Normal (.❛̀ ᴗ ́❛.)")
    }

    //Presion

    let p= Number(prompt("Asigne el valor de la presion: "))
    if (p>200){
        alert("¡ALARMA! ☠ (.❛̀ ● ́❛.)")
        
    }else if (p<=200){
        alert("Normal (.❛̀ ᴗ ́❛.)")
    }
})


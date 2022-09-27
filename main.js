addEventListener("DOMContentLoaded",()=>{
    //11. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
    //de computación.
    
    
    //Datos
    let nom=prompt(" Coloque su nombre y apellido: ")
    let edad=Number(prompt("Coloque su edad: ",17))
    let n1=Number(prompt("Coloca la nota 1: ",8))
    let n2=Number(prompt("Coloca la nota 2: ",6))
    let ne=Number(prompt("Coloca la nota del examen: ",7))
    let nf=Number(prompt("Coloca la nota final: ",7))
    
    //codigo
    prom=(n1+n2+ne+nf)/4
    console.log(`La nota del estudiante "${nom}", es de "${prom}"`)
    
})


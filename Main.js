/*
    a = ai  
    e = enter
    i = imes
    o = ober
    u = ufat
*/

const Encriptador = () => {
    const aside = document.getElementById("right")
    const text = document.getElementById("text").value

    let textEncriptar = text.split("")
    console.log(textEncriptar)

    let cuenta = 0
    let vocal = text.indexOf("a")

    while ( vocal != -1 ) {
        cuenta++;
        vocal = text.indexOf("a",vocal+1);
        console.log(cuenta , vocal)
    }


    /*for(i=0; i< textEncriptar.length ; i++){
        let vocales = textEncriptar[i].match(/[aeiou]/gi);
        if(textEncriptar[i] == vocales){
            console.log(textEncriptar[i])
        }
    }*/
    
}


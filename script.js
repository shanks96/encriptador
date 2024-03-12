
let flag=0;
function condicionesIniciales(){
    document.getElementById('mensaje').value = "Ingrese el texto a encriptar aquí.";
    
}

function escribiendo(){
    let texto = "";
    document.getElementById('mensaje').value = texto;
    /*
    do {
        console.log("hola");
        texto = document.getElementById('mensaje').value
        document.getElementById('mensaje').value = texto.toLowerCase();
    }while(flag);*/
}

function capturarTexto(){
    flag = 1;
    let texto = document.getElementById('mensaje').value;
    return texto;
}

function escribirH2(mensaje){

    document.getElementById('textoSalida').innerHTML = `<h2 id="msgCodificado">${mensaje}</h2>`;
    document.getElementById('hidden').removeAttribute('hidden');

}

function codificarTexto(){
    let textoCodificado = [];
    let textoCodificado2 = "";
    letra = "";
    let textoACodificar = capturarTexto(    );

    let tamaño = textoACodificar.length;
    console.log(tamaño);
    for (let index = 0; index < textoACodificar.length; index++) {
        letra = textoACodificar[index];
        if(letra == "a"){
            letra = "ai";
        }
        if(letra == "e"){
            letra = "enter";
        }
        if(letra == "i"){
            letra = "imes";
        }
        if(letra == "o"){
            letra = "ober";
        }
        if(letra == "u"){
            letra = "ufat";
        }

        textoCodificado.push(letra);
        textoCodificado2 = textoCodificado2 + letra;
    }
    console.log(textoCodificado);
    escribirH2(textoCodificado2);
    alert("Mensaje Codificado");
    
}

function supuestaCadena(vocal){
    let extension = 0;
    if(vocal == 'a'){
        codificado = 'ai';
        extension = 1;
    }
    if(vocal == 'e'){
        codificado ='enter';
        extension = 4;
    }
    if(vocal == 'i'){
        codificado = 'imes';
        extension =4;
    }
    if(vocal == 'o'){
        codificado = 'ober';
    }
    if(vocal == 'u'){
        codificado = 'ufat';
    }
    return codificado;
}

function decodificar(){
    let textoCodificado = "";
    let cadenaCodificada = "";
    let textoDecodificado = "";
    let codificado = "";
    textoCodificado = capturarTexto();
    for (let index = 0; index < textoCodificado.length; index++){
        cadenaCodificada = "";
        letra = textoCodificado[index];
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra =='o' || letra =='u'){
            //console.log(textoCodificado[index]);
            //Para la a sería el ai
            codificado = supuestaCadena(letra);
            for(var i=0; i < codificado.length; i++){
                cadenaCodificada = cadenaCodificada + textoCodificado[index + i];	
            }
            if (cadenaCodificada == codificado)	{
                index = index + codificado.length - 1;
            }
        }
        textoDecodificado = textoDecodificado + letra;
    }
    escribirH2(textoDecodificado);
    alert("Mensaje decodificado");
}

function copiaraClipboard(){
    let textoCopiado = "";
    
    textoCopiado = document.getElementById('msgCodificado').innerHTML;
    navigator.clipboard.writeText(textoCopiado);
    alert(`Texto ${textoCopiado} copiado`);
}

condicionesIniciales();

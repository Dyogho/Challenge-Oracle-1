function encriptar() {
    var textoEntrada = document.getElementById("inputText").value;
    var textoSalida = "";
    
    for (var i = 0; i < textoEntrada.length; i++) {
        var caracter = textoEntrada[i];
        if (caracter == 'e') {
            textoSalida += "enter";
        } else if (caracter == 'i') {
            textoSalida += "imes";
        } else if (caracter == 'a') {
            textoSalida += "ai";
        } else if (caracter == 'o') {
            textoSalida += "ober";
        } else if (caracter == 'u') {
            textoSalida += "ufat";
        } else {
            textoSalida += caracter;
        }
    }
    
    document.getElementById("outputText").innerText = textoSalida;
}

function desencriptar() {
    var textoEntrada = document.getElementById("inputText").value;
    var textoSalida = "";
    var i = 0;
    
    while (i < textoEntrada.length) {
        if (textoEntrada[i] == 'e' && textoEntrada.slice(i, i+5) == "enter") {
            textoSalida += "e";
            i += 5;
        } else if (textoEntrada[i] == 'i' && textoEntrada.slice(i, i+4) == "imes") {
            textoSalida += "i";
            i += 4;
        } else if (textoEntrada[i] == 'a' && textoEntrada.slice(i, i+2) == "ai") {
            textoSalida += "a";
            i += 2;
        } else if (textoEntrada[i] == 'o' && textoEntrada.slice(i, i+4) == "ober") {
            textoSalida += "o";
            i += 4;
        } else if (textoEntrada[i] == 'u' && textoEntrada.slice(i, i+4) == "ufat") {
            textoSalida += "u";
            i += 4;
        } else {
            textoSalida += textoEntrada[i];
            i++;
        }
    }
    
    document.getElementById("outputText").innerText = textoSalida;
}

function copiar() {
    var textoSalida = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(textoSalida).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}

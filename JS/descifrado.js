
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
    var elemento = document.getElementById('cont-archivo');
    elemento.innerHTML = contenido;
}

function dc() {
    var tamanio = (document.getElementById('tamanio')).value;
    var contador;
    var pdefault = '13probandoalguienmeescucha?yaniz';
    let hj = (document.getElementById("cont-archivo")).value;
    const nmbh = (document.getElementById("key")).value;
    if(tamanio == 16 && nmbh.length !=16){

        contador = 16;
        for(var i= 0; i <tamanio; i++){
            nmbh +=  pdefault.charAt((pdefault.length)-contador);
            contador--;
        }

    }else if(tamanio == 24 && nmbh.length !=24){

        contador = 192;
        for(var i= 0; i <tamanio; i++){
            nmbh +=  pdefault.charAt((pdefault.length)-contador);
            contador--;
        }

    }else if(tamanio == 32 && nmbh.length !=32){

        contador = 32;
        for(var i= 0; i <tamanio; i++){
            nmbh +=  pdefault.charAt((pdefault.length)-contador);
            contador--;
        }
    }
    var descifrado = CryptoJS.AES.decrypt(hj, nmbh);
    if (hj == "" || nmbh == "") {
        alert("No se eligió ningún archivo")
    } else {
        document.getElementById("mcifrado").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
    }
    return false;
}
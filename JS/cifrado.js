


function Cifrando(){
    var cadena = (document.getElementById('mensaje')).value; 
var password = (document.getElementById('llave')).value;
var pdefault = '13probandoalguienmeescucha?yaniz';
var tamanio = (document.getElementById('tamanio')).value;
var contador;
var cifrar;

    if(tamanio == 16 && password.length !=16){

        contador = 16;
        for(var i= 0; i <tamanio; i++){
            password +=  pdefault.charAt((pdefault.length)-contador);
            contador--;
        }

    }else if(tamanio == 24 && password.length !=24){

        contador = 192;
        for(var i= 0; i <tamanio; i++){
            password +=  pdefault.charAt((pdefault.length)-contador);
            contador--;
        }

    }else if(tamanio == 32 && password.length !=24){

        contador = 32;
        for(var i= 0; i <tamanio; i++){
            password +=  pdefault.charAt((pdefault.length)-contador);
            contador--;
        }
    }
    
    console.log(password);
       
        cifrar = CryptoJS.AES.encrypt(cadena, password).toString();
        
        document.getElementById("mcifrado").innerHTML = cifrar;

    return false;
}
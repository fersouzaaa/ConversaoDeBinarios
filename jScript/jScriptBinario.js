function somenteNumeros(){
    var sDigitos;
    if (document.getElementById("paraBinario").checked==true){
        sDigitos="0123456789";
    }else{
        sDigitos="01";
    }
    var cTecla= event.key;
    if (sDigitos.indexOf(cTecla)==-1){
        return false;
    }else{
        return true;
    }
}
function somenteNumerosBinarios(){
    var sDigitos="01";
    var cTecla= event.key;
    if (sDigitos.indexOf(cTecla)==-1){
        return false;
    }else{
        return true;
    }
}
function teste (){
    var numeroDigitado = document.getElementById("numeroDigitado").value;
    if (document.getElementById("paraBinario").checked==true){
        this.document.getElementById ("numeroDigitado").onkeyup = function (){paraBinario()};
        if (numeroDigitado==""){
            document.getElementById("Resultado").innerHTML = "Digite um numero para converter";
            document.getElementById("numeroDigitado").setAttribute('placeholder',"Digite um valor decimal");
        }else{
            document.getElementById("numeroDigitado").value='';
            document.getElementById("Resultado").innerHTML = "Digite um numero para converter";
            paraBinario();
        }
    }else if(document.getElementById("paraDecimal").checked==true){
        this.document.getElementById ("numeroDigitado").onkeyup = function (){paraDecimal()};
        if (numeroDigitado==""){
            document.getElementById("Resultado").innerHTML = "Digite um numero para converter";
            document.getElementById("numeroDigitado").setAttribute('placeholder',"Digite um valor binário");
        }else{
            document.getElementById("numeroDigitado").value='';
            document.getElementById("Resultado").innerHTML = "Digite um numero para converter";
            paraDecimal();
        }
    }else{
        document.getElementById("Resultado").innerHTML = "Digite um numero para converter";
    }
}
function paraDecimal (){
    var numeroDigitado = document.getElementById("numeroDigitado").value;
    var numeroDecimal=0;
    var char =[numeroDigitado.charAt(0),numeroDigitado.charAt(1),numeroDigitado.charAt(2), numeroDigitado.charAt(3),
               numeroDigitado.charAt(4), numeroDigitado.charAt(5), numeroDigitado.charAt(6), numeroDigitado.charAt(7)];
    var potencias = [Math.pow(2,7), Math.pow(2,6), Math.pow(2,5), Math.pow(2,4),
                     Math.pow(2,3), Math.pow(2,2), Math.pow(2,1), Math.pow(2,0)]
    for (var i=0; i<=8; i++){
        if (char[i]==1){
            numeroDecimal+= potencias[i];
        }
    }
    if (numeroDigitado.length>=8){
        document.getElementById("Resultado").innerHTML = numeroDecimal ;
    }else if(numeroDigitado.length==0){
        document.getElementById("Resultado").innerHTML = "Digite um numero para converter" ;
    }else{
        document.getElementById("Resultado").innerHTML = "Valor não binário, por favor digite um número com 8 digitos" ;
    }    
}
function paraBinario (){
    var numeroDigitado = document.getElementById("numeroDigitado").value;
    var numeroBinario="";
    for (var i=0; i<8; i++){
        if (numeroDigitado%2==0){ 
            numeroBinario+='0';
            numeroDigitado= Math.floor(numeroDigitado/2);
        }else if (numeroDigitado%2==1){
            numeroBinario+='1';
            numeroDigitado= Math.floor(numeroDigitado/2);
        }
    }
    numBin = (numeroBinario.charAt(7))+ (numeroBinario.charAt(6))+ (numeroBinario.charAt(5))+ (numeroBinario.charAt(4))+
             (numeroBinario.charAt(3))+ (numeroBinario.charAt(2))+ (numeroBinario.charAt(1))+ (numeroBinario.charAt(0));
    
    document.getElementById("Resultado").innerHTML = numBin;
}
window.onload = function (){
    teste();
}



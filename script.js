function insert(num){
    document.getElementById('resultado').innerHTML += num;
    //ou, de um jeito mais extenso
    /*
     var numero = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = numero + num;
    */
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function backOne(){
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0, result.length-1);
}

function calculate(){
    var result = document.getElementById('resultado').innerHTML;
    if(result){
        document.getElementById('resultado').innerHTML = eval(result).toFixed(5);
    }
    else{
        document.getElementById('resultado').innerHTML = "...";
    }
}
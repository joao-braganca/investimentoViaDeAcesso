function calcular(){

    debugger
    function arredondar(numero){
        var numeroString = "";
        var numeroFixado = "";
        numeroString = String(numero.toFixed(4));
        numeroFixado = numeroString.substring(0, numeroString.length-2);

        
        console.log(numeroString.substring(0, numeroString.length-2));
        return numeroFixado;
    }
    var venda = parseFloat(document.getElementById("venda").value);
    var dv = parseFloat(document.getElementById("dv").value);
    var df = parseFloat(document.getElementById("df").value);
    var um = parseFloat(document.getElementById("um").value);
    var dois = parseFloat(document.getElementById("dois").value);
    var tres = parseFloat(document.getElementById("tres").value);
    var quatro = parseFloat(document.getElementById("quatro").value);
    var cinco = parseFloat(document.getElementById("cinco").value);

    
    var venda_fev = venda*(1+((um/100)));
    var venda_mar = arredondar(venda_fev)*(1+((dois/100)));
    var venda_abr = arredondar(venda_mar)*(1+((tres/100)));
    var venda_mai = arredondar(venda_abr)*(1+((quatro/100)));
    var venda_jun = arredondar(venda_mai)*(1+((cinco/100)));


    document.getElementById("venda_fev").innerHTML=venda_fev;
    document.getElementById("venda_mar").innerHTML=venda_mar;
    document.getElementById("venda_abr").innerHTML=venda_abr;
    document.getElementById("venda_mai").innerHTML=venda_mai;
    document.getElementById("venda_jun").innerHTML=venda_jun;


}
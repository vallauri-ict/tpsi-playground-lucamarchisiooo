"use strict"
let parole=["AUSTRIA", "BELGIO" , "BULGARIA", "CIPRO", "CROAZIA", "DANIMARCA",
    "ESTONIA", "FINLANDIA", "FRANCIA", "GERMANIA", "GRECIA", "IRLANDA", "ITALIA",
    "LETTONIA", "LITUANIA", "LUSSEMBURGO", "MALTA", "PAESIBASSI", "POLONIA",
    "PORTOGALLO", "REPUBBLICACECA", "ROMANIA", "SLOVACCHIA", "SLOVENIA", "SPAGNA",
    "SVEZIA", "UNGHERIA"];
let parola='';
let _chkLett, _txtLett, _lettera;
function esegui() {
    _chkLett=document.getElementsByName("chkLett");
    _txtLett=document.getElementsByName("txtLett");

}

function avvia() {
    parola=parole[generaNumero(0,26)];
    for (let i=0; i<parola.length;i++){
        _txtLett[i].value="*";
    }

}
function inviaLettera() {
    _lettera=document.getElementById("lettera");
    for (let i=0;i<parola.length;i++){
        if (_lettera==parola[i]){
            _txtLett[i].value=_lettera;
            _chkLett[i].checked=true;
        }else{
            alert("Lettera non trovata");
        }
    }

}
function  generaNumero(min, max) {
    return Math.floor((max-min+1)*Math.random()) + min;
}
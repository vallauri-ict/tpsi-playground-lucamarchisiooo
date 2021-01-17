"use strict"
let naz = ["AU" , "BR" , "CA" , "CH" , "DE" , "DK" , "ES" , "FI" , "FR" , "GB" , "IE" , "IR" , "NO" , "NL" , "NZ" , "TR" , "US"];
window.onload = function () {
    let _icon = document.getElementById("icon");
    var slider = document.getElementById("num");
    var output = document.getElementById("valore");
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerText = this.value;
    }
    let _divChk = document.getElementById("divChk");
    for (let i = 0; i<naz.length ; i++){
        _divChk.innerHTML += naz[i] +"<input class=\"nation\" id=" + naz[i] + " type=\"checkbox\" checked=\"checked\">"+"<span class=\"checkmark\"></span>\n"
    }
}

function genUsers(){
    let num = document.getElementById("num").value;
    let param = "?results=" + num;
    let gender = document.getElementById("gender").value;
    param += "&gender=" + gender;
    var nation =  [document.getElementsByClassName("nation").length];
    for (let i = 0; i<nation.length; i++){

    }
    param += "&nat=" ;
    var url = "https://randomuser.me/api/" + param;
    $.ajax({
        url: url,
        success: function(data) {
            nation = data[1];
            console.log(_name);
        }
    });
}

"use strict"
window.onload = function () {
    let _icon = document.getElementById("icon");
    var slider = document.getElementById("num");
    var output = document.getElementById("valore");
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerText = this.value;
    }
    let _divChk = document.getElementById("divChk");
    let naz = ["AU" , "BR" , "CA" , "CH" , "DE" , "DK" , "ES" , "FI" , "FR" , "GB" , "IE" , "IR" , "NO" , "NL" , "NZ" , "TR" , "US"];
    for (let i = 0; i<naz.length ; i++){
        _divChk.innerHTML += naz[i] +"<input type=\"checkbox\" checked=\"checked\">"+"<span class=\"checkmark\"></span>\n"
    }
}

function genUsers(){
    let num = document.getElementById("num").value;
    let param = "?results=" + num;
    let url = "https://randomuser.me/api/" + param;
    let _name = document.getElementById("user_value").value;
    let _user
    $.ajax({
        url: url,
        success: function(data) {
            console.log(data);
        }
    });
}

"use strict"
var user = [];
let _data;
let num;
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
        _divChk.innerHTML += naz[i] +"<input class=\"nation\" id=" + naz[i] + " type=\"checkbox\" checked=\"checked\" value=\"true\" onclick=\"changeState(value, id)\">"+"<span class=\"checkmark\"></span>\n"
    }
}
function changeState(valore, nazione){
    let n = document.getElementById(""+nazione);

    if (n.value === "true")
        n.setAttribute("value", false);
    else
        n.setAttribute("value", true);
}

function nazioniSelezionate(){
    let nNaz = "";
    for (let i = 0; i<naz.length; i++){
        let n = document.getElementById(""+naz[i]).value;
        if (n === "true"){
            nNaz += naz[i] + ",";
        }

    }
    return nNaz;
}
function genUsers(){
    num = document.getElementById("num").value;
    let param = "?results=" + num;
    let gender = document.getElementById("gender").value;
    if (gender !== "null")
        param += "&gender=" + gender;
    let nNation = nazioniSelezionate();
    if (nNation === "")
        alert("Selezonare almeno una nazione!");
    else
        param += "&nat=" + nNation;

    var url = "https://randomuser.me/api/" + param;
    $.ajax({
        url: url,
        success: function(data) {
            let nome = data.results[0].name.first;
            let cognome = data.results[0].name.last;
            user[0] = data;
            let path = data.results[0].picture.large;
            let image = document.getElementById("user_photo");
            image.setAttribute("src", path);
            let val = document.getElementById("user_value");
            val.innerText = nome +" "+ cognome;

            console.log(data);
        }
    });

}
function changeValue(id, i){
    if (id === "icon1"){
        let nome = user[0].results[i].name.first;
        let cognome = user[0].results[i].name.last;
        let titolo = document.getElementById("user_value");
        titolo.innerText = " "+nome +" "+ cognome;
    }else if (id === "icon2"){
        let email = user[0].results[i].email;
        let titolo = document.getElementById("user_title");
        titolo.innerText = "My email address is:";
        let val = document.getElementById("user_value");
        val.innerText = email;
    }else if (id === "icon3"){
        let bday = user[0].results[i].dob.date;
        let realbday = [];
        realbday = bday.split('T');
        let b = realbday[0];
        let titolo = document.getElementById("user_title");
        titolo.innerText = "My birthday is:";
        let val = document.getElementById("user_value");
        val.innerText = b;
    }else if (id === "icon4"){
        let country = user[0].results[i].location.country;
        let city = user[0].results[i].location.city;
        let num = user[0].results[i].location.street.number;
        let via = user[0].results[i].location.street.name;
        let titolo = document.getElementById("user_title");
        titolo.innerText = "My address is:";
        let val = document.getElementById("user_value");
        val.innerText = via+","+num+" "+city+" "+country;
    }else if (id === "icon5"){
        let phone = user[0].results[i].cell;
        let titolo = document.getElementById("user_title");
        titolo.innerText = "My phone number is:";
        let val = document.getElementById("user_value");
        val.innerText = phone;
    }else {
        let pw = user[0].results[i].login.password;
        let titolo = document.getElementById("user_title");
        titolo.innerText = "My password is:";
        let val = document.getElementById("user_value");
        val.innerText = pw;
    }


}
let count = 0;
let v;
function changeCard(index){
    if (index === 1){
        count++;
        for (let i = 1; i < 7; i++){
            v = document.getElementById("icon"+i);
            v.setAttribute("name", count.toString());
        }
        let nome = user[0].results[count].name.first;
        let cognome = user[0].results[count].name.last;
        let titolo = document.getElementById("user_value");
        titolo.innerText = " "+nome +" "+ cognome;

    }else {
        count--;
        for (let i = 1; i < 7; i++){
            v = document.getElementById("icon"+i);
            v.setAttribute("value", count.toString());
        }
        let nome = user[0].results[count].name.first;
        let cognome = user[0].results[count].name.last;
        let titolo = document.getElementById("user_value");
        titolo.innerText = " "+nome +" "+ cognome;
        let path = user[0].results[0].picture.large;
        let image = document.getElementById("user_photo");
        image.setAttribute("src", path);

    }
}






function inicio(){
var momentoactual = new Date();
var hour = momentoactual.getHours();
var minutes = momentoactual.getMinutes();
console.log("Son las " + hour + " horas y " + minutes + " minutos");


if(hour >= 6 || hour <= 12 ){
    document.getElementById('page').style.backgroundColor = "#c4cde5";
    document.getElementById('header').style.backgroundColor = "#878e98";
}

if(hour >= 13 || hour <= 19 ){
    document.getElementById('page').style.backgroundColor = "#5ed2ff";
    document.getElementById('header').style.backgroundColor = "#21a6ce";
}

if(hour >= 20 || hour <= 5 ){
    document.getElementById('page').style.backgroundColor = "#3d3d40";
    document.getElementById('header').style.backgroundColor = "#0b0b0b";
    document.getElementById('page').style.color = "white";
}

}
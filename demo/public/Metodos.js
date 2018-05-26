window.alert("Funciona");

var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var heading = document.getElementById("heading");
var Mensaje = mainText.value;

var headingRef = firebase.database().ref().child("heading");

headingRef.on('value', function(datasnapshot){
    heading.innerText= datasnapshot.val();
})

function submitClick()
{
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("Mensajes").set("Valor");
    firebaseRef.Push().set(Mensaje);
}
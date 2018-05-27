//window.alert("Funciona");

var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var heading = document.getElementById("heading");
var Mensaje = mainText.value;

var headingRef = firebase.database().ref().child("heading");

headingRef.on('value', function(datasnapshot){
    heading.innerText= datasnapshot.val();
})

/*function submitClick(){
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("Mensajes").set("Valor");
    firebaseRef.Push().set(Mensaje);
}*/



function submitClick() {
    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var ref= firebase.database().ref().child("Mensajes");
            
            ref.push().set({
               Usuario: user.uid,
               Mensaje: messageText 
            });
        }else{
            window.alert("Error en el registro");
        }
    });
    window.alert("Su mensaje no pudo ser enviado debido a que usted es demasiado HOMOSEXUAL");
    messageText.textContent= "";
}

/*var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  
}
  */

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        window.alert("Bienvenido a la Verga de Jazz"+user.displayName+"El Traga Semen");
    } else{
        window.alert("No esta log in");
    }
})


var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var heading = document.getElementById("heading");
var IDU = document.getElementById("IDUser");
var Mensaje = mainText.value;

//para perfil
/*var headingRef = firebase.database().ref().child("Usuarios");



headingRef.on('value', function (datasnapshot) {
    //heading.innerText = datasnapshot.val();

        var id = snap.child("UID").val();
        IDU.textContent= id;

    
})*/
//
//escribir mensajes y guardarlos en la base de datos
var acc = document.getElementsByName("Tipomensaje");

function submitClick() {
    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var userRef = firebase.database().ref().child("Usuarios").child(user.uid);

            if(acc[0].checked){
                var ref = firebase.database().ref().child("Mensajes Privados");
                userRef.child("Mensajes Privados").once("value").then(function(snapshot){
                    var contenido= snapshot.val();

                    if(contenido==null){
                        contenido=0;
                    }
                    userRef.child("Mensajes Privados").set(contenido+1);
                    ref.push().set({
                        Usuario: user.displayName,
                        Mensaje: messageText
                    });

                });
            }else if(acc[1].checked){
                var ref = firebase.database().ref().child("Mensajes Publicos");
                userRef.child("Mensajes Publicos").once("value").then(function(snapshot){
                    var contenido= snapshot.val();
                    if(contenido==null){
                        contenido=0;
                    }
                    userRef.child("Mensajes Publicos").set(contenido+1);
                    ref.push().set({
                        Usuario: user.displayName,
                        Mensaje: messageText
                    });

                });
            }
            window.alert("Su mensaje fue enviado con exito");
                
        } else {
            window.alert("Error en el registro");
        }

        
    });
    //messageText.innerText= "";
    $('#mainText').val('');
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

//autentificacion INSTANCIA usuario y confirmacion de conexion
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.alert("Bienvenido al muro publico " + user.displayName + ", aqui podra ver mensajes de todas las personas del mundo");
    } else {
        window.alert("No esta log in");
        href= "index.html";
    }
})

//leer de la base de datos y ponerlos en el panel muro
$(document).ready(function () {

    var messageRef = firebase.database().ref().child("Mensajes Publicos");

    messageRef.on("child_added", snap => {
        var id = snap.child("Usuario").val();
        var message = snap.child("Mensaje").val();
        var string = "<div style='background-color: rgba(148, 105, 168, 0.788)'; class='demo-card-wide mdl-card mdl-shadow--2dp'>"
            + "<div class='mdl-card__title'>"
            + "<h2 style='color: rgba(250, 255, 255, 0.89)'; class='mdl-card__title-text'>"
            + message + "</h2></div><div style='color: rgba(250, 255, 255, 0.89)'; class='mdl-card__title-text'>"
            + id + "</div></div><p1 style='color: rgba(230, 131, 66, 0.788)';>.</p1>"
        $("#Muro").append(string

        );
    });
});
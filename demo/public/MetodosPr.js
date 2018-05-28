var user = firebase.auth().currentUser;
var newUser = true;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.alert("Bienvenido su Muro de Mensajes Privados " + user.displayName + ", Estos mensajes son vistos solo por usted");
        
        $(document).ready(function () {

            var messageRef = firebase.database().ref().child("Mensajes Privados");
        
            messageRef.on("child_added", snap => {
                var id = snap.child("Usuario").val();
                var message = snap.child("Mensaje").val();
                var string = "<div style='background-color: rgba(148, 105, 168, 0.788)'; class='demo-card-wide mdl-card mdl-shadow--2dp'>"
                    + "<div class='mdl-card__title'>"
                    + "<h2 style='color: rgba(250, 255, 255, 0.89)'; class='mdl-card__title-text'>"
                    + message + "</h2></div><div style='color: rgba(250, 255, 255, 0.89)'; class='mdl-card__title-text'>"
                    + id + "</div></div><p1 style='color: rgba(230, 131, 66, 0.788)';>.</p1>"
                $("#MuroPrivado").append(string
        
                );
            });
        });
        

    } else {
        window.alert("No esta Registrado");
        href="index.html";
    }
})

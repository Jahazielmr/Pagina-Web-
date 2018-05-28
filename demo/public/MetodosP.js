var user = firebase.auth().currentUser;
var newUser = true;
var ref = firebase.database().ref();
var NAME = document.getElementById("NombrePerfilP");
var ID= document.getElementById("IDUser");
var namelow= document.getElementById("nameLow");
var email= document.getElementById("emailP");
var phone= document.getElementById("Cell");
var Url= document.getElementById("urlP");
var public= document.getElementById("PublicM");
var private= document.getElementById("PrivateM");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.alert("Bienvenido su Perfil " + user.displayName + ", aqui podra ver su informacion personal");

        if (newUser) {
            var ima= document.getElementById("profile-image1");
            ima.src = user.photoURL
            NAME.innerText= user.displayName.toUpperCase();
            //NAME.innerText = ref.child("Usuarios").child(user.uid).child("Nombre").value;
            ID.innerText= user.uid;
            namelow.innerText= user.displayName.toUpperCase();
            email.innerHTML=user.email;
            Url.innerText = user.photoURL;
            
            var userRef= firebase.database().ref().child("Usuarios").child(user.uid);
            userRef.child("Mensajes Privados").once("value").then(function(snapshot){
                private.innerText=snapshot.val();
            });

            userRef.child("Mensajes Publicos").once("value").then(function(snapshot){
                public.innerText=snapshot.val();
            });

        } else {
            
        }

    } else {
        window.alert("No esta Registrado");
        href="index.html";
    }
});



var userName = localStorage.getItem('User Name');
document.getElementById('name').innerHTML = userName
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCpKaUx-WMqFgyPKlRQpXF-vvH67nP3agQ",
    authDomain: "lets-chat-web-app-7690a.firebaseapp.com",
    projectId: "lets-chat-web-app-7690a",
    storageBucket: "lets-chat-web-app-7690a.appspot.com",
    messagingSenderId: "452628442228",
    appId: "1:452628442228:web:6582213579d1db0686f521",
    measurementId: "G-CZZPJMEZGF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
    window.location.replace('login.html');
    localStorage.removeItem('User Name');
}

function addRoom() {
    roomname = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "Room Name"
    });
    row = "<div style='cursor:pointer;' class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById('output').innerHTML += row;
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Names:\n" + Room_names);
            row = "<div class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById('output').innerHTML += row;
            //End code
        });
    });
}
getData();
function addUser() {
    user_name = document.getElementById("username").value;
    localStorage.setItem("User Name", user_name);
    window.location.replace("room.html");
}
function navigate(){
    var name1 = document.getElementById("user1Name").value
    var name2 = document.getElementById("user2Name").value

    localStorage.setItem("name1", name1)
    localStorage.setItem("name2", name2)

    window.location = "game.html"
}
var name1 = localStorage.getItem("name1")
var name2 = localStorage.getItem("name2")

var player1Score = 0
var player2Score = 0

var questionTurn = "player1"
var answerTurn = "player2"

var actual_answer

document.getElementById("player1Name").innerHTML = name1 + " : "
document.getElementById("player2Name").innerHTML = name2 + " : "
document.getElementById("player1Score").innerHTML = player1Score
document.getElementById("player2Score").innerHTML = player2Score

document.getElementById("playerQuestion").innerHTML="Question - " + name1
document.getElementById("playerAnswer").innerHTML="Answer - " + name2

function applynumber()
{
    number1 = document.getElementById("num1").value
    number2 = document.getElementById("num2").value

    actual_answer = parseInt(number1) * parseInt(number2)

    var question_number = "<h4>" + number1 + " X " + number2 + "</h4>"
    var input_box = "<br>Answer : <input type = 'text' id = 'input'>"
    var check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    var row = question_number + input_box + check_button

    document.getElementById("output").innerHTML=row
    document.getElementById("num1").value=""
    document.getElementById("num2").value=""
}

function check()
{
    var get_answer = document.getElementById("input").value

    if(get_answer == actual_answer){

        if(answerTurn == "player1"){
            player1Score = player1Score + 1
            document.getElementById("player1Score").innerHTML = player1Score
        }

        else if(answerTurn == "player2"){
            player2Score = player2Score + 1
            document.getElementById("player2Score").innerHTML = player2Score
        }
    }

    document.getElementById("output").innerHTML = ""

    if(questionTurn == "player1"){
        questionTurn = "player2"
        answerTurn = "player1"
        document.getElementById("playerQuestion").innerHTML="Question - " + name2
        document.getElementById("playerAnswer").innerHTML="Answer - " + name1
    }

    else if(questionTurn == "player2"){
        questionTurn = "player1"
        answerTurn = "player2"
        document.getElementById("playerQuestion").innerHTML="Question - " + name1
        document.getElementById("playerAnswer").innerHTML="Answer - " + name2
    }
}








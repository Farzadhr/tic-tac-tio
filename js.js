var teamx;
var finish = false;
$(document).ready(function() {
    teamx = true;
    $(".turn").text("Team X is turn");

});

$(".item").click(function() {
    if (finish == false) {
        if ($(this).text() == "") {
            if (teamx == true) {
                $(this).text("X");
                teamx = false;
                $(".turn").text("Team O is turn");
            } else {
                $(this).text("O");
                teamx = true;
                $(".turn").text("Team X is turn");
            }
        }
        check("1", "4", "7")
        check("2", "5", "8")
        check("3", "6", "9")
        check("1", "2", "3")
        check("4", "5", "6")
        check("7", "8", "9")
        check("1", "5", "9")
        check("3", "5", "7")
        checkDraw()
    }

});


function check(one, two, three) {
    var bxone = false;
    var bxtwo = false;
    var bxthree = false;
    var byone = false;
    var bytwo = false;
    var bythree = false;
    if ($("#" + one).text() != "") {
        if ($("#" + one).text() == "X") {
            bxone = true;
        }
        if ($("#" + one).text() == "O") {
            byone = true;
        }
    }
    if ($("#" + two).text() != "") {
        if ($("#" + two).text() == "X") {
            bxtwo = true;
        }
        if ($("#" + two).text() == "O") {
            bytwo = true;
        }
    }
    if ($("#" + three).text() != "") {
        if ($("#" + three).text() == "X") {
            bxthree = true;
        }
        if ($("#" + three).text() == "O") {
            bythree = true;
        }
    }

    if (bxone == true && bxtwo == true && bxthree == true) {
        $(".win").text("X win");
        $("#" + one).css("background-color", "green");
        $("#" + two).css("background-color", "green");
        $("#" + three).css("background-color", "green");
        $(".turn").text("Finish");
        finish = true;
    }
    if (byone == true && bytwo == true && bythree == true) {
        $(".win").text("O win");
        $("#" + one).css("background-color", "green");
        $("#" + two).css("background-color", "green");
        $("#" + three).css("background-color", "green");
        $(".turn").text("Finish");
        finish = true;
    }
}

function checkDraw() {
    var all = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let draw = false;
    for (var i = 0; i < all.length; i++) {
        if ($("#" + all[i]).text() != "") {
            draw = true;
        } else {
            draw = false;
            break;
        }
    }


    if (draw == true) {
        if (finish == false) {
            $(".win").text("Game is draw");
            $(".turn").text("Finish");
            finish = true;
        }

    }
}
$(".reset").click(function() {
    window.location.reload();

});
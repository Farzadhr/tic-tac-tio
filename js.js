var teamx;
var finish = false;
let checked = true;


$(".xwin").hide();
$(".owin").hide();
$(document).ready(function() {
    teamx = true;
    $(".turn").text("Team X is turn");

});

$(".item").click(function() {
    if (finish == false) {
        var attr = $(this).attr("id");
        console.log(attr);
        if ($(".text" + attr).text() == "") {
            if (teamx == true) {

                $(".text" + attr).text("X");
                $(".text" + attr).css("height", "100%");
                teamx = false;
                $(".turn").text("Team O is turn");
            } else {
                $(".text" + attr).text("O");
                $(".text" + attr).css("height", "100%");
                teamx = true;
                $(".turn").text("Team X is turn");
            }
        }
        check("1", "2", "3")
        check("4", "5", "6")
        check("7", "8", "9")
        check("1", "4", "7")
        check("2", "5", "8")
        check("3", "6", "9")
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
    if ($(".text" + one).text() != "") {
        if ($(".text" + one).text() == "X") {
            bxone = true;
        }
        if ($(".text" + one).text() == "O") {
            byone = true;
        }
    }
    if ($(".text" + two).text() != "") {
        if ($(".text" + two).text() == "X") {
            bxtwo = true;
        }
        if ($(".text" + two).text() == "O") {
            bytwo = true;
        }
    }
    if ($(".text" + three).text() != "") {
        if ($(".text" + three).text() == "X") {
            bxthree = true;
        }
        if ($(".text" + three).text() == "O") {
            bythree = true;
        }
    }
    console.log(checked);
    if (checked == true) {
        if (bxone == true && bxtwo == true && bxthree == true) {
            $(".win").text("X win");
            $("#" + one).css("background-color", "green");
            $("#" + two).css("background-color", "green");
            $("#" + three).css("background-color", "green");
            $(".turn").text("Finish");
            setTimeout(() => {
                $(".tictactoe").slideUp(500);
            }, 2000);
            setTimeout(() => {
                $(".xwin").slideDown(500);
            }, 2700);
            finish = true;
            checked = false;
        }
        if (byone == true && bytwo == true && bythree == true) {
            $(".win").text("O win");
            $("#" + one).css("background-color", "green");
            $("#" + two).css("background-color", "green");
            $("#" + three).css("background-color", "green");
            $(".turn").text("Finish");
            setTimeout(() => {
                $(".tictactoe").slideUp(500);
            }, 2000);
            setTimeout(() => {
                $(".owin").slideDown(500);
            }, 2700);
            finish = true;
            checked = false;
        }
    }

}

function checkDraw() {
    var all = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let draw = false;
    for (var i = 0; i < all.length; i++) {
        if ($(".text" + all[i]).text() != "") {
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
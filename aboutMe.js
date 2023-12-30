
$(document).ready(function(){

var toggled = false;
    $(".menu").click(function(){
        if(toggled) {
            $(".green").css("background-color", "#43F560");
            $(".num1").css("z-index", "1");
        }
        else{
            $(".num1").css("z-index", "-1");
            $(".green").css("background-color", "black");
        }
        toggled = !toggled;
    });
});
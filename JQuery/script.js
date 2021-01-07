$(document).ready(function() {
    console.log("hi");
    // $("h1").hide();
    //$(".ClassPar1").hide();

    $("button").click(function() {
        $("h1").hide("show");
    });
    $(".valider").click(function() {
        $("h1").hide("5000");
    });
    $(".valider").click(function() {
        $("#IdPar2").toggle();
    });
    $(".lancerAnimation").click(function() {
        $("#redDiv").animate({
            left: '600px',
            opacity: 0.2,
            width: '+=150px',
            height: '+=200px'
        }, 5000, function() {
            $("#redDiv").hide();
        });
    });
    $("#stopAnimation").click(function() {
        $("#redDiv").stop();
    });
    //removeClass
    $(".send").click(function() {
        //$("#p3").parent().css("border", "1 solid blue");
        var myvar = $("#name").val();
        $("#p1").addClass("redBold");
        //filter(arg) : filtrer les element par rapport à arg
        //first(), last()  : le premier et dernier element 
        //children(), siblings() : les element avec le meme parent directe , next() element suivant
        $("#p2").parent().css("color", "blue");
        console.log(myvar);
    });

    /* les differents events  */
    // $("button").on("click", function() {
    //     $(".ClassPar").hide();
    // });
    // $("button").mouseleave(function() {
    //     $("h1").show();
    // });
    //function hover
    // $(".ClassPar").on({
    //     mouseleave: function() {
    //         $("h1").show();
    //     },
    //     click: function() {
    //         $("h1").hide();
    //     }
    // })


})
alert("Connected");

$(".add").on("click", function() {
    $(".todo-box input").toggleClass("d-none");
});

function addList(s) {
    if (s != "") {
        console.log("adding " + s);
        var s1 = '<li class="align-contents-center d-flex"><div class="bg-danger delt "><i class="far fa-trash-alt text-light"></i></div><div class="content">';
        s1 = s1 + s;
        s1 = s1 + "</div></li>";
        $(".list").append(s1);
    }

}

$(".todo-box input ").on("keypress", function(event) {
    if (event.which == 13) {
        var s = $(this).val();
        addList(s);
        $(this).val("");
        $(this).addClass("d-none");
    }
})

$(".list ").on("mouseover", "li ", function() {
    $(this).children(".delt").css("width", "15%");
    $(this).children(".delt").css("visibility", "visible");
    // console.log($(this).children("delt"));
});

$(".list ").on("mouseout", "li", function() {
    $(this).children(".delt").css("width", "0%");
    $(this).children(".delt").css("visibility", "hidden");
    // console.log($(this).children("delt"));
});

$(".list").on("click", ".content", function() {
    $(this).toggleClass("done");
})

$(".list").on("click", ".delt", function() {
    var z = $(this).parent();
    z.fadeOut(300, function() {
        z.remove();
    });
})

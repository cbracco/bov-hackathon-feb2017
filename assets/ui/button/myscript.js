$(document).ready(function() {
    $(".btns-markup").click(function() {
        if ($( this ).hasClass("rectangle")) {
            $("#basicCode").toggleClass("hide");
        } else if ($( this ).hasClass("round")) {
            $("#roundedCode").toggleClass("hide");
        }
            })
})

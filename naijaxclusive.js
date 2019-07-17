let today   = new Date();
let date = today.toDateString() + " " + today.toLocaleTimeString()
document.getElementById("date").innerHTML = date;

function redirect() {
    window.open("http://www.toxicwap.com",  '_blank');
}
function nextpage() {
    window.history.forward()
}
function previouspage() {
    window.history.back()
}
let sidebarLeftToggler = $(function() {
    $("#sidebarLeftToggler").click(function() {
        $("#sidebarRight").hide("fast")
        $("#sidebarLeft").toggle("fast")
    });
});
$(function() {
    $("#sidebarRightToggler").click(function() {
        $("#sidebarRight").toggle("fast")
        $("#sidebarLeft").hide("fast")
    });
});
$(function() {
    $(".closebtnRight").click(function() {
        $("#sidebarRight").hide("fast")
    })
})
$(function() {
    $(".closebtnLeft").click(function() {
        $("#sidebarLeft").hide("fast")
    })
})
sidebarLeftToggler();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
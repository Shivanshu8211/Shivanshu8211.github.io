
    document.getElementById("transition-button").addEventListener("click", function () {
        // Hide the portfolio page
        document.getElementById("portfolio-page").style.display = "none";

    // Show the new page with animation
    var newPage = document.getElementById("new-page");
    newPage.style.display = "block";
    newPage.className += "fade-in";
});

    var header = document.querySelector('header');
    var button = document.getElementById('transition-button');
    var main = document.querySelector('main');

    // Scroll event to show/hide the header
    window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

    // Delay showing the button and main content
    setTimeout(function () {
        main.classList.add('visible');
    button.classList.add('visible');
}, 100);

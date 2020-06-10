'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('education', 'education.html'),
            new Route('professional-positions', 'professional-positions.html'),
            new Route('professional-projects', 'professional-projects.html'),
            new Route('professional-tools', 'professional-tools.html'),
        ]);
    }
    init();
}());

// TO DO --for animation of images
// function home()
// {
//     console.log("Hello home.js");
// }

// function displayElement(element)
// {
//     element.removeAttribute("class");
//     element.setAttribute("class", "d-block");
// }

// function hideElement(element)
// {
//     element.removeAttribute("class");
//     element.setAttribute("class", "d-none");
// }
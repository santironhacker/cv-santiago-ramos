'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('education', 'education.html'),
            new Route('positions', 'positions.html'),
            new Route('projects', 'projects.html'),
            new Route('tools', 'tools.html'),
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
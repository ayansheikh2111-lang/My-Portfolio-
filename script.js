// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});
// =========================================
// EXPERIMENTAL PROJECT CAROUSEL
// =========================================

const experimentalProjects = [

    {
        number: "01 / 03",

        image: "assets/veyra-preview.jpg",

        category:
            "B2B SAAS · UI/UX · CRM",

        title:
            "Veyra",

        description:
            "A professional B2B SaaS CRM experience designed to manage leads, contacts, companies, and sales opportunities.",

        link:
            "projects/veyra/index.html"
    },


    {
        number: "02 / 03",

        image: "assets/nova-preview.jpg",

        category:
            "WEB DESIGN · DEVELOPMENT",

        title:
            "Nova",

        description:
            "A responsive and interactive business website built to demonstrate modern frontend development and digital product design.",

        link:
            "projects/nova/index.html"
    },


    {
        number: "03 / 03",

        image: "assets/calculator-preview.jpg",

        category:
            "JAVASCRIPT · FRONTEND",

        title:
            "Calculator",

        description:
            "A functional calculator application built with HTML, CSS, and JavaScript with a focus on clean interaction and usability.",

        link:
            "projects/calculator/index.html"
    }

];


let experimentalCurrentProject = 0;


const experimentalImage =
    document.getElementById(
        "experimentalProjectImage"
    );


const experimentalNumber =
    document.getElementById(
        "experimentalProjectNumber"
    );


const experimentalCategory =
    document.getElementById(
        "experimentalProjectCategory"
    );


const experimentalTitle =
    document.getElementById(
        "experimentalProjectTitle"
    );


const experimentalDescription =
    document.getElementById(
        "experimentalProjectDescription"
    );


const experimentalLink =
    document.getElementById(
        "experimentalProjectLink"
    );


const experimentalDots =
    document.querySelectorAll(
        ".experimental-dot"
    );


function showExperimentalProject(index) {

    const project =
        experimentalProjects[index];


    if (!project) {

        return;

    }


    experimentalImage.src =
        project.image;


    experimentalImage.alt =
        project.title +
        " Project";


    experimentalNumber.textContent =
        project.number;


    experimentalCategory.textContent =
        project.category;


    experimentalTitle.textContent =
        project.title;


    experimentalDescription.textContent =
        project.description;


    experimentalLink.href =
        project.link;


    experimentalDots.forEach(

        function(dot, dotIndex) {

            dot.classList.toggle(

                "active",

                dotIndex === index

            );

        }

    );

}


function nextExperimentalProject() {

    experimentalCurrentProject =

        (
            experimentalCurrentProject + 1
        )
        %
        experimentalProjects.length;


    showExperimentalProject(

        experimentalCurrentProject

    );

}


function previousExperimentalProject() {

    experimentalCurrentProject =

        (
            experimentalCurrentProject -
            1 +
            experimentalProjects.length
        )
        %
        experimentalProjects.length;


    showExperimentalProject(

        experimentalCurrentProject

    );

}


const experimentalNext =
    document.getElementById(
        "experimentalNext"
    );


const experimentalPrev =
    document.getElementById(
        "experimentalPrev"
    );


if (experimentalNext) {

    experimentalNext.addEventListener(

        "click",

        nextExperimentalProject

    );

}


if (experimentalPrev) {

    experimentalPrev.addEventListener(

        "click",

        previousExperimentalProject

    );

}


experimentalDots.forEach(

    function(dot, index) {

        dot.addEventListener(

            "click",

            function() {

                experimentalCurrentProject =
                    index;


                showExperimentalProject(

                    experimentalCurrentProject

                );

            }

        );

    }

);
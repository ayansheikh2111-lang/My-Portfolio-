// =================================
// VEYRA MOBILE MENU
// =================================

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


if (
    menuButton &&
    navLinks
) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "mobile-open"
            );

        }
    );

}
// ========================================
// NOVA — JAVASCRIPT
// ========================================


// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuButton =
    document.getElementById(
        "menuButton"
    );


const mainNav =
    document.getElementById(
        "mainNav"
    );


if (
    menuButton &&
    mainNav
) {

    menuButton.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle(
                "active"
            );

        }
    );


    // Close menu after clicking a link

    const navLinks =
        mainNav.querySelectorAll(
            "a"
        );


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}



// ========================================
// 2. FAQ ACCORDION
// ========================================

const faqQuestions =
    document.querySelectorAll(
        ".faq-question"
    );


faqQuestions.forEach(
    function (question) {

        question.addEventListener(
            "click",
            function () {


                const answer =
                    question.nextElementSibling;


                const icon =
                    question.querySelector(
                        "span"
                    );


                // Close all other answers

                document
                    .querySelectorAll(
                        ".faq-answer"
                    )
                    .forEach(
                        function (item) {

                            if (
                                item !== answer
                            ) {

                                item.style.maxHeight =
                                    null;

                            }

                        }
                    );


                // Open / close current answer

                if (
                    answer.style.maxHeight
                ) {

                    answer.style.maxHeight =
                        null;

                    if (icon) {

                        icon.textContent =
                            "+";

                    }

                } else {

                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                    if (icon) {

                        icon.textContent =
                            "−";

                    }

                }

            }
        );

    }
);



// ========================================
// 3. SCROLL REVEAL ANIMATION
// ========================================

// Add reveal class automatically

const revealElements =
    document.querySelectorAll(
        ".service-card, " +
        ".work-card, " +
        ".testimonial-card, " +
        ".stat, " +
        ".about-content"
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);


// Create Intersection Observer

const observer =
    new IntersectionObserver(

        function (
            entries,
            observer
        ) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {

            threshold: 0.15

        }

    );


// Observe elements

revealElements.forEach(
    function (element) {

        observer.observe(
            element
        );

    }
);



// ========================================
// 4. CONTACT FORM
// ========================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (
    contactForm &&
    formMessage
) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            // Prevent page reload

            event.preventDefault();


            // Get values

            const name =
                document
                .getElementById(
                    "name"
                )
                .value
                .trim();


            const email =
                document
                .getElementById(
                    "email"
                )
                .value
                .trim();


            const message =
                document
                .getElementById(
                    "message"
                )
                .value
                .trim();


            // Basic validation

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please complete all required fields.";

                return;

            }


            // Simple email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email
                )
            ) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;

            }


            // Success message

            formMessage.textContent =
                "Thank you, " +
                name +
                "! Your message has been received.";


            // Clear form

            contactForm.reset();

        }
    );

}



// ========================================
// 5. AUTOMATIC COPYRIGHT YEAR
// ========================================

const copyright =
    document.querySelector(
        ".copyright"
    );


if (copyright) {

    const currentYear =
        new Date().getFullYear();


    copyright.textContent =
        "© " +
        currentYear +
        " Nova. All rights reserved.";

}
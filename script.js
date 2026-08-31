/* ==============================
   MOBILE MENU
============================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* Close mobile menu */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* ==============================
   SCROLL ANIMATION
============================== */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* ==============================
   FAQ
============================== */

document
    .querySelectorAll(".faq")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                item.classList.toggle("open");

            }
        );

    });


/* ==============================
   PROJECT GALLERY
============================== */

const gallery = [

    [
        "assets/project-1.png",
        "Dashboard"
    ],

    [
        "assets/project-2.png",
        "Expenses"
    ],

    [
        "assets/project-3.png",
        "Profit & Loss"
    ],

    [
        "assets/project-4.png",
        "Products"
    ],

    [
        "assets/project-5.png",
        "Offline Sales"
    ],

    [
        "assets/project-6.png",
        "Online Sales"
    ],

    [
        "assets/project-7.png",
        "Mobile Navigation"
    ]

];


const modal =
    document.getElementById(
        "galleryModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalCaption =
    document.getElementById(
        "modalCaption"
    );

let currentImage = 0;


/* Show image */

function showImage(index) {

    currentImage =
        (index + gallery.length)
        % gallery.length;

    modalImage.src =
        gallery[currentImage][0];

    modalImage.alt =
        gallery[currentImage][1];

    modalCaption.textContent =
        gallery[currentImage][1] +
        " — SmartBiz Solutions BD";

}


/* Open gallery */

function openGallery(index) {

    showImage(index);

    modal.classList.add("show");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* Close gallery */

function closeGallery() {

    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


/* Gallery buttons */

document
    .querySelectorAll("[data-gallery]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openGallery(
                    Number(
                        button.dataset.gallery
                    )
                );

            }
        );

    });


/* Close */

document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        closeGallery
    );


/* Previous */

document
    .getElementById("prevImage")
    .addEventListener(
        "click",
        () => {

            showImage(
                currentImage - 1
            );

        }
    );


/* Next */

document
    .getElementById("nextImage")
    .addEventListener(
        "click",
        () => {

            showImage(
                currentImage + 1
            );

        }
    );


/* Click outside */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeGallery();

        }

    }
);


/* Keyboard */

document.addEventListener(
    "keydown",
    event => {

        if (
            !modal.classList.contains(
                "show"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeGallery();

        }


        if (event.key === "ArrowLeft") {

            showImage(
                currentImage - 1
            );

        }


        if (event.key === "ArrowRight") {

            showImage(
                currentImage + 1
            );

        }

    }
);

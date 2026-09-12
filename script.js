/* =========================================
   OM MURUGA DEVELOPERS
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       CONTACT FORM → WHATSAPP
    ===================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !phone || !message) {
                alert("Please fill in Name, Phone Number and Requirement.");
                return;
            }

            const whatsappMessage =
`Hello OM Muruga Developers 👋

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Requirement:
${message}

Thank you.`;

            const encodedMessage =
                encodeURIComponent(whatsappMessage);

            const whatsappURL =
                `https://wa.me/918754613944?text=${encodedMessage}`;

            window.open(whatsappURL, "_blank");

            contactForm.reset();
        });
    }


    /* =====================================
       NAVBAR ACTIVE LINK
    ===================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".project-card, .service-card, .why-card, .gallery-item, .about-content"
    );

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =====================================
       PHONE NUMBER VALIDATION
    ===================================== */

    const phoneInput = document.getElementById("phone");

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            this.value = this.value.replace(/\D/g, "");

            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }

        });

    }


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.innerHTML =
            `© ${new Date().getFullYear()} OM MURUGA DEVELOPERS. All Rights Reserved.`;

    }

});
// ================================
// MOBILE HAMBURGER MENU
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.innerHTML = "☰";
            });

        });
    }

});
// ================================
// GALLERY LIGHTBOX
// ================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;

        lightbox.classList.add("show");

    });

});

if (lightboxClose) {

    lightboxClose.addEventListener("click", function () {

        lightbox.classList.remove("show");

    });

}

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.classList.remove("show");
        }

    });

}

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && lightbox) {
        lightbox.classList.remove("show");
    }

});

const sections = document.querySelectorAll("section[id]");
const menuItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    menuItems.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// ================================
// BACK TO TOP
// ================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// ================================
// LOADING SCREEN
// ================================

setTimeout(function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hide");
    }

}, 1500);


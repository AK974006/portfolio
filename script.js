// JavaScript Enhancements for the Portfolio Website

window.onload = function() {
    // 1. Interactive greeting when clicking the header title
    var header = document.getElementById("header");
    if (header) {
        header.onclick = function() {
            alert("Welcome to my Personal Portfolio! Enjoy browsing my projects.");
        };
        // Change cursor to indicate clickability
        header.style.cursor = "pointer";
    }

    // 2. Interactive "Say Hello" button with user input
    var contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
        contactBtn.onclick = function() {
            var name = prompt("Hello! What is your name?");
            if (name !== null && name.trim() !== "") {
                alert("Nice to meet you, " + name + "! Thanks for visiting my portfolio. Feel free to send me an email.");
            } else if (name !== null) {
                alert("Thanks for visiting my portfolio! Feel free to send me an email.");
            }
        };
    }

    // 3. Smooth scrolling for navigation links
    var navLinks = document.querySelectorAll("#nav a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(event) {
            // Only apply if linking to an anchor on the same page
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    // Scroll into view smoothly
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    }

    // 4. Highlight portfolio projects on hover via JS (enhances CSS)
    var portfolioItems = document.querySelectorAll("#portfolio li");
    for (var j = 0; j < portfolioItems.length; j++) {
        portfolioItems[j].addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#f9f9f9";
            this.style.padding = "10px";
            this.style.borderRadius = "5px";
            this.style.transition = "background-color 0.3s, padding 0.3s";
        });
        
        portfolioItems[j].addEventListener("mouseleave", function() {
            this.style.backgroundColor = "transparent";
            this.style.padding = "0px";
        });
    }
};

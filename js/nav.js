document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the 'show' class on the navLinks when the hamburger button is clicked
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        
        // Change the hamburger icon to a close (X) icon when the menu is open
        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "×"; // Close icon
        } else {
            hamburger.innerHTML = "☰"; // Hamburger icon
        }
    });
});

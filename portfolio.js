document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to hide all sections and show the selected one
    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = "block"; // Show the selected section
            } else {
                section.style.display = "none"; // Hide all others
            }
        });
    }

    // Initially, show the introduction section only
    showSection("intro");

    // Add event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            showSection(targetId); // Show the clicked section
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggles = document.querySelectorAll(".toggle-menu");

    menuToggles.forEach(toggle => {
        toggle.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Toggle the visibility of the associated dropdown menu
            const dropdownMenu = this.nextElementSibling;
            const isDropdownVisible = dropdownMenu.style.display === "block";

            // Hide all dropdown menus
            document.querySelectorAll('.dropdown').forEach(menu => {
                menu.style.display = "none";
            });

            // Show the clicked dropdown if it was not visible
            if (!isDropdownVisible) {
                dropdownMenu.style.display = "block";
        
            }
        });
    });

    // Optional: Close the dropdown menu if clicked outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".nav-link")) {
            document.querySelectorAll('.dropdown').forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});

function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
   }

   function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    
   }
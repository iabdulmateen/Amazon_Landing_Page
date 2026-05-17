/**
 * =========================================================================
 * AMAZON ENGINE CLONE - INTERACTIVE INTERFACE LOGIC
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // --- 1. SMOOTH SCROLL BACK TO TOP CONTROL ---
    const backToTopButton = document.getElementById("navBackToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();
            // Poore viewport panel ko browser screen ke top par smooth move karega
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- 2. SEARCH BAR OUTLINE GLOW INTERACTION ---
    const searchInput = document.getElementById("twotabsearchtextbox");
    const searchForm = document.getElementById("nav-search-bar-form");

    if (searchInput && searchForm) {
        const outerSearchBar = searchInput.closest(".nav-searchbar");

        // Focus state trigger: Jab user input active karega
        searchInput.addEventListener("focus", function () {
            if (outerSearchBar) {
                outerSearchBar.style.boxShadow = "0 0 0 2px #ff9900, 0 0 0 3px rgba(255, 153, 0, 0.5)";
            }
        });

        // Blur state trigger: Jab click input box se bahar hoga
        searchInput.addEventListener("blur", function () {
            if (outerSearchBar) {
                outerSearchBar.style.boxShadow = "none";
            }
        });
    }

    // --- 3. DROP-DOWN SELECTION SYNC FACADE ---
    const searchDropdown = document.getElementById("searchDropdownBox");
    const searchFacadeLabel = document.getElementById("nav-search-label-id");

    if (searchDropdown && searchFacadeLabel) {
        searchDropdown.addEventListener("change", function () {
            // Dropdown mein category change hote hi screen text node ko sync karega
            const currentSelectedText = this.options[this.selectedIndex].text;
            searchFacadeLabel.textContent = currentSelectedText;
        });
    }

    // --- 4. DUMMY OVERLAY Dimmer HANDLER ---
    const hamburgerMenu = document.getElementById("nav-hamburger-menu");
    const navCoverOverlay = document.getElementById("nav-cover");

    if (hamburgerMenu && navCoverOverlay) {
        hamburgerMenu.addEventListener("click", function (e) {
            e.preventDefault();
            // Background screen dim light background overlay active toggle
            if (navCoverOverlay.style.display === "none" || !navCoverOverlay.style.display) {
                navCoverOverlay.style.display = "block";
                navCoverOverlay.style.opacity = "0.6";
                navCoverOverlay.style.backgroundColor = "#000";
                navCoverOverlay.style.position = "fixed";
                navCoverOverlay.style.top = "0";
                navCoverOverlay.style.left = "0";
                navCoverOverlay.style.width = "100%";
                navCoverOverlay.style.height = "100%";
                navCoverOverlay.style.zIndex = "99";
            } else {
                navCoverOverlay.style.display = "none";
            }
        });

        // Overlay par click karne se fade shield wapas remove ho jaye
        navCoverOverlay.addEventListener("click", function () {
            this.style.display = "none";
        });
    }
});
! function() {
    "use strict";
    "dark-mode-switch" == sessionStorage.getItem("is_visited") ? document.documentElement.setAttribute("data-bs-theme", "dark") : "light-mode-switch" != sessionStorage.getItem("is_visited") && "rtl-mode-switch" != sessionStorage.getItem("is_visited") || document.documentElement.setAttribute("data-bs-theme", "light")
}();
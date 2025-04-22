document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    function updateNavbar() {
        if (localStorage.getItem("user")) {
            loginLink.classList.add("hidden");
            logoutLink.classList.remove("hidden");
        } else {
            loginLink.classList.remove("hidden");
            logoutLink.classList.add("hidden");
        }
    }

    loginForm?.addEventListener("submit", function (e) {
        e.preventDefault();
        const user = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            gender: document.getElementById("gender").value,
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful!");
        updateNavbar();
        window.location.href = "index.html";
    });

    logoutLink?.addEventListener("click", function () {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        updateNavbar();
        window.location.href = "index.html";
    });

    updateNavbar();
});

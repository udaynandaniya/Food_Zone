document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
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

    signupForm?.addEventListener("submit", function (e) {
        e.preventDefault();
        const newUser = {
            name: document.getElementById("signupName").value,
            phone: document.getElementById("signupPhone").value,
            address: document.getElementById("signupAddress").value,
            password: document.getElementById("signupPassword").value,
            gender: document.getElementById("signupGender").value,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Sign Up successful! You can now log in.");
        window.location.href = "login.html";
    });

    loginForm?.addEventListener("submit", function (e) {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const enteredName = document.getElementById("name").value;
        const enteredPassword = document.getElementById("password").value;

        if (storedUser && storedUser.name === enteredName && storedUser.password === enteredPassword) {
            alert("Login successful!");
            updateNavbar();
            window.location.href = "index.html";
        } else {
            alert("Invalid login credentials.");
        }
    });

    logoutLink?.addEventListener("click", function () {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        updateNavbar();
        window.location.href = "index.html";
    });

    updateNavbar();
});

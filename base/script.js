document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    function updateNavbar() {
        const user = localStorage.getItem("user");
        if (user) {
            loginLink.style.display = "none";
            logoutLink.style.display = "inline";
        } else {
            loginLink.style.display = "inline";
            logoutLink.style.display = "none";
        }
    }

    logoutLink?.addEventListener("click", function () {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        updateNavbar();
        window.location.href = "index.html";
    });

    updateNavbar();
});
function ordernow(){
    window.location.href="../menu/cocacola.html";
}
function startdish(){
    window.location.href="../menu/pizza.html";
}
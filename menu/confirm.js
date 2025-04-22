document.addEventListener("DOMContentLoaded", function () {
    const home = JSON.parse(localStorage.getItem("home"));
    if (home) {
        document.getElementById("user-name").textContent = order.name;
        document.getElementById("order-id").textContent = order.orderId;
    }
    localStorage.removeItem("order"); // Clear order details

   
});
function home(){
    window.location.href="../base/index.html";
}
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItemsContainer = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    let totalPrice = 0;

    orderItemsContainer.innerHTML = "";
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        orderItemsContainer.appendChild(row);
        totalPrice += item.price * item.quantity;
    });
    orderTotalElement.textContent = totalPrice.toFixed(2);
});

function confirmOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    
    if (!name || !address || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    const orderId = Math.floor(Math.random() * 1000000);
    localStorage.setItem("order", JSON.stringify({ name, address, phone, orderId }));
    localStorage.removeItem("cart"); // Clear the cart after ordering
    window.location.href = "confirm.html";
}
function cart(){
    window.location.href="cart.html";
}
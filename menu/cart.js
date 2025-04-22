// Get references to the cart items and total price elements
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Initialize the cart if it's not already in localStorage
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Function to update the cart view and total price
function updateCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cartItemsContainer.innerHTML = ""; // Clear the cart table before adding new items

  let totalPrice = 0;
  cart.forEach((item, index) => {
    const itemRow = document.createElement("tr");

    // Create the item name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    itemRow.appendChild(nameCell);

    // Create the quantity cell
    const quantityCell = document.createElement("td");
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.min = 1;
    quantityInput.addEventListener("change", () => {
      item.quantity = parseInt(quantityInput.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart(); // Re-render the cart
    });
    quantityCell.appendChild(quantityInput);
    itemRow.appendChild(quantityCell);

    // Create the price cell
    const priceCell = document.createElement("td");
    priceCell.textContent = `$${item.price}`;
    itemRow.appendChild(priceCell);

    // Create the total cell
    const totalCell = document.createElement("td");
    const itemTotal = item.price * item.quantity;
    totalCell.textContent = `$${itemTotal}`;
    itemRow.appendChild(totalCell);

    // Create the action cell (Remove Item)
    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart(); // Re-render the cart
    });
    actionCell.appendChild(removeButton);
    itemRow.appendChild(actionCell);

    // Append the row to the cart table
    cartItemsContainer.appendChild(itemRow);

    totalPrice += itemTotal;
  });

  // Update the total price
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Add an item to the cart
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("data-name");
    const itemPrice = parseFloat(button.getAttribute("data-price"));

    const cart = JSON.parse(localStorage.getItem("cart"));
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if item already in cart
    } else {
      cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart(); // Re-render the cart
  });
});

// Initial update of the cart when the page loads
updateCart();

function placenow() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length > 0) {
      window.location.href = "order.html"; // Redirect to order page if more than 1 item
  } else {
      alert("Please add at least two items to proceed with your order.");
  }
}

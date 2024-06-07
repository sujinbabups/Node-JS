const items = new Map([
    ['Apple', 120],
    ['Banana', 50],
    ['Cherry', 200],
    ['Date', 350],
    ['Elderberry', 340]
]);

// Cart object to keep track of selected items and quantities
const cart = new Map();

// Populate the dropdown with items from the map
const fruitlist = document.getElementById('fruitlist');
items.forEach((price, item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = `${item} - (${price}))`;
    fruitlist.appendChild(option);
});

// Function to add the selected item to the cart
function addItem() {
    const selectedItem = fruitlist.value;
    const selectedPrice = items.get(selectedItem);
    const quantityInput = document.getElementById('qty');
    const quantity = parseInt(quantityInput.value);

    if (cart.has(selectedItem)) {
        // If item is already in the cart, update the quantity and total price
        const itemDetails = cart.get(selectedItem);
        itemDetails.quantity += quantity;
        itemDetails.totalPrice = itemDetails.quantity * selectedPrice;
    } else {
        // If item is not in the cart, add it with initial quantity and total price
        cart.set(selectedItem, {
            price: selectedPrice,
            quantity: quantity,
            totalPrice: quantity * selectedPrice
        });
    }

    updateCartTable();
}

// Function to delete an item from the cart
function deleteItem(item) {
    cart.delete(item);
    updateCartTable();
}

// Function to update the cart table
function updateCartTable() {
    const table = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing rows

    cart.forEach((itemDetails, item) => {
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = item;
        cell2.textContent = itemDetails.quantity;
        cell3.textContent = `${itemDetails.price.toFixed(2)}`;
        cell4.textContent = `${itemDetails.totalPrice.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteItem(item);
        cell5.appendChild(deleteButton);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const addForm = document.getElementById("addForm");
    const list = document.getElementById("list");

    addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;

    const address = {
        street: street,
        city: city,
        state: state,
        zip: zip
    };

    addAddress(address);
    addForm.reset();
    });

    function addAddress(address) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="address">${address.street}, ${address.city}, ${address.state} - ${address.zip}</span>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>`;
    list.appendChild(listItem);
    
    const editBtn = listItem.querySelector(".edit-btn");
    const deleteBtn = listItem.querySelector(".delete-btn");
    
    editBtn.addEventListener("click", function() {
        editAddress(listItem, address);
    });
    
    deleteBtn.addEventListener("click", function() {
        deleteAddress(listItem);
    });
    }
    
    function editAddress(listItem, address) {
    const addressSpan = listItem.querySelector(".address");
    const newStreet = prompt("Enter new street address:", address.street);
    const newCity = prompt("Enter new city:", address.city);
    const newState = prompt("Enter new state:", address.state);
    const newZip = prompt("Enter new zip code:", address.zip);
    
    if (newStreet && newCity && newState && newZip) {
        address.street = newStreet;
        address.city = newCity;
        address.state = newState;
        address.zip = newZip;
        
        addressSpan.textContent = `${address.street}, ${address.city}, ${address.state} - ${address.zip}`;
    }
    }
    
    function deleteAddress(listItem) {
    const confirmDelete = confirm("Are you sure you want to delete this address?");
    
    if (confirmDelete) {
        listItem.remove();
    }
    }
});

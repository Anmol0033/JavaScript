let arr = [];
let editingId = null;
const form = document.getElementById("contact-form");
const btn = document.getElementById("submit-btn");

async function showContactsBelowForm() {
    const response = await fetch('/contacts');
    const contacts = await response.json();
    arr = contacts;
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';
    
    for (let contact of contacts) {
        const tableRow =
        `<tr>
        <td>${contact.name}</td>
        <td>${contact.number}</td>
        <td>${contact.address}</td>
        <td>${contact.profession}</td>
        <td>
        <button onclick="editContact('${contact.id}')">Edit</button>
        <button onclick="deleteContact('${contact.id}')">Delete</button>
        </td>
        </tr>`
        
        tableBody.insertAdjacentHTML('beforeend', tableRow);
    }
}
showContactsBelowForm();

async function deleteContact(id) {
    const response = await fetch(`contacts/delete/${id}`, {
        method: "DELETE"
    })

    showContactsBelowForm();
}

async function editContact(id) {
    editingId = Number(id);
    const obj = arr.find(contact => contact.id == id);
    console.log(obj);

    const nameInp = document.getElementById('name');
    const numberInp = document.getElementById('number');
    const addressInp = document.getElementById('address');
    const professionInp = document.getElementById('profession');
    const btn = document.querySelector('button');

    nameInp.value = obj.name;
    numberInp.value = obj.number;
    addressInp.value = obj.address;
    professionInp.value = obj.profession;
    btn.innerText = 'Edit'

}

form.addEventListener("submit", saveContact);

async function saveContact(e) {
    e.preventDefault();

    const contactData = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        address: document.getElementById("address").value,
        profession: document.getElementById("profession").value
    };

    if (editingId === null) {

        // POST Request
        await fetch("/save_contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        });

    } else {
        console.log(contactData);
        // PUT Request
        await fetch(`/contacts/edit/${editingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        });

        editingId = null;
        btn.innerText = "Add Contact";
    }

    form.reset();
    showContactsBelowForm();
}
async function showContactsBelowForm()
{    
    const response = await fetch('/contacts');
    const contacts = await response.json();
    // console.log(contacts)
    
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';

    for(let contact of contacts)
    {
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

async function deleteContact(id)
{
    const response = await fetch(`contacts/${id}`, {
        method: "DELETE"
    })

    showContactsBelowForm();
}

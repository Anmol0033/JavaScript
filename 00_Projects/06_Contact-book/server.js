import express from "express";
import { addContact, getAllContacts, deleteContact, updateContact } from "./services/contactService.js"

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
})
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile('index.html');
})
app.post("/save_contact", (req, res) => {
    addContact(req.body);
    res.redirect('/');
})
app.get("/contacts", async (req, res) => {
    const contacts = await getAllContacts();
    res.json(contacts);
})

app.delete("/contacts/delete/:id", async (req, res) => {
    const response = await deleteContact(req.params.id);
    res.json(response);
})

app.put("/contacts/edit/:id", async (req, res) => {
    const updatedContact = await updateContact(req.params.id, req.body);
    if (!updatedContact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.json({
        message: "Contact updated successfully",
        contact: updatedContact
    });
});
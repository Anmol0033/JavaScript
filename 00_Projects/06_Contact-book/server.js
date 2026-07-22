import express from "express";
import {addContact, getAllContacts, deleteContact} from "./services/contactService.js"

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server listening at port: ${port}`);
})
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.sendFile('index.html');
})
app.post("/save_contact", (req, res)=>
{
    addContact(req.body);
    res.redirect('/');
})
app.get("/contacts", async (req, res)=>{
    const contacts = await getAllContacts();
    res.json(contacts);
})

app.delete("/contacts/:id", async (req, res)=>{
    const response = await deleteContact(req.params.id);
    res.json(response);
})

// app.put()
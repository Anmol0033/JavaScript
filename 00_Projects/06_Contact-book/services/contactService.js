import fs from "fs/promises";
import { json } from "stream/consumers";

export async function addContact(contact)
{
    const fileData = await fs.readFile("contacts.json", "utf-8")
    const dataArray = JSON.parse(fileData);
    contact.id = Date.now();
    dataArray.push(contact);

    const newFileData = JSON.stringify(dataArray);

    const writeData = await fs.writeFile("contacts.json", newFileData);
}

export async function getAllContacts()
{   
    const fileData = await fs.readFile("contacts.json", "utf-8")
    const contacts = JSON.parse(fileData);
    // console.log(fileData);
    return contacts;
}

export async function deleteContact(id)
{
    const numId = Number(id);
    const fileData = await fs.readFile("contacts.json", "utf-8");
    const fileDataArr = JSON.parse(fileData);

    const updatedArray = fileDataArr.filter(details => details.id !== numId);

    const updateFile = await fs.writeFile("contacts.json", JSON.stringify(updatedArray));
    return getAllContacts();
}
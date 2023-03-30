const path = require('path');
const fs = require('fs').promises;
// import fs from 'node:fs';
// const fsPromise = fs.promises;

const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('./db/contacts.json'); //Виводить абсолютний шлях до файлу contacts.json
// console.log('contactsPath', contactsPath);
// const dbFolder = path.join(__dirname, 'db'); // Створює папку db
// const contactsPath = path.join(dbFolder, 'contacts.json'); // Створює файл contacts.json в папці  db

// TODO: задокументувати кожну функцію
// function listContacts() {
//   fs.readFile(contactsPath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     const contacts = JSON.parse(data);
//     console.table(contacts);
//   });
// }

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    return console.table(contacts);
  } catch (err) {
    console.error(err);
  }
}

// function getContactById(contactId) {
//   fs.readFile(contactsPath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     const contacts = JSON.parse(data);
//     const contact = contacts.find(item => item.id !== contactId);
//     console.table(contact);
//   });
// }

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);

    const contact = contacts.filter(item => item.id === contactId);
    return console.table(contact);
  } catch (err) {
    console.error(err);
  }
}

// function removeContact(contactId) {
//   fs.readFile(contactsPath, 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     let contacts = JSON.parse(data);
//     contacts = contacts.filter(c => c.id !== contactId);

//     fs.writeFile(contactsPath, JSON.stringify(contacts), err => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       console.log(`Contact with id ${contactId} successfully removed.`);
//     });

//     console.table(contacts);
//   });
// }

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    let contacts = JSON.parse(data);

    contacts = contacts.filter(item => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    console.table(contacts);
  } catch (err) {
    console.error(err.message);
  }
}

// function addContact(name, email, phone) {
//   fs.readFile(contactsPath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     let contacts = JSON.parse(data);
//     const newContact = { id: uuidv4(), name, email, phone };
//     contacts.push(newContact);

//     fs.writeFile(contactPath, JSON.stringify(contacts), err => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       console.log(`Contact with id ${newContact.id} successfully added.`);
//     });

//     console.table(contacts);
//   });
// }

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    let contacts = JSON.parse(data);

    const newContact = { id: uuidv4(), name, email, phone };

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table(contacts);
  } catch (err) {
    console.error(err);
    console.error(err.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

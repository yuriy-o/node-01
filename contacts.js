const fs = require('fs').promises;
// import fs from 'node:fs';
// const fsPromise = fs.promises;

fs.writeFile('./text.txt', 'Our text', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});

const path = require('path');

// const dbFolder = path.join(__dirname, 'db'); // Створює папку db
// const contactsPath = path.join(dbFolder, 'contacts.json'); // Створює файл contacts.json в папці  db

const contactsPath = path.resolve('contacts.json'); //Виводить абсолютний шлях до файлу contacts.json

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

// function listContacts() {
//   fs.readFile(contactsPath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const contacts = JSON.parse(data);
//     console.table(contacts);
//   });
// }

// function getContactById(contactId) {
//   fs.readFile(contactsPath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const contacts = JSON.parse(data);
//     const contact = contacts.find(c => c.id === contactId);
//     console.log(contact);
//   });
// }

// function removeContact(contactId) {
//   fs.readFile(contactsPath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     let contacts = JSON.parse(data);
//     contacts = contacts.filter(c => c.id !== contactId);
//     fs.writeFile(contactsPath, JSON.stringify(contacts), err => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(`Contact with id ${contactId} removed.`);
//     });
//   });
// }

// function addContact(name, email, phone) {
//   fs.readFile(contactsPath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     let contacts = JSON.parse(data);
//     const newContact = { id: Date.now(), name, email, phone };
//     contacts.push(newContact);
//     fs.writeFile(contactsPath, JSON.stringify(contacts), err => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(`Contact with id ${newContact.id} added.`);
//     });
//   });
// }

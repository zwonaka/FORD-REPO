// Define a constructor function for Book objects
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isAvailable = true;
}

// Function to create a library object with methods
function createLibrary() {


  return { books: [],

      // Method to add a book to the library
      addBook: function(book) {

          book.isAvailable = true; // Ensure the book's availability is set to true
          this.books.push(book);
      },

      // Method to check out a book
      checkoutBook: function(title) {

          const book = this.books.find(book => book.title === title);

          if (book) {

              if (book.isAvailable) {
                  book.isAvailable = false;

                  return `${title} has been checked out.`;
                  
              } else {
                  return `${title} is not available for checkout.`;
              }

          } else {
              return `${title} does not exist in the library.`;
          }
      },

      // Method to return a book

      returnBook: function(title) {

          const book = this.books.find(book => book.title === title);

          if (book) {

              if (!book.isAvailable) {

                  book.isAvailable = true;
                  return `${title} has been returned.`;

              } else {
                  return `${title} is not checked out.`;
              }
              
          } else {
              return `${title} does not exist in the library.`;
          }
      }
  };
}

// Create a library object using the createLibrary function
const myLibrary = createLibrary();

// Add books to the library
myLibrary.addBook(new Book("Book 1", "Author 1"));
myLibrary.addBook(new Book("Book 2", "Author 2"));
myLibrary.addBook(new Book("Book 4", "Author 3"));

// Output according to the test case
console.log(myLibrary.checkoutBook("Book 1")); // Should log "Book 1 has been checked out."
console.log(myLibrary.checkoutBook("Book 3")); // Should log "Book 3 has been checked out."
console.log(myLibrary.returnBook("Book 1"));  // Should log "Book 1 has been returned."
console.log(myLibrary.returnBook("Book 2"));  // Should log "Book 2 is not checked out."
console.log(myLibrary.checkoutBook("Book 2")); // Should log "Book 2 has been checked out."


// Contact object
const Contact = {
    createContact(name, phone, email) {
        return { name, phone, email };
    }
  };
  
  // Contact management system
  function createContactManager() {
    const contacts = {};
  
    return {
        createContact(name, phone, email) {
            return Contact.createContact(name, phone, email);
        },
  
        addContact(contact) {
            contacts[contact.name] = contact;
        },
  
        findContactByName(name) {
            return contacts[name] || null;
        },
  
        deleteContact(name) {
            delete contacts[name];
        }
    };
  }
  
  // Test the contact management system
  const contactManager = createContactManager();
  
  const alice = contactManager.createContact("Alice", "123-456-7890", "alice@example.com");
  const bob = contactManager.createContact("Bob", "987-654-3210", "bob@example.com");
  
  contactManager.addContact(alice);
  contactManager.addContact(bob);
  
  const foundAlice = contactManager.findContactByName("Alice");
  console.log(foundAlice); // Should log the Alice contact object
  
  const foundUnknown = contactManager.findContactByName("Unknown");
  console.log(foundUnknown); // Should log null
  
  contactManager.deleteContact("Alice");
  const aliceAfterDelete = contactManager.findContactByName("Alice");
  console.log(aliceAfterDelete); // Should log null


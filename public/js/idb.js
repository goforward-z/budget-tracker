// create variable to hold db connection
let db;
// establish a connection to IndexedDB database 
const request = indexedDB.open('budget_tracker', 1);

// this event will emit if the database version changes
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon a successful 
request.onsuccess = function(event) {
    // when db is successfully created with its object store 
    db = event.target.result;
    // check if app is online
    if (navigator.onLine) {
      uploadTransaction();
    }
  };
  
request.onerror = function(event) {
console.log(event.target.errorCode);
};
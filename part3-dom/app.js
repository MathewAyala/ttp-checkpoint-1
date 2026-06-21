// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions: 
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const mainHeading = document.getElementById("main-heading");
const pageStatus = document.getElementById("subtitle");
const itemList = document.getElementById("item-list"); 
console.log(mainHeading)
console.log(pageStatus)
console.log(itemList)

// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)
const h2 = document.querySelector("h2");
const toggleButton = document.getElementById("toggle-btn");
const anItem = document.querySelector(".list-item"); 
console.log(h2)
console.log(toggleButton)
console.log(anItem)

// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const allItems = document.querySelectorAll(".list-item");
console.log(allItems);

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
 for (let i = 0; i < allItems.length; i++){
        let item = allItems[i];
        console.log(item);
    }

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//
//          answer: getElementById find an element based on a specified id. querySelector find the first instance of a specified query.
//                  querySelectorAll returns a node list.
//                  Since a node list isn't an array, it doesn't have access to all array methods.  


// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
console.log(mainHeading);

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
const pTitle = document.getElementById("subtitle")
pTitle.textContent = "Page loaded successfully";

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const pOutputText = document.getElementById("output-text");
pOutputText.innerText = "Let's Go Knicks!" 

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const divBox = document.getElementById("output-box");
divBox.style.backgroundColor = "Orange";

// B5.
// EXPLAIN: What is textContent? 
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer: textContent gets or sets the plain text inside an element.
//                  innerHTML gets or set the markup inside an element.
//                  innerHTML can be risky when it involves user input, because that would change the contents of your code itself. 


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeButton = document.getElementById("change-btn");
changeButton.addEventListener("click", changeText => {mainHeading.textContent= "Woohoo; It worked!"})

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.

 toggleButton.addEventListener("click", event => {pOutputText.classList.toggle('highlighted')})

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.

mainHeading.classList.add('active')
 console.log(mainHeading);

// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
anItem.classList.remove('list-item')
console.log(anItem)



// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer: an event listener waits for something to happen on a web page, then runs a function in response to it. 
//                  You can only use a function because it would run immediately since nothing would specify the condition for it to begin.


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: 


// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".

const newLiTag = document.createElement('li');
newLiTag.textContent="Pears";
newLiTag.classList.add("list-item");
itemList.append(newLiTag)
console.log(newLiTag)

// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after

const addButton = document.querySelector('#add-btn');
const input = document.querySelector('#item-input');
addButton.addEventListener('click',(event) => {

    const newInput = document.createElement('li');
    newInput.classList.add("list-item");
    newInput.textContent = input.value;
    itemList.append(newInput);
    input.value = '';

} )

// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.

pOutputText.remove();
//console.log(pOutputText);

// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer: createElement creates a new HTML element. 
//                  appendChild attaches a child element to a parent element.
//                  remove removes an element from a page.
//                  The newly created element actually appears after it is added to the document.


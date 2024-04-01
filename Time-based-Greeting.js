// Get the element with id 'greeting'
const greetingElement = document.getElementById('greeting');
// Get the current hour of the day
const currentTime = new Date().getHours();
// Get the element with id 'tag'
const tagElement = document.getElementById('tag');
// Variable to store the greeting message
let greeting;

// Determine the appropriate greeting based on the current time
if (currentTime < 12) {
  greeting = 'Good morning,'; // Set greeting to 'Good morning,' if current time is before 12 PM
} else if (currentTime < 18) {
  greeting = 'Good afternoon,'; // Set greeting to 'Good afternoon,' if current time is before 6 PM
} else {
  greeting = 'Good evening,'; // Set greeting to 'Good evening,' if current time is 6 PM or later
}

// Set the text content of the greeting element to the constructed greeting message
greetingElement.textContent = `${greeting}`;
// Append a waving hand emoji to the text content of the tag element
tagElement.textContent += ' 👋🏻';
Feature 1: Navigation Toggle
Trigger: The user clicks the menu button.
Expected DOM Change: The navigation menu becomes hidden or visible.
Edge Cases:
The user clicks the button multiple times.
The menu should not disappear permanently.
The button and navigation menu must exist.
Pseudocode:
Get the menu button and navigation menu.
Add a click event listener.
Toggle the hidden class when clicked.
Test if the menu opens and closes correctly.
Feature 2: Dark Mode
Trigger: The user clicks the dark mode button.
Expected DOM Change: The page changes between light mode and dark mode.
Edge Cases:
The user clicks the button repeatedly.
The page should switch back to light mode.
The dark mode button must exist.
Pseudocode:
Get the dark mode button.
Add a click event listener.
Toggle the dark class on the body.
Test both dark mode and light mode.
Feature 3: Dynamic Content from an Array
Trigger: The page loads.
Expected DOM Change: Project cards are created and displayed using data from an array.
Edge Cases:
The array is empty.
The page should not create duplicate cards.
Project information should appear correctly.
Pseudocode:
Create an array of project objects.
Get the project container.
Clear the container before rendering.
Loop through the array.
Create a card for each project.
Add the project title and description.
Append each card to the container.
Feature 4: Contact Form Validation
Trigger: The user submits the contact form.
Expected DOM Change: Error messages appear for invalid fields, or a success message appears when all fields are valid.
Edge Cases:
All fields are empty.
The name is missing.
The email is invalid.
The message is missing.
The user enters valid information.
Pseudocode:
Get the form and its input fields.
Add a submit event listener.
Prevent the default form submission.
Check if the name is empty.
Check if the email is valid.
Check if the message is empty.
Display errors for invalid fields.
Display a success message if all fields are valid.
Adversarial Testing
Test the following scenarios:
Click the navigation toggle.
Click the navigation toggle again.
Turn dark mode on.
Turn dark mode off.
Check if all project cards appear.
Submit the form with all fields empty.
Submit the form without a name.
Submit the form with an invalid email.
Submit the form without a message.
Submit the form with valid information.
Test Results
All 10 test cases passed during testing. No fixes were needed for these test cases.
Optimization Notes
Use addEventListener() for event handling.
Use an array to store project information.
Use a loop to create project cards dynamically.
Validate form inputs before showing success.
Keep HTML, CSS, and JavaScript in separate files.
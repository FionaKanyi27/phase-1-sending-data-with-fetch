// Function to submit data to the server
function submitData(name, email) {
    // The data to be sent in the body of the request
    const data = {
        name: name,
        email: email
    };

    // Configuration object for the fetch() call
    const configObject = {
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json", // Sending JSON data
            "Accept": "application/json" // Expecting JSON response
        },
        body: JSON.stringify(data) // Converting data object to JSON string
    };

    // Sending the POST request and handling the response
    return fetch("http://localhost:3000/users", configObject)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(object => {
            // Update the DOM with the new ID from the response
            document.getElementById('response').innerHTML = `New user ID: ${object.id}`;
        })
        .catch(error => {
            // Handle and display the error message in the DOM
            document.getElementById('response').innerHTML = `Error: ${error.message}`;
        });
}

// Handling the form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Getting the values entered by the user
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Call submitData function with the user input
    submitData(name, email);
});

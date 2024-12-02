// Making a GET request to the '/' endpoint
fetch('http://localhost:3000/', {
    method: 'GET',
})
    // Handling the response by converting it to JSON
    .then(response => response.json())
    // Handling the data obtained from the response
    .then(data => {

        // Update UI with product details from the response
    });
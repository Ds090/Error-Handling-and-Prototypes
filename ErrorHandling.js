const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789'; // Simulating a non-existent resource

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(data => {
    // Process the retrieved data if successful
    console.log('Retrieved data:', data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error:', error);

    // Display error message on the webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'There was an error fetching the data. Please try again later.';
    document.body.appendChild(errorMessage);
  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(data => {
    console.log('List of Posts:', data);
    data.forEach(post => {
      console.log('Title:', post.title);
      console.log('Body:', post.body);
      console.log('---');
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

function greetWithName(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject('Please provide a valid name.');
      }
    });
  }
  
  // Example usage:
  const inputName = "Mithun";
  
  greetWithName(inputName)
    .then(greeting => {
      console.log(greeting); // Logs: Hello, Mithun!
    })
    .catch(error => {
      console.error(error);
    });
  
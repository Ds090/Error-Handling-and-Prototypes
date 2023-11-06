async function fetchData() {
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await responce.json();
    console.log(data);
}

fetchData();
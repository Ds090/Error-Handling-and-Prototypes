async function fetchDataFromEndpoints() {
    try{
        const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1');

        const [toResponce, postResponce] = await Promise.all([todoPromise, postPromise]);

        const todoData = await toResponce.json();
        const postData = await postResponce.json();

        const combinedData = {
            todo: todoData,
            post: postData
        };

        console.log(combinedData);
        return combinedData;
    }catch (error){
        console.error("Error fetching data:", error)

    }
}

fetchDataFromEndpoints();
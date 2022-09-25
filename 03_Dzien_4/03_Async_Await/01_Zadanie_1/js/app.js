const $title = document.getElementById("title");
const $completed = document.getElementById("completed");
const $author = document.getElementById("author");

async function getData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const { userId, title, completed } = await response.json();

    const userDataResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { name } = await userDataResponse.json();

    $title.innerText = title;

    $completed.innerText = completed ? 'Zrobione' : 'Nie zrobione';
    $completed.classList.add(completed ? 'badge-success' : 'badge-danger')

    $author.innerText = name;
}

getData();

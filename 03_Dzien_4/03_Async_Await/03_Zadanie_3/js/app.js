async function getData() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        document.querySelector(".card-img-top").src = data.results[0].picture.large;
        document.querySelector(".card-title").textContent = data.results[0].name.first + " " + data.results[0].name.last;
        document.querySelector(".card-text").textContent = data.results[0].email;

    } catch (error) {
        console.log(error);
    }
}

getData();

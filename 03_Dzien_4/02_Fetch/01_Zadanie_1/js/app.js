// Zadanie 1

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();

    const isbn = document.querySelector('input').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            }

            throw Error(response.status, response.statusText);
        })
        .then(data => {
            const h2Element = document.createElement('h2');
            h2Element.innerText = data.items[0].volumeInfo.title;

            document.querySelector('.book-info').appendChild(h2Element);
        })
        .catch(error => {
            console.error(error);
        })
});



// Zadanie lekcji

fetch('https://api64.ipify.org')
    .then(response => {
        if (response.status >= 200 && response.status <= 299) {
            return response.text();
        } else {
            const responseError = {
                status: response.status,
                text: response.text,
            };

            throw Error(responseError);
        }
    })
    .then(data => {
        console.log('Pobrane dane: ', data);
    })
    .catch(error => {
        console.error('Wystąpił błąd: ', error);
    });

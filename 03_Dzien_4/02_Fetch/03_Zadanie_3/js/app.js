fetch('https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const holidayList = document.querySelector('.list');

        data.holidays.forEach(holiday => {
            const holidayLi = document.createElement('li');

            const  holidayH3 = document.createElement('h3');
            holidayH3.classList.add('holiday-name');
            holidayH3.innerText = holiday.name;

            const holidayDate = document.createElement('div');
            holidayDate.classList.add('holiday-date');
            holidayDate.innerText = holiday.date

            holidayLi.appendChild(holidayH3);
            holidayLi.appendChild(holidayDate);

            holidayList.appendChild(holidayLi);
        })
    })
    .catch(error => {
        console.log(error);
        });

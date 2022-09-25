const ulList = document.querySelector(".list-group");

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};

getNames()
  .then(data => {
    data.forEach(name => {
      const liElement = document.createElement('li');
      liElement.classList.add('list-group-item');
      liElement.innerText = name;

      ulList.appendChild(liElement);
    });
  })
  .catch(error => console.error(error));

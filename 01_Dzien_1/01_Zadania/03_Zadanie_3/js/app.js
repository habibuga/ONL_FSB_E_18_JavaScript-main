const randomize = (param1, param2, callback) => {

    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }

    const randNum = Math.floor(Math.random() * (param2 - param1 + 1) + param1);

    callback(randNum);

}

randomize(10, 20, (number) => console.log(number));

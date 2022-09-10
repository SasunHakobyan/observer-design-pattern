// Observer is an data save method {json file, NoSQL, SQL}
class Observer {
    constructor(callback) {
        this.callback = callback;
    }

    save(userName, price) {
        this.callback(userName, price);
    }
}

module.exports = Observer;
class Observable {
    constructor(userName, price) {
        this.userName = userName;
        this.price = price;
        this.observers = [];
    }

    // Adding observer to observers list
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Calling each observer save method from observers array
    saveData() {
        this.observers.forEach(observer => {
            observer.save(this.userName, this.price);
        });
    }
}

module.exports = Observable;
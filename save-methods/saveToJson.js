const fs = require("fs");

// Saving input data (userName, price) to JSON file
function saveToJsonData(userName, price) {
    const data = loadData();
    data.push({userName, price});
    saveData(data);
    console.log("ON SAVE DATA");
}

// Loading JSON file data
function loadData() {
    try {
        const dataBuffer = fs.readFileSync("./json-data/data.json");
        const jsonData = JSON.parse(dataBuffer);
        return jsonData;
    } catch (err) {
        return [];
    }
}

// Saving data to JSON file 
function saveData(data) {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync("./json-data/data.json", jsonData);
}

module.exports = saveToJsonData;
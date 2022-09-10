const {MongoClient} = require('mongodb');

// Connecting to mongo cloud
const client = new MongoClient(process.env.MONGO_URI);

const saveData = async (userName, price) => {
    try {
        await client.connect();
        const users = client.db().collection("users");
        await users.insertOne({userName,price});
        await client.close();
    } catch (err) {
        console.log(err);
    }
}

module.exports = saveData;
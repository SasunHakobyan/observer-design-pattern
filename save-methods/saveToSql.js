const {Pool} = require("pg");
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE_NAME
});

const saveData = async (userName, price) => {
    try {
        await pool.connect();

        const createTableQuery = "CREATE TABLE IF NOT EXISTS person (NAME TEXT NOT NULL, PRICE INT NOT NULL);";
        const insertQuery = `INSERT INTO person (NAME,PRICE) VALUES ('${userName}', ${price});`;

        await pool.query(createTableQuery);
        const insertResult = await pool.query(insertQuery);
        console.log(await pool.query("SELECT * FROM person"));

        await pool.end();
    } catch (err) {
        console.log(err);
    }
}

module.exports = saveData;
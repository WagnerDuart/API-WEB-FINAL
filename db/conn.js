const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apifinalweb.5fupwkm.mongodb.net/?retryWrites=true&w=majority`);

        console.log('Conectado ao banco!');
}

main().catch((err) => console.log(err));

module.exports = main;


const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('database connected successful yad');
    });

//* Reading the json file *\\

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

//* Insert the data into database *\\

const insertData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully inserted');
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

//* Delete data from collection *\\
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data deleted successfully');
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    insertData();
}
if (process.argv[2] === '--delete') {
    deleteData();
}

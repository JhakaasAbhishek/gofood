const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://abhishekvermajsr2000:AbhiMongodb@cluster0.dybpcgq.mongodb.net/?retryWrites=true&w=majority' // Customer change url to your db you created in atlas
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
          
        }
    })
};

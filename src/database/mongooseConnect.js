const DATABASE_MONGO = process.env.DATABASE_MONGO
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const connect = async () => {
    try {await mongoose.connect(DATABASE_MONGO
       , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Data base conectada")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    connect
}
const mongoose = require('mongoose')

const mong = "mongodb+srv://divyanshu6797:LionelMongodb10@cluster0.6bnenbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
             


export async function connect() {
    try {
        mongoose.connect("mongodb://localhost:27017"|| mong);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err: any) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}
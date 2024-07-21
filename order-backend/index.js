import express from "express";
import db from "./db/connection.js";


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/orders', async (req, res) => {
    const collection = await db.collection("Order");
    const orders = await collection.find({}).toArray();
    res.json(orders);
    // res.json({items: { username: 'Flavio' }})
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
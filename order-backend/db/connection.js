import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongodb:${process.env.MONGO_PORT}/`
const client = new MongoClient(mongoUrl);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db(process.env.MONGO_DB);

export default db;
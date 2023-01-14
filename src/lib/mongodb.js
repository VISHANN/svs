import { MongoClient } from "mongodb";
const MONGODB_URI  = process.env.MONGODB_URI;

const clientPromise = new MongoClient(MONGODB_URI).connect();


export { clientPromise };
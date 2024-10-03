/** @format */

import mongoose, { mongo, Mongoose } from "mongoose";

const mongo_url = process.env.MONGODB_URI;
console.log("mongo_url ===>", mongo_url ? "Connected..." : "failed to connect");

// database is connected only once
// each request is handled by the same connection
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// caching the connection
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!mongo_url) {
    throw new Error("Mongo URL is not provided");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(mongo_url, {
      dbName: "imagAI",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;

  return cached.conn;
};

import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USER_ID}:${process.env.PASSWORD}@cluster0.yfz8i.mongodb.net/dsaCracker?retryWrites=true&w=majority`
  );

  return client;
};

/*
 
*/

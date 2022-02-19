import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://moeen8766:mohammed8766@cluster0.yfz8i.mongodb.net/dsaCracker?retryWrites=true&w=majority`
  );

  return client;
};

/*
 
*/

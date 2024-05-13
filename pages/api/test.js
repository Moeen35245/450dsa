// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "../../lib/db";
import { ObjectId } from "bson";
import { getSession } from "next-auth/react";

export default async function inserQuestion(req, res) {
  // const queId = new ObjectId(id);
  const client = await connectToDatabase();
  const db = client.db();

  const userCollection = db.collection("questionList");

  let result = await userCollection.find({}).toArray();

  client.close();
  return res.json(result);
  //   res.status(200).json(userQuestions.length);
}

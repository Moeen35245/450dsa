// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "../../lib/db";
import { ObjectId } from "bson";
import { getSession } from "next-auth/react";

export default async function inserQuestion(req, res) {
  if (req.method === "PATCH") {
    const session = await getSession({ req });
    if (!session) {
      res.status(403).json({ message: "you are not logged in" });
    }
    const data = req.body;
    const { id, email, topic } = data;
    // const queId = new ObjectId(id);
    let queString = `questionList.${topic}`;

    const client = await connectToDatabase();
    const db = client.db();
    const userCollection = db.collection("users");
    const result = await userCollection.updateOne(
      { email: email },
      { $push: { [queString]: id } }
    );
    let questionData = await userCollection.findOne({ email: email });
    questionData = {
      id: questionData._id.toString(),
      email: questionData.email,
      questionList: questionData.questionList,
    };
    client.close();
    res.status(200).json(questionData);
  } else {
    res.status(403).json({ message: "method is not appropriate" });
  }
}
//  { $push: { "comments.0.likes": "userID3" } { $push: { "questionList.$.Array": queId } }

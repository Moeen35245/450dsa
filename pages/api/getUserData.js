import { connectToDatabase } from "../../lib/db";
import { getSession } from "next-auth/react";

export default async function getUserData(req, res) {
  const session = getSession({ req });
  if (!session) {
    res.status(403).json({ message: "you are not logged in" });
  }

  const { email } = req.query;
  const client = await connectToDatabase();
  const db = client.db();
  const userCollection = db.collection("users");
  let result = await userCollection.findOne({
    email: email,
  });
  // console.log(result);
  // result = {
  //   id: result._id.toString(),
  //   email: result.email,
  //   queList: result.questionList,
  // };

  client.close();
  res.status(201).json(result);
}

/*
  
*/

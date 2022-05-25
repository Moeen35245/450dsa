import { connectToDatabase } from "../../lib/db";
import { getSession } from "next-auth/react";

export default async function getUserData(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(422).error({ message: "you are not logged in" });
  }

  const email = session.user.email;
  const client = await connectToDatabase();
  const db = client.db();
  const userCollection = db.collection("users");
  let result = await userCollection.findOne({
    email: email,
  });

  result = {
    id: result._id.toString(),
    email: result.email,
    queList: result.questionList,
  };

  client.close();
  res.status(201).json(result);
}

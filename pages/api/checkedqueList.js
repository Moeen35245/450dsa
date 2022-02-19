import { connectToDatabase } from "../../lib/db";
import { getSession } from "next-auth/react";

export default async function checkedQueHandler(req, res) {
  if (req.method === "PATCH") {
    const session = getSession();
    if (!session) {
      res.status(403).json({ message: "you are not logged in" });
    }
    const data = req.body;
    const { email, topic } = data;
    const client = await connectToDatabase();
    const db = client.db();
    const userCollection = db.collection("users");
    let result = await userCollection.findOne({ email: email }).toArray();
    result = result.map((item) => ({
      id: item._id.toString(),
      email: item.email,
    }));
    client.close();
    res.status(200).json(result);
  } else {
    res.status(403).json({ message: "method is not appropriate" });
  }
}

/*
 const session = getSession();
    if (!session) {
      res.status(403).json({ message: "you are not logged in" });
    }
    const data = req.body;
    const { email } = data;
    const client = await connectToDatabase();
    const db = client.db();
    const userCollection = db.collection("users");
    const result = await userCollection.findOne({ email: email });
    client.close();
    res.status(200).json({ message: "sucessfully updated" });
*/

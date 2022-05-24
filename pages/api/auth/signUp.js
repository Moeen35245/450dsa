import { hashPassword } from "../../../lib/bcrypt";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;

    const hashedPassword = await hashPassword(password);
    const client = await connectToDatabase();
    const db = client.db();

    if (!email || !email.includes("@") || !email.includes(".com")) {
      // throw new Error
      res.status(422).json({ message: "Enter a valid Email" });
      client.close();
    }

    if (!password || password.trim().length < 7) {
      res
        .status(422)
        .json({ message: "Password cannot be less than 7 Characters" });
      client.close();
    }
    const existingUser = await db.collection("users").findOne({ email: email });
    if (existingUser) {
      // throw new Error("User already exist");
      const jsonObj = {
        message: "User already exist",
      };
      const jsonContent = JSON.stringify(jsonObj);
      res.status(422).end(jsonContent);
      client.close();
    }
    const signUpData = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
      questionList: {
        Array: [],
        Matrix: [],
        String: [],
        SearchingSorting: [],
        LinkedList: [],
        BinaryTrees: [],
        BinarySearchTrees: [],
        Greedy: [],
        BackTracking: [],
        StacksQueues: [],
        Heap: [],
        Graph: [],
        Trie: [],
        DynamicProgramming: [],
        BitManipulation: [],
      },
    });
    client.close();
    res.status(201).json({ message: "user created" });
  }
};

export default handler;

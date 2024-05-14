// import { hashPassword } from "../../../lib/bcrypt";
// import { connectToDatabase } from "../../../lib/db";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { email, password } = req.body;

//   try {
//     // Check if the email already exists in the database
//     const db = await connectToDatabase();
//     const existingUser = await db.collection("users").findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await hashPassword(password);

//     // Store the user in the database
//     await db.collection("users").insertOne({
//       email,
//       password: hashedPassword,
//     });

//     return res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }

import Head from "next/head";
import Card from "../components/common/Card";
import { connectToDatabase } from "../lib/db";
import { calcCounts, convertObjToArray, removeDuplicates } from "../lib/helper";
import { useContext } from "react";
import { UserContext } from "../context/mainContext";
import { getSession } from "next-auth/react";
import Header from "../components/common/Header";

export default function Home(props) {
  const ctx = useContext(UserContext);
  const arrayData = props.data;
  const unique = removeDuplicates(arrayData);
  const counts = calcCounts(arrayData);
  const result = convertObjToArray(counts);

  if (props.queData) {
    ctx.setUserData(props.queData.queList);
  }
  return (
    <div className="bg-background h-[100%] pt-16 w-screen">
      <Head>
        <title>450 DSA TRACKER - love babbar - 450 dsa sde sheet</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="450 dsa tracker will enhance your data structures and algorithems skill and it will drive away your fear. Dsa 450 is a collection of 400+ most asked dsa questions"
        />
        <meta
          name="keywords"
          content="450 dsa tracker, sde sheet, love babbar sde sheet"
        />
        <meta
          name="google-site-verification"
          content="jHIa92FrxJtH7lhBfhYIzQcCV1b-JF3XVNrE7JJJYTg"
        />
        <meta property="og:title" content="450 DSA TRACKER" />
        <meta
          property="og:description"
          content="450 dsa tracker will enhance your data structures and algorithems skill and it will drive away your fear. Dsa 450 is a collection of 400+ most asked dsa questions"
        />
        <meta property="og:type" content="webapp" />
        <meta property="og:url" content="https://www.450dsa.vercel.app" />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1OuJWyb47Gby7x8L8Cv15vOuVWPgqhwqN/view?usp=sharing"
        />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <div className="flex">
        <div className="grid grid-cols-1 new md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1160px] mx-auto">
          {unique.map((item, i) => {
            return (
              <Card
                id={item.id}
                key={item.id}
                name={item.topic}
                number={result[i][1]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const client = await connectToDatabase();
  const db = client.db();
  const questionCollection = db.collection("questionList");
  const userCollection = db.collection("users");

  const data = await questionCollection.find({}).toArray();
  let questionData = {};

  if (session) {
    let res = await userCollection.findOne({ email: session.user.email });
    res = {
      queList: res.questionList,
    };
    questionData = res;
  }
  client.close();

  return {
    props: {
      data: data.map((obj) => ({
        id: obj._id.toString(),
        name: obj.Problem,
        topic: obj.TOPICS,
        isDone: obj.DONE,
        link: obj.LINK,
      })),
      queData: questionData,
    },
  };
}

/*
axios.get("/api/getUserData", {
      params: { email: session.user.email },
    });
*/

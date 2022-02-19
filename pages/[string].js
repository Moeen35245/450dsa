import { getSession } from "next-auth/react";
import { SearchIcon } from "@heroicons/react/outline";
import { connectToDatabase } from "../lib/db";
import Table from "../components/table/Table";
import { useContext } from "react";
import { UserContext } from "../context/mainContext";

const String = ({ data, queData }) => {
  return (
    <div className=" bg-[#f1faee] pt-10">
      <h1 className="md:mt-12 text-center mx-auto text-5xl font-semibold text-[#6D4AB5]">
        {data[0].topic}
      </h1>
      <main className=" p-4 overflow-x-auto">
        <div className="bg-white rounded-xl w-max mx-auto p-4 ">
          <div className="hidden p-3 border-2  items-center rounded-md">
            <SearchIcon className="h-5 w-5 text-slate-400 mr-5" />
            <input
              className="outline-none border-none"
              type="text"
              placeholder="search here"
            />
          </div>
          <Table id={1} queList={queData.queList} data={data} />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  let currTopic = context.params.string;
  const client = await connectToDatabase();
  const db = client.db();
  const questionCollection = db.collection("questionList");
  const userCollection = db.collection("users");
  const data = await questionCollection.find({ TOPICS: currTopic }).toArray();
  let questionData = {};

  if (session) {
    let res = await userCollection.findOne({ email: session.user.email });
    res = {
      id: res._id.toString(),
      queList: res.questionList,
    };
    questionData = res;
  }
  client.close();

  return {
    props: {
      data: data.map((item) => ({
        id: item._id.toString(),
        name: item.Problem,
        topic: item.TOPICS,
        isDone: item.DONE,
        link: item.LINK,
      })),
      queData: questionData,
    },
  };
}

/*
 queData: {
        id: queData._id.toString(),
        email: queData.email,
        queList: queData.questionList,
      },
*/

export default String;

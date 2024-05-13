import { SearchIcon } from "@heroicons/react/outline";
import { topics } from "../lib/helper";
import Table from "../components/table/Table";
import { questionsList } from "../questions/lovebabbar";

const String = ({ data, queData }) => {
  return (
    <div className=" bg-[#f1faee] pt-10">
      <h2 className="md:mt-12 text-center mx-auto text-5xl font-semibold text-[#6D4AB5]">
        {data[0].topic}
      </h2>
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

export async function getStaticPaths() {
  const paths = topics.map((item) => ({ params: { string: item } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  let currTopic = context.params.string;
  if (!topics.includes(currTopic)) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const data = questionsList.filter((item) => item.TOPICS === currTopic);

  let questionData = {};

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

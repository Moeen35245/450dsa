import Link from "next/link";
import { useEffect, useState } from "react";
import { UploadIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Status from "../common/Status";
import StatusGreen from "../common/StatusGreen";
import { removeSpaces } from "../../lib/removespace";

const insertHandler = async (id, email, topic) => {
  const response = await fetch("/api/insertQuestion", {
    method: "PATCH",
    body: JSON.stringify({ id, email, topic }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const deleteHandler = async (id, email, topic) => {
  const response = await fetch("/api/deleteQuestion", {
    method: "PATCH",
    body: JSON.stringify({ id, email, topic }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};

function Tablebody({ item, count, queList }) {
  // const { data: session, status } = useSession();

  const [isLoading, setLoading] = useState(false);
  // const [userData, setUserData] = useState(queList);

  // if (!userData) {
  //   setUserData(queList);
  // }

  const topic = removeSpaces(item.topic);

  const [isQueDone, setIsQueDone] = useState(false);

  useEffect(() => {
    let allQuestions = JSON.parse(localStorage.getItem("questionData"));
    if (allQuestions) setIsQueDone(allQuestions.indexOf(item.id) !== -1);
  }, []);

  const checkHandler = async (e) => {
    // setLoading(true);
    if (!isQueDone) {
      // insertHandler(item.id, session.user.email, topic)
      //   .then((res) => setUserData(res.questionList))
      //   .then((res) => setLoading(false));

      if (!localStorage.getItem("questionData")) {
        let questionArray = [item.id];
        localStorage.setItem("questionData", JSON.stringify(questionArray));
      } else {
        let questionArray = JSON.parse(localStorage.getItem("questionData"));
        questionArray.push(item.id);
        localStorage.setItem("questionData", JSON.stringify(questionArray));
      }
      setIsQueDone(true);
      // localStorage.setItem('questionData',)
    } else {
      if (localStorage.getItem("questionData")) {
        let questionArray = JSON.parse(localStorage.getItem("questionData"));
        questionArray = questionArray.filter((que) => que !== item.id);
        localStorage.setItem("questionData", JSON.stringify(questionArray));
      }

      setIsQueDone(false);
    }
  };

  return (
    <tbody className="mb-2 md:w-max w-[150px]">
      <tr>
        <td className="center-col">
          {isLoading ? (
            <span className="loading"></span>
          ) : (
            <input
              type="checkbox"
              className="h-5 w-5 cursor-pointer"
              checked={isQueDone && "checked"}
              onChange={checkHandler}
            />
          )}
        </td>
        <td className="center-col">{++count}</td>
        <td className="md:p-5 max-w-xs md:max-w-full">
          <Link href={item.link}>
            <a target="_blank">
              <p className=" hover:underline hover:text-darkBlue visited:text-purple-600 cursor-pointer">
                {item.name}
              </p>
            </a>
          </Link>
        </td>
        <td className="md:p-5">{isQueDone ? <StatusGreen /> : <Status />}</td>
        {/* <td className="md:p-5 hidden">
          <UploadIcon className="h-5 w-5 ml-auto mr-auto" />
        </td> */}
      </tr>
    </tbody>
  );
}

export default Tablebody;

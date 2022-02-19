import Link from "next/link";
import { useEffect, useState } from "react";
import { UploadIcon } from "@heroicons/react/outline";
import Status from "../common/Status";
import StatusGreen from "../common/StatusGreen";
import { useContext } from "react";
import { UserContext } from "../../context/mainContext";
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
  console.log(data);
  return data;
};

function Tablebody({ item, count, queList }) {
  const ctx = useContext(UserContext);
  const [userData, setUserData] = useState(queList);
  if (!userData) {
    setUserData(queList);
  }
  const topic = removeSpaces(item.topic);

  const [isQueDone, setIsQueDone] = useState(userData[topic].includes(item.id));

  const checkHandler = async (e) => {
    if (!isQueDone) {
      const res = await insertHandler(item.id, ctx.session.user.email, topic);
      setUserData(res.questionList);
      setIsQueDone(true);
    } else {
      const res = await deleteHandler(item.id, ctx.session.user.email, topic);
      setUserData(res.questionList);
      setIsQueDone(false);
    }
  };

  return (
    <tbody className="mb-2 md:w-max w-[150px]">
      <tr>
        <td className="center-col">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isQueDone && "checked"}
            onChange={checkHandler}
          />
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
        <td className="md:p-5 hidden">
          <UploadIcon className="h-5 w-5 ml-auto mr-auto" />
        </td>
      </tr>
    </tbody>
  );
}

export default Tablebody;

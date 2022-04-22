import { Fragment, useContext, useState } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import "../../styles/Home.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Status from "./Status";
import { UserContext } from "../../context/mainContext";
import { ClosedIcon, OpenIocn } from "../card/Icons";
import { removeSpaces } from "../../lib/removespace";
import StatusHome from "./StatusHome";
function Card({ name, id, number }) {
  const { data: session, status } = useSession();
  const ctx = useContext(UserContext);
  const topic = removeSpaces(name);
  let length = 0;
  if (session) {
    if (ctx.userData)
      if (ctx.userData[topic]) length = ctx.userData[topic].length;
  } else {
    // console.log("session is not defined yet");
  }

  const Childdiv = {
    height: "100%",
    width: `${(length / number) * 100}%`,
    backgroundColor: "#06D6A0",
    borderRadius: "9999px",
  };
  return (
    <Fragment>
      <Link href={"/" + name}>
        <div className="hover:scale-110 transition-all duration-200 ease-in cursor-pointer mt-8 shadow-clay card bg-white h-[230px] w-[325px]  rounded-[50px] ml-5 pb-3 flex items-center flex-col px-12 ">
          <div className="bg-darkBlue logo-container w-16 h-12 rounded-[10px] z-50 -mt-6 flex justify-center items-center">
            <UsersIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-center mt-2 text-3xl font-semibold text-darkBlue">
            {name}
          </h2>
          <p className="font-medium text-sm">{number} Questions</p>
          <div className="mt-auto flex justify-between w-[94%] mb-1 font-medium text-sm">
            <p>Progress</p>
            <p>{((length / number) * 100).toFixed()}%</p>
          </div>
          <div
            className={
              "progress-outer rounded-full h-2 w-full bg-[#FFCCD5] " +
              (length > 0 && " bg-[#D8F3DC]")
            }
          >
            <div style={Childdiv}></div>
          </div>
          <div className="flex justify-between items-center w-[94%] mt-4">
            <p className="font-medium text-sm">
              {length}/{number}
            </p>
            {(!session && <ClosedIcon />) || (session && <OpenIocn />)}
            <div className="ml-auto"></div>
            {length > 0 ? <StatusHome /> : <Status />}
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default Card;

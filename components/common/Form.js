import { useContext, useRef } from "react";
import { useRouter } from "next/router";
import { EyeIcon, EyeOffIcon, AtSymbolIcon } from "@heroicons/react/outline";
import Image from "next/image";
import laptop from "../../public/laptop.svg";
import { InputContext, UserContext } from "../../context/mainContext";
import userCredentials from "../../lib/credentials";
import MessageBox from "../form/MessageBox";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

function Form() {
  const { status } = useSession();
  const [isLoading, setLoading] = useState(false);
  const ctx = useContext(InputContext);
  const ctxUser = useContext(UserContext);
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    userCredentials(enteredEmail, enteredPassword, ctx, router).then((res) =>
      setLoading(false)
    );
  };

  return (
    <div className="mt-28 bg-white w-full h-full rounded flex">
      <div className="grow w-1/2 form-container flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="max-w-sm bg-white rounded px-8 pt-6 pb-8 mb-4"
        >
          {ctx.res.ok && <MessageBox />}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="Email"
            >
              Email*
            </label>
            <div className="border w-full flex shadow focus:shadow-outline jsutify-between items-center">
              <input
                className="rounded grow w-[90%] py-2 px-3 text-slate-600  focus:outline-none "
                id="Email"
                type="text"
                placeholder="Enter Email"
                ref={emailRef}
              />
              <AtSymbolIcon className="grow h-5 w-5 text-slate-400 mr-3" />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password*
            </label>
            <div className="border w-full flex justify-around items-center shadow focus:shadow-outline">
              <input
                className="rounded grow py-2 px-3 text-slate-600 w-[90%] focus:outline-none"
                id="password"
                type={(ctx.isHide && "password") || (!ctx.isHide && "text")}
                placeholder="Type your secret"
                ref={passwordRef}
              />
              {ctx.isHide && (
                <EyeIcon
                  onClick={ctx.hideHandler}
                  className="cursor-pointer grow h-5 w-5 text-slate-400 mr-3"
                />
              )}
              {!ctx.isHide && (
                <EyeOffIcon
                  onClick={ctx.hideHandler}
                  className="cursor-pointer grow h-5 w-5 text-slate-400 mr-3"
                />
              )}
            </div>
          </div>
          <button
            className="w-full py-2 bg-darkBlue shadow-darkBlue text-white rounded"
            type="submit"
          >
            {isLoading ? (
              <span className="loading"></span>
            ) : ctx.isLogin ? (
              "Login"
            ) : (
              "SignUp"
            )}
          </button>
          <br />
          <div className="flex">
            <div className="">
              <span className="text-xs text-slate-500">
                {ctx.isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </span>
            </div>
            <div className="">
              <p
                onClick={ctx.loginHandler}
                className="ml-2 text-xs cursor-pointer inline-block align-baseline text-darkBlue hover:underline font-bold"
              >
                {ctx.isLogin ? "Signup" : "Login"}
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden grow w-1/2 bg-darkBlue rounded-tl-3xl rounded-bl-3xl md:flex justify-center items-center">
        <div className="relative h-[380px] w-[380px]">
          <Image src={laptop} objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default Form;

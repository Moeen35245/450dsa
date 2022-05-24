import Form from "../components/common/Form";
import InputState from "../context/inputState";
import { useSession } from "next-auth/react";

function Auth() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl sm:text-5xl text-slate-700">
          You Already Logged In
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-background p-4 h-screen w-screen flex justify-center items-center">
      <InputState>
        <Form />
      </InputState>
    </div>
  );
}

export default Auth;

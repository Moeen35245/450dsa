import Form from "../components/common/Form";
import InputState from "../context/inputState";

function Auth() {
  return (
    <div className="bg-background p-4 h-screen w-screen flex justify-center items-center">
      <InputState>
        <Form />
      </InputState>
    </div>
  );
}

export default Auth;

import { useContext } from "react";
import { InputContext } from "../../context/mainContext";
import { XIcon } from "@heroicons/react/outline";
function MessageBox() {
  const ctx = useContext(InputContext);
  return (
    <div
      className={
        ((ctx.res.error === false || ctx.res.url != null) &&
          `border-green-500 text-green-500 bg-green-200 rounded mb-4 w-full py-2 px-3 border  flex justify-between`) ||
        `border-red-500 text-red-500 bg-red-200 rounded mb-4 w-full py-2 px-3 border  flex justify-between`
      }
    >
      <p className="text-xs font-medium">
        {ctx.res.error || ctx.res.message || "Logged In Successfully"}
      </p>
      <XIcon
        onClick={ctx.crossHandler}
        className={
          ((ctx.res.error === false ||
            ctx.res.url === "https://450dsa.vercel.app") &&
            `text-green-500 h-5 w-5 cursor-pointer `) ||
          `text-red-500 h-5 w-5 cursor-pointer`
        }
      />
    </div>
  );
}

export default MessageBox;

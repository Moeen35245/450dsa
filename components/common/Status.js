import { LockClosedIcon } from "@heroicons/react/solid";
function Status() {
  return (
    <div className="flex items-center justify-around rounded-full w-[85px] h-6 bg-lightRed">
      <p className="text-xs text-darkRed font-medium">pending</p>
    </div>
  );
}

export default Status;

import { LockClosedIcon } from "@heroicons/react/solid";
function Status() {
  return (
    <div className="flex items-center justify-around rounded-full w-[85px] h-6 bg-yellow-500/20">
      <p className="text-xs text-yellow-500 font-medium">pending</p>
    </div>
  );
}

export default Status;

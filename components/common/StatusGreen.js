import { CheckCircleIcon } from "@heroicons/react/solid";

function StatusGreen() {
  return (
    <div className="flex items-center justify-around rounded-full w-[85px] h-6 bg-lightGreen">
      <CheckCircleIcon className="h-4 w-4 text-darkGreen" />
      <p className="text-xs text-darkGreen font-medium">Done</p>
    </div>
  );
}

export default StatusGreen;

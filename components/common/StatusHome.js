import { StarIcon } from "@heroicons/react/solid";

function StatusHome() {
  return (
    <div className="flex items-center justify-around rounded-full w-[85px] h-6 bg-lightGreen">
      <StarIcon className="h-4 w-4 text-darkGreen" />
      <p className="text-xs text-darkGreen font-medium">Started</p>
    </div>
  );
}

export default StatusHome;

import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";

export const ClosedIcon = () => {
  return (
    <div className="bg-[#FFCCD5] p-1 rounded-full ml-2">
      <LockClosedIcon className="h-4 w-4 text-[#FF4D6D]" />
    </div>
  );
};

export const OpenIocn = () => {
  return (
    <div className="bg-[#D8F3DC] p-1 rounded-full ml-2">
      <LockOpenIcon className="h-4 w-4 text-[#06D6A0]" />
    </div>
  );
};

import Image from "next/image";
import pic from "../../public/icon.png";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/mainContext";
import { MenuAlt4Icon } from "@heroicons/react/outline";

function Navbar() {
  const ctx = useContext(UserContext);
  const { data: session, status } = useSession();
  ctx.setSession(session);
  // ctx.setLoading(status);
  // console.log(session, status);
  const [isOpen, setIsOpen] = useState(false);
  const [transform, setTransform] = useState("-translate-x-full");
  const [rotate, setRotate] = useState("rotate-0");

  const navbarHandler = () => {
    if (!isOpen) {
      setTransform("translate-x-0");
      setRotate("rotate-90");
    } else {
      setTransform("-translate-x-full");
      setRotate("rotate-0");
    }
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    ctx.setUserId("404");
    ctx.setSession({});
    navbarHandler();
    signOut();
  };

  return (
    <div className="bg-background pt-6">
      <div
        onClick={navbarHandler}
        className="shadow-xl shadow-red-100  z-[100] bg-red-100 rounded-full p-2 fixed top-4 left-6 cursor-pointer md:hidden"
      >
        <MenuAlt4Icon
          className={`${rotate} transition-all duration-300 h-6 w-6 text-darkRed`}
        />
      </div>
      <div className=" block md:hidden relative h-8 w-40 mx-auto md:mx-0">
        <Image
          src={pic}
          objectFit="contain"
          className=" h-full object-contain"
        />
      </div>
      <div
        className={`${transform} transition-all duration-300 z-[90]  top-0 fixed py-4 bg-white h-screen  md:h-20 w-screen md:px-2 lg:px-10 md:translate-x-0`}
      >
        <div
          className={
            "mx-auto space-y-6 md:space-y-0 h-full w-[300px] md:w-full md:rounded-full flex flex-col md:flex-row md:items-center justify-between px-8"
          }
        >
          <div className="hidden md:block relative h-8 w-40 mx-auto md:mx-0">
            <Image
              src={pic}
              objectFit="contain"
              className=" h-full object-contain"
            />
          </div>
          <ul className="flex flex-col md:flex-row space-y-12 md:space-x-12 md:space-y-0 items-center justify-around md:justify-start md:px-4 md:rounded-lg bg-white h-full">
            <li
              onClick={navbarHandler}
              className="px-4 py-1 transition-all hover:text-white rounded-full hover:bg-[rgba(109,74,181,0.7)]"
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className="px-4 py-1 transition-all hover:text-white rounded-full hover:bg-[rgba(109,74,181,0.7)]"
              onClick={navbarHandler}
            >
              <Link href="/">About</Link>
            </li>
            <li
              className="px-4 py-1 transition-all  hover:text-white rounded-full hover:bg-[rgba(109,74,181,0.7)]"
              onClick={navbarHandler}
            >
              <Link href="/">Contact</Link>
            </li>
            {status == "loading" && <p className="text-lg animate-ping">...</p>}
          </ul>
          {!session && (
            <Link href="/auth">
              <li
                onClick={navbarHandler}
                className="hover:opacity-90 flex justify-center items-center md:block cursor-pointer bg-darkBlue px-10 py-3 rounded-[10px]  text-white text-sm font-medium"
              >
                Login
              </li>
            </Link>
          )}
          {session && (
            <li
              onClick={logoutHandler}
              className="hover:opacity-90 flex justify-center items-center md:block cursor-pointer bg-darkRed px-10 py-3 rounded-[10px]  text-white text-sm font-medium"
            >
              Singn Out
            </li>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

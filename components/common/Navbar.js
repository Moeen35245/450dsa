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
  // ctx.setSession(session);
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
    <nav className="relative px-5 py-3 flex dark:text-white bg-icream dark:bg-idark ">
      <div
        onClick={navbarHandler}
        className="z-[101] md:hidden space-y-1 fixed top-4 right-3 cursor-pointer"
      >
        <div
          className={`${
            isOpen && "rotate-90"
          } relative p-2 rounded-full transition-all duration-300 text-inavy  bg-white  shadow-xl shadow-red-50`}
        >
          <MenuAlt4Icon className="text-slate-700 h-5 w-5" />
        </div>
      </div>
      <div className="mx-auto flex flex-1 max-w-[1198px] ">
        <Link href="/">
          <div className="relative w-44">
            <Image
              alt="This basni solar logo"
              src={pic}
              objectFit="contain"
              className="h-full object-contain"
            />
          </div>
        </Link>
        <ul
          className={`z-[100] transition-all md:transition-none duration-300 shadow-xl delay-300 md:shadow-none fixed h-screen w-[85%] md:h-full md:w-fit dark:bg-idark bg-white text-slate-700 md:bg-transparent top-0 right-0 md:static flex-col items-center justify-evenly md:translate-x-0 md:flex-row flex ml-auto space-x-5 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li
            onClick={navbarHandler}
            className="ml-2 px-4 py-1 transition-all hover:text-white rounded-md hover:bg-[rgba(109,74,181,0.7)]"
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className="px-4 py-1 -ml-1 transition-all hover:text-white rounded-md hover:bg-[rgba(109,74,181,0.7)]"
            onClick={navbarHandler}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="px-4 py-1 transition-all hover:text-white rounded-md hover:bg-[rgba(109,74,181,0.7)]"
            onClick={navbarHandler}
          >
            <Link href="" target="_blank">
              Contact
            </Link>
          </li>

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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// <nav className="bg-background pt-6">
//   <div
//     onClick={navbarHandler}
//     className="shadow-xl shadow-red-100  z-[100] bg-red-100 rounded-full p-2 fixed top-4 left-6 cursor-pointer md:hidden"
//   >
//     <MenuAlt4Icon
//       className={`${rotate} transition-all duration-300 h-6 w-6 text-darkRed`}
//     />
//   </div>
//   <div className=" block md:hidden relative h-8 w-40 mx-auto md:mx-0">
//     <Image
//       src={pic}
//       objectFit="contain"
//       className=" h-full object-contain"
//     />
//   </div>
//   <div
//     className={`${transform} transition-all duration-300 z-[90]  top-0 fixed py-4 bg-white h-screen  md:h-20 w-screen md:px-2 lg:px-10 md:translate-x-0`}
//   >
//     <div
//       className={
//         "mx-auto space-y-6 md:space-y-0 h-full w-[300px] md:w-full md:rounded-full flex flex-col md:flex-row md:items-center justify-between px-8"
//       }
//     >
//       <div className="hidden md:block relative h-8 w-40 mx-auto md:mx-0">
//         <Image
//           alt="love babbar sde sheet"
//           src={pic}
//           objectFit="contain"
//           className=" h-full object-contain"
//         />
//       </div>
//       <ul className="flex flex-col md:flex-row space-y-12 md:space-x-12 md:space-y-0 items-center justify-around md:justify-start md:px-4 md:rounded-lg bg-white h-full">
//         <li
//           onClick={navbarHandler}
//           className="px-4 py-1 transition-all hover:text-white rounded-full hover:bg-[rgba(109,74,181,0.7)]"
//         >
//           <Link href="/">Home</Link>
//         </li>

//         <li
//           className="px-4 py-1 transition-all hover:text-white rounded-full hover:bg-[rgba(109,74,181,0.7)]"
//           onClick={navbarHandler}
//         >
//           <Link href="/about">About</Link>
//         </li>
//         <li
//           className="px-4 py-1 transition-all  hover:text-white rounded-full hover:bg-[rgba(109,74,181,0.7)]"
//           onClick={navbarHandler}
//         >
//           <Link href="" target="_blank">
//             Contact
//           </Link>
//         </li>
//       </ul>
//       {!session && (
//         <Link href="/auth">
//           <li
//             onClick={navbarHandler}
//             className="hover:opacity-90 flex justify-center items-center md:block cursor-pointer bg-darkBlue px-10 py-3 rounded-[10px]  text-white text-sm font-medium"
//           >
//             Login
//           </li>
//         </Link>
//       )}
//       {session && (
//         <li
//           onClick={logoutHandler}
//           className="hover:opacity-90 flex justify-center items-center md:block cursor-pointer bg-darkRed px-10 py-3 rounded-[10px]  text-white text-sm font-medium"
//         >
//           Singn Out
//         </li>
//       )}
//     </div>
//   </div>
// </nav>

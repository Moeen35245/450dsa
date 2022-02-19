import Image from "next/image";
import headerpic from "../../public/headerpic.svg";
function Header() {
  return (
    <div className="mt-8 px-12 md:rounded-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-12 bg-indigo-100 max-w-[1160px]">
      <div className="md:pt-0 pt-20 right-half flex justify-center flex-col">
        <div className="mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-darkBlue">450</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-700">
            DSA TRACKER
          </h1>
        </div>
        <div className="text-slate-700 text-lg font-semibold md:ml-4">
          <p>
            Enhance your data structures and algorithems skill by solving
            <span className="hover:italic hover:underline text-darkRed">
              <a
                href="https://www.youtube.com/c/codehelpbybabbar"
                rel="noreferrer"
                target="_blank"
                className="transition-all"
              >
                &nbsp;Love Babbar&#39;s&nbsp;
              </a>
            </span>
            dsa 450 sde sheet.
          </p>
        </div>
      </div>
      <div className="p-4 left-half pb-20 md:pb-0 flex justify-center flex-grow">
        <div className="mt-auto relative h-[320px] w-[320px] md:h-[380px] md:w-[380px]">
          <Image src={headerpic} objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default Header;

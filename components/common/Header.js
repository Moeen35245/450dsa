import Image from "next/image";
import headerpic from "../../public/headerpic.svg";
function Header() {
  return (
    <>
      <article className="mt-8 px-12 md:rounded-3xl mx-auto flex flex-col gpa-4 justify-center items-center mb-12 bg-indigo-100 max-w-[1160px] p-7">
        <img
          className="h-12 w-12 object-cover rounded-full mb-4"
          src="https://logowik.com/content/uploads/images/buy-me-a-coffee6984.jpg"
        />
        <h5 className="text-center font-semibold">
          If you’ve found value in the content I create, consider buying me a
          coffee! Your support helps keep the work going—allowing me to improve
          and keep providing fresh, helpful resources for your interview prep
          journey.
        </h5>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://buymeacoffee.com/moeen8766"
          className="mt-4 px-6 py-3 rounded-full bg-darkBlue hover:scale-105 text-white max-w-fit transition-all"
        >
          Buy me a Coffee
        </a>
      </article>
      <article className="mt-8 px-12 md:rounded-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-12 bg-indigo-100 max-w-[1160px]">
        <div className="md:pt-0 pt-20 right-half flex justify-center flex-col">
          <div className="mx-auto">
            <h1 className="text-5xl  md:text-7xl font-bold text-darkBlue">
              <span className="text-darkBlue block">450</span>{" "}
              <span className="text-slate-700">DSA TRACKER</span>
            </h1>
          </div>
          <div className="text-slate-700 text-lg font-semibold md:ml-4">
            <p>
              Enhance your data structures and algorithems skill by solving
              <span className="hover:italic hover:underline text-darkRed">
                <a
                  href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/"
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
            <Image
              alt="love babbar sde sheet"
              src={headerpic}
              objectFit="contain"
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Header;

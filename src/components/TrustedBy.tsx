import { BsStarFill } from "react-icons/bs";

export const TrustedBy = () => {
  return (
    <div className=" py-10 bg-[#4D5745] text-white flex flex-col md:flex-row justify-between items-center lg:px-40 md:px-10">
      <div className="w-83">
        <h1 className="text-2xl">
          Trusted by over 10,000+ clients worldwide since 2018.
        </h1>
      </div>

      <div className="flex gap-5 mt-5 md:mt-0">
        <div className=" w-40 h-32 border border-green-200 rounded p-3 flex flex-col justify-between">
          <h1 className="text-5xl font-semibold">4.8</h1>
          <div className="flex text-yellow-400 ">
            <BsStarFill className="size-5" />
            <BsStarFill className="size-5" />
            <BsStarFill className="size-5" />
            <BsStarFill className="size-5" />
            <BsStarFill className="size-5" />
          </div>
          <p className="text-sm">4,300 ratings</p>
        </div>

        <div className=" w-40 h-32 border border-green-200 rounded p-3 flex flex-col justify-between">
          <h1 className="text-5xl font-semibold">1.7M</h1>
          <p className="text-sm">Worldwide product sold per year.</p>
        </div>
      </div>
    </div>
  );
};

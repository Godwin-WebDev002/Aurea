import SubscribeIMG from "../components/assets/image/SubscribeIMG.jpg";

export const Subscribe = () => {
  return (
    <div className=" px-5 sm:px-10 overflow-none ">
      <div className=" py-20 flex justify-between items-center flex-col md:flex-row ">
        <div className="w-[100%] md:w-[40%] mb-10 md:mb-0">
          <h1 className="text-5xl">Subscribe To Our Newsletter</h1>
          <p className="my-6">
            Subscribe to our newsletter and become part of a community that
            believes in radiant skin and radiant planet.
          </p>

          <div className="bg-white w-[100%] flex justify-between p-1 pl-3 rounded shadow ">
            <input
              type="text"
              placeholder="Enter your email here"
              className=" w-[70%] text-black font-semibold"
            />
            <button className=" px-5 py-2 bg-[#4D5745] text-white font-semibold rounded cursor-pointer hover:bg-green-800">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src={SubscribeIMG}
          alt="SubN"
          className=" w-[100%] md:w-[55%] h-80 rounded-md"
        />
      </div>

      <div className="border-b-2 border-white w-[100%] rounded-full" />
    </div>
  );
};

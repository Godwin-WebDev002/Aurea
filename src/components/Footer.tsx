import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="py-10 flex flex-row-reverse lg:flex-row  justify-between bg-[#EAF2E9] px-5 sm:px-10 ">
      <div>
        <h1 className="text-2xl mb-3">Aurea</h1>

        <p className="flex items-center gap-1">
          <PiPhoneCall /> +1234567890
        </p>
        <p className="flex items-center gap-1">
          <BiEnvelope /> aurea@support.com
        </p>
        <p className="flex items-center gap-1">
          <BiCalendar /> <span>Mon Sat 8am-7pm GMT</span>
        </p>
      </div>

      <div className="w-[65%] flex flex-col lg:flex-row justify-between  ">
        <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
          <h1 className="font-bold mb-2">Navigation</h1>

          <p className="hover:border-b w-fit pt-1">Home</p>
          <p className="hover:border-b w-fit pt-1">Our Products</p>
          <p className="hover:border-b w-fit pt-1">Collection</p>
        </div>

        <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
          <h1 className="font-bold mb-2">Company</h1>

          <p className="hover:border-b w-fit pt-1">About Us</p>
          <p className="hover:border-b w-fit pt-1">Testimonials</p>
          <p className="hover:border-b w-fit pt-1">Subscribe</p>
        </div>

        <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
          <h1 className="font-bold mb-2">Resources</h1>

          <p className="hover:border-b w-fit pt-1">Privacy Policy</p>
          <p className="hover:border-b w-fit pt-1 leading-4">
            Terms and <br /> Conditions
          </p>
        </div>

        <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
          <h1 className="font-bold mb-2">Services</h1>

          <p className="hover:border-b w-fit pt-1">Contact</p>
        </div>

        <div>
          <h1 className="font-bold mb-2">Social Media</h1>

          <div className="flex gap-2 text-[#4D5745] text-2xl ">
            <BsTwitter /> <BsYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

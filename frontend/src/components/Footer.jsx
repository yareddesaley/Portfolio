import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-200">
      <hr className="w-full border-t-2 border-green-500 mt-10 " />
      <div className="flex flex-col gap-10 md:flex md:flex-row justify-center md:gap-72 pt-3 pb-20 md:ml-20 items-center ">
        <div className="flex flex-col  items-center">
          <h1>Contacts</h1>
          <hr className="border-b-2 border-green-500 w-1/5 mt-2" />
          <div className="flex gap-14  mt-7">
            <div>
              <span>Phone number:</span>
              <br />
              <span>+251919059501</span>
              <br />
              <span>Phone number:</span>
              <br />
              <span>+251985575382</span>
              <br />
            </div>
            <div>
              <span>Email Address:</span>
              <br />
              <span>Yared.desu@gmail.com</span>
              <br />
              <span>Telegram UserName:</span>
              <br />
              <span>t.me/Yadu_follow</span>
              <br />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center ">
          <label htmlFor="email">Send me an Email : </label>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter an email"
              id="email"
              className="outline-none px-3 py-3 rounded-l-xl w-full"
            />
            <button className="bg-green-500 px-4 text-white rounded-r-xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Footer from "./Footer";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center md:flex md:flex-row md:justify-center gap-16 md:gap-32 mt-32">
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email : </label>
        <span id="email" className="font-semibold">
          Yared.desu@gmail.com
        </span>

        <label htmlFor="email">Phone Number : </label>
        <span id="email" className="font-semibold">
          +251919059501
        </span>

        <label htmlFor="email">Phone Number : </label>
        <span id="email" className="font-semibold">
          +251985575382
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Whats App : </label>
        <span id="email" className="font-semibold">
          +251919059501
        </span>

        <label htmlFor="email">Telegram User Name : </label>
        <span id="email" className="font-semibold">
          t.me/Yadu_follow
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Location</h1>
          <div className="flex flex-col gap-3">
            <span>
              Country : <span className="font-semibold"> Ethiopia</span>
            </span>
            <div>
              <span>
                City :{" "}
                <span className="font-semibold">Addis Ababa, Akaki Qaliti</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

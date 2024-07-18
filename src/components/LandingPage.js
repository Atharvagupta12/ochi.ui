import React from "react";
import { SlActionRedo } from "react-icons/sl";
import Image from "../assets/Expression-removebg-preview.png";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="landing flex ">
        <div className="textstructure mt-56">
          <div className="masker">
            <h1
              className="text-[7vw] font-medium uppercase px-[5vw] leading-[6vw] tracking-tighter
            "
            >
              We Create
            </h1>
          </div>
          <div className="masker flex">
            <div className="w-[8vw] h-[5.3vw] mt-3 ml-20 rounded-md bg- bg-orange-500"></div>
            <h1
              className="text-[7vw] font-medium uppercase  px-2 leading-[6vw] tracking-tighter
            "
            >
              Eye-Opening
            </h1>
          </div>
          <div className="masker">
            <h1
              className="text-[7vw] font-medium uppercase  px-[5vw] leading-[6vw] tracking-tighter
            "
            >
              Presentations
            </h1>
          </div>
          {/* <div className="readbtn">
          <button className="px-5 py-2 bg-orange-600 font-semibold mt-6 mx-20 rounded-3xl">Read more</button>
        </div> */}
        </div>

        <div className="image py-[11vh]">
          <img src={Image} alt="Image" />
        </div>
      </div>
      <div
        className="border-t-2 text-white border-zinc-800  flex
       justify-between items-start py-5 px-20"
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light py-3 leading-none">{item}</p>
        ))}
        <div className="start flex gap-4">
          <div
            className="px-4 py-1 text-md border-[2px] border-zinc-600   
          rounded-full cursor-pointer uppercase "
          >
            Start The Project
          </div>
          <div
            className="w-9 h-9 text-[20px] border-[2px] border-zinc-600 items center
             justify-center rounded-full py-1 px-2"
          >
            <SlActionRedo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

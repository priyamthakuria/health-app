import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[50vh] bg-[url('https://miro.medium.com/v2/resize:fit:1200/1*a7n0WP59Wkh3wDKaMrbAYA.jpeg')] bg-center bg-repeat-x bg-cover flex flex-col items-center justify-center"
    >
      <h1 className="text-[#623613] text-[70px] leading-none font-bold translate-y-11">BLOG</h1>
      {/* <p className="text-[20px] px-4 py-2 rounded-md ">Code for Interview</p> */}
    </div>
  );
};

export default Banner;

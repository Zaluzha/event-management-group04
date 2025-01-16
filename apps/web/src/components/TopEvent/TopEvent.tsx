import React from "react";

const TopEvent = () => {
  return (
    <div className="flex flex-col mt-[3rem] px-[5rem]">
      <p className="">Top Trending In Jakarta Pusat</p>
      <div className="flex justify-between">
        <a
          href="/details-event"
          className="flex w-[15rem] gap-y-[0.5rem] flex-col shadow-lg rounded-[8px]"
        >
          <img className="h-[10rem]" src="/Event1.jpg" alt="" />
          <div className="pl-[0.5rem]">
            <p>SUN International Education Expo 2025 Jakarta & Tangerang</p>
            <p>Saturday • 1:00 PM + 1 more</p>
          </div>
        </a>
        <a
          href="/details-event"
          className="flex w-[15rem] gap-y-[0.5rem] flex-col shadow-lg rounded-[8px]"
        >
          <img className="h-[10rem]" src="/Event1.jpg" alt="" />
          <div className="pl-[0.5rem]">
            <p>SUN International Education Expo 2025 Jakarta & Tangerang</p>
            <p>Saturday • 1:00 PM + 1 more</p>
          </div>
        </a>
        <a
          href="/details-event"
          className="flex w-[15rem] gap-y-[0.5rem] flex-col shadow-lg rounded-[8px]"
        >
          <img className="h-[10rem]" src="/Event1.jpg" alt="" />
          <div className="pl-[0.5rem]">
            <p>SUN International Education Expo 2025 Jakarta & Tangerang</p>
            <p>Saturday • 1:00 PM + 1 more</p>
          </div>
        </a>
        <a
          href="/details-event"
          className="flex w-[15rem] gap-y-[0.5rem] flex-col shadow-lg rounded-[8px]"
        >
          <img className="h-[10rem]" src="/Event1.jpg" alt="" />
          <div className="pl-[0.5rem]">
            <p>SUN International Education Expo 2025 Jakarta & Tangerang</p>
            <p>Saturday • 1:00 PM + 1 more</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopEvent;

import React from 'react';
import {StarIcon} from '@heroicons/react/solid';

export function PartnerShowcase() {
  return (
    <div className="partner-showcase-container bg-neutral-100 py-4 flex">
      <div className="reference-container w-[25%] pl-5 border-r border-gray-300">
        <button className=" whitespace-nowrap text-sm w-[12rem] h-[2.5rem] rounded-lg cursor-pointer bg-gray-200 border border-black font-medium">
          #1 Doctor Recommended
        </button>
        <div className="flex whitespace-nowrap my-2 flex items-center">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          &nbsp;12,000+ 5-star Reviews
        </div>
      </div>
      <div className="partner-showcase-content flex justify-center items-center w-[75%] mx-20">
        <div className="partner-showcase-content flex justify-center items-center space-x-2 w-full">
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img
              src="/Rolling_Stone_logo 1.svg"
              alt="Rolling Stone"
              className="h-5 m-3"
            />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img
              src="/MEN's Journal.svg"
              alt="Men's Journal"
              className="h-4 m-3"
            />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img src="/LAWEEKLY.svg" alt="LAWEEKLY" className="h-4 m-3" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img src="/HERB.png" alt="Rolling Stone" className="h-4 m-3" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img
              src="/THE NEW YORK TIMES.svg"
              alt="Men's Journal"
              className="h-4 m-3"
            />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img src="/BBCICON.svg" alt="Herb" className="h-4 m-3 w-full" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img
              src="/Rolling_Stone_logo 1.svg"
              alt="Rolling Stone"
              className="h-4 m-3"
            />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white w-full">
            <img
              src="/MEN's Journal.svg"
              alt="Men's Journal"
              className="h-4 m-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

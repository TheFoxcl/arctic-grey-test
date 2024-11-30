import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid';

function CardInvert({
  image,
  objectPosition,
  title,
  phrase,
  scale,
}: {
  image?: string;
  objectPosition?: string;
  title?: string;
  phrase?: string;
  scale?: number;
}) {
  const scaleInitial = scale;
  const scaleHover = scale ? scale + 0.05 : 1.05;
  return (
    <div className="group relative w-[19%] h-full rounded-md overflow-hidden">
      <div className="overflow-hidden w-full relative rounded-md overflow-hidden h-[25rem]">
        <img
          src={image}
          alt="Cognitive Function"
          className={`w-full h-full object-cover object-center transform scale-y-[1.1] scale-x-[-1.1] transition-transform duration-800 group-hover:scale-y-[1.15] group-hover:scale-x-[-1.15]`}
          style={{objectPosition}}
        />
      </div>
      <div className="p-3 w-[90%]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-base mb-4">{phrase}</p>
      </div>
      <div className="w-[30%]">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-black absolute bottom-12 right-0 group-hover:bg-black">
          <ArrowRightIcon className="arrow-icon w-5 h-5 text-black transition-transform duration-800 rotate--45 group-hover:rotate-0 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function Card({
  image,
  objectPosition,
  title,
  phrase,
  scale,
  bottomPosition,
}: {
  image?: string;
  objectPosition?: string;
  title?: string;
  phrase?: string;
  scale?: number;
  bottomPosition?: string;
}) {
  const scaleInitial = scale ? scale : 1;
  const scaleHover = (scale ? scale + 0.05 : 1.05).toString();
  return (
    <div className="group relative w-[19%] h-full rounded-md overflow-hidden ">
      <div className="overflow-hidden w-full relative rounded-md overflow-hidden transition-transform duration-800 h-[25rem]">
        <img
          src={image}
          alt="Cognitive Function"
          className={`w-full h-full object-cover object-center scale-[1] transform transition-transform duration-800 group-hover:scale-[1.15]`}
          style={{objectPosition}}
        />
      </div>
      <div className="p-4 relative z-10">
        <h3 className="text-xl font-semibold mb-2 text-xl">{title}</h3>
        <p className="text-base mb-4">{phrase}</p>
      </div>
      <div className="w-[30%]">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-full border border-black absolute bottom-20 right-0 group-hover:bg-black"
          style={{bottom: bottomPosition}}
        >
          <ArrowRightIcon
            className="arrow-icon w-5 h-5 text-black transition-transform duration-800 rotate--45 group-hover:rotate-0 group-hover:text-white"
            style={{objectPosition}}
          />
        </div>
      </div>
    </div>
  );
}

export function CardContainer() {
  return (
    <>
      <div className="flex items-center text-center mt-12 flex-col">
        <h4>COMFORTABLY UNCOMFORTABLE</h4>
        <h1 className="text-[2.5rem] m-0 font-medium">Start with your Goals</h1>
        <br />
        <p>
          We cannot become what we want to be <br />
          by remaining what we are.
        </p>
      </div>
      <div className="card-container py-8 flex justify-around flex-wrap gap-4 px-8">
        <CardInvert
          image="/cardGoal1.jpeg"
          objectPosition="85%"
          title="Sleep"
          phrase="Optimize your sleep patterns."
          scale={1.1}
        />
        <Card
          image="/goalCard2.jpeg"
          objectPosition="50%"
          title="Cognitive Function"
          phrase="Enhance your brain's performance and connectivity"
          scale={1}
        />
        <Card
          image="/cardGoal3.jpeg"
          objectPosition="50%"
          title="Foundational Health"
          phrase="Promoting healthy, natural deep sleep day to day"
          scale={1}
        />
        <Card
          image="/cardGoal4.jpeg"
          objectPosition="35%"
          title="Athletic Performance"
          phrase="Increase your healthy tissue, muscle, and energy"
          scale={1}
        />
        <Card
          image="/cardGoal5.jpeg"
          objectPosition="50%"
          title="Hormone Support"
          phrase="Boost your mood, libido, and vitality"
          scale={1}
          bottomPosition="4rem"
        />
      </div>
    </>
  );
}

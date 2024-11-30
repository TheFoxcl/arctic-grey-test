import React from 'react';
import {ThumbUpIcon} from '@heroicons/react/solid';

function IconMessageComponent({
  image,
  title,
  text1,
  text2,
}: {
  image?: string;
  title?: string;
  text1?: string;
  text2?: string;
}) {
  return (
    <div className="flex flex-col p-2 rounded-md space-y-1 w-[24%]">
      <img src={image} alt="Like" className="w-12 h-12 mb-8" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <span className="text-md font-normal">
        {text1} <br /> {text2}
      </span>
    </div>
  );
}

export function HealthFitness() {
  return (
    <div className="Health-Fitness-container bg-white py-20 px-8 flex flex-wrap">
      <div className="flex flex-col w-full">
        <h4>🧐 Why Health & Fitness</h4>
        <h1 className="text-[2.5rem] m-0 font-medium">
          Clean Supplements -<br /> Made For You
        </h1>
        <br />
      </div>
      <div className="mt-4 flex justify-around flex-wrap gap-4 w-full">
        <IconMessageComponent
          image="/like.svg"
          title="We Make It Easy"
          text1="Personalized Solutions & Guidance Mean You"
          text2="Get Just What You Need Nothing More"
        />
        <IconMessageComponent
          image="/plant.svg"
          title="Clean & Effective"
          text1="Proven Ingredients, not Artificial, Crafted By"
          text2="Experts For Optimal Effectiveness"
        />
        <IconMessageComponent
          image="/comunicationIcon.svg"
          title="Your Free Dietitian"
          text1="Every Gainful Subscriber Gets Free, 1:1 Access"
          text2="Their Own Registered Dietitian."
        />
        <IconMessageComponent
          image="/survyIcon.svg"
          title="Made For You"
          text1="Performance is Personal. Personalized &"
          text2="Customizable Products For Your Needs, Body & Goals"
        />
      </div>
    </div>
  );
}

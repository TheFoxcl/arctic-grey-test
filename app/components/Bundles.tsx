import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import {CardProduct} from './productCard';

export function CardContainerBundles() {
  return (
    <>
      {' '}
      <div className="flex py-20 px-8 bg-white relative flex-wrap items-center justify-center">
        <div className="w-full flex items-center ">
          <div className="text-container flex-col w-[20%]">
            {' '}
            <p>📦 Goals Specific</p>{' '}
            <h1 className="text-[2.5rem] m-0 font-medium">Bundles</h1>{' '}
          </div>
          <div className="flex items-center text-sm w-[60%] space-x-6">
            <Link
              to="/shop"
              className="flex-grow text-black hover:text-gray-700"
            >
              Sleep
            </Link>
            <Link
              to="/science"
              className="flex-grow text-black hover:text-gray-700 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0"
            >
              Cognitive Function
            </Link>
            <Link
              to="/podcasts"
              className="flex-grow text-black hover:text-gray-700"
            >
              Foundational Health
            </Link>
            <Link
              to="/trainers"
              className="flex-grow text-black hover:text-gray-700"
            >
              Athletic Performance
            </Link>
            <Link
              to="/blog"
              className="flex-grow text-black hover:text-gray-700"
            >
              Hormone Support
            </Link>
          </div>
          <div className="flex flex-nowrap items-center">
            <Link to="/blog" className="mr-5">
              View All Bundles
            </Link>
            <div className="group flex border border-gray-300 rounded-md w-10 h-10 items-center justify-center  bg-neutral-100 cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
              {' '}
              <ArrowRightIcon className="w-4 h-3 text-black transform rotate-180 group-hover:text-white " />{' '}
            </div>{' '}
            <div className="group flex border border-gray-300 rounded-md ml-2 w-10 h-10 items-center justify-center  bg-neutral-100 cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
              <ArrowRightIcon className="w-4 h-3 text-black group-hover:text-white" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-around gap-4 mt-10">
          <CardProduct
            image="/bundle1.png"
            title="Tongkat & Fadogia 60 Day Supply"
            phrase="Hormone Support"
            scale={1}
            price={49.95}
            rating={5}
            features={['GMO free', 'Dairy Free']}
            bestseller={true}
            bg2="bg-white"
            bg="bg-neutral-100"
            putPrice={false}
          />
          <CardProduct
            image="/bundle2.png"
            title="Tongkat & Fadogia 60 Day Supply"
            phrase="Hormone Support"
            scale={1}
            price={49.95}
            rating={5}
            features={['GMO free', 'Gluten free']}
            bestseller={false}
            bg2="bg-white"
            bg="bg-neutral-100"
            putPrice={false}
          />
          <CardProduct
            image="/bundle3.png"
            title="Grass Fed Whey Protein Isolate Powder"
            phrase="Supports muscle mass and strength"
            scale={1}
            price={49.95}
            rating={5}
            features={['GMO free', 'Vegan', 'Dairy Free']}
            bestseller={false}
            bg2="bg-white"
            bg="bg-neutral-100"
            putPrice={false}
          />
          <CardProduct
            image="/bundle4.png"
            title="Complete Sleep Bundle"
            phrase="Deepens sleep cycles for rejuvenated mornings"
            scale={1}
            price={49.95}
            rating={5}
            features={['Gluten free', 'Vegan', 'Dairy Free']}
            bestseller={false}
            bg2="bg-white"
            bg="bg-neutral-100"
            isNew={true}
            putPrice={false}
          />
        </div>
      </div>{' '}
    </>
  );
}

import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import {CardProduct} from './productCard';

export function CardContainerSupplements() {
  return (
    <>
      {' '}
      <div className="flex items-center justify-center py-20 px-8 bg-neutral-100 relative flex-wrap">
        <div className="w-full flex items-center justify-center">
          <div className="group flex border border-gray-300 rounded-md w-8 h-8 items-center justify-center cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
            {' '}
            <ArrowRightIcon className="w-4 h-3 text-black transform rotate-180 group-hover:text-white" />{' '}
          </div>{' '}
          <div className="text-container flex-col text-center px-20">
            {' '}
            <p>🌟 Trending</p>{' '}
            <h1 className="text-[2.5rem] m-0 font-medium">Supplements</h1>{' '}
            <Link to="/" className="pl-3">
              {' '}
              view all{' '}
            </Link>{' '}
          </div>
          <div className="group flex border border-gray-300 rounded-md w-8 h-8 items-center justify-center cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
            <ArrowRightIcon className="w-4 h-3 text-black group-hover:text-white" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-around gap-4 mt-10">
          <CardProduct
            image="/supplement1.png"
            title="Omega-3"
            phrase="supports cognitive function"
            scale={1}
            price={49.95}
            rating={5}
            features={['GMO free', 'Gluten free', 'Vegan', 'Dairy Free']}
            bestseller={true}
            bg="bg-white"
            bg2="bg-neutral-100"
            putPrice={true}
          />
          <CardProduct
            image="/supplement2.png"
            title="Magnesium L-Threonate"
            phrase="Hormone Support, Foundational Health"
            scale={1}
            price={49.95}
            rating={5}
            features={['GMO free', 'Gluten free']}
            bestseller={false}
            bg="bg-white"
            bg2="bg-neutral-100"
            putPrice={true}
          />
          <CardProduct
            image="/supplement3.png"
            title="Grass Fed Whey Protein Isolate Powder"
            phrase="Supports muscle mass and strength"
            scale={1}
            price={49.95}
            rating={5}
            features={['GMO free', 'Vegan', 'Dairy Free']}
            bestseller={false}
            bg="bg-white"
            bg2="bg-neutral-100"
            putPrice={true}
          />
          <CardProduct
            image="/supplement4.png"
            title="Complete Sleep Bundle"
            phrase="Deepens sleep cycles for rejuvenated mornings"
            scale={1}
            price={49.95}
            rating={5}
            features={['Gluten free', 'Vegan', 'Dairy Free']}
            bestseller={true}
            bg="bg-white"
            bg2="bg-neutral-100"
            putPrice={true}
          />
        </div>
      </div>{' '}
    </>
  );
}

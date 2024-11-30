import React from 'react';
import '../styles/pasarela.css';
import {StarIcon} from '@heroicons/react/solid';

export function ScrollingText() {
  return (
    <div className="marquee-container overflow-hidden whitespace-nowrap h-12 bg-gray-200 flex items-center text-sm font-medium">
      <div className="marquee-content flex items-center text-white">
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">High Quality Ingredients</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">Certified</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 "> Expert Driven</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 whitespace-nowrap">
          {' '}
          Shipped Internationally
        </span>
        {/* Repite el contenido para crear un bucle continuo */}
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">High Quality Ingredients</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">Certified</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 "> Expert Driven</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 whitespace-nowrap">
          {' '}
          Shipped Internationally
        </span>
      </div>
      <div className="marquee-content flex items-center text-white">
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">High Quality Ingredients</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">Certified</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 "> Expert Driven</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 whitespace-nowrap">
          {' '}
          Shipped Internationally
        </span>
        {/* Repite el contenido para crear un bucle continuo */}
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">High Quality Ingredients</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4">Certified</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 "> Expert Driven</span>
        <StarIcon className="h-4 w-4 text-white mr-2" />
        <span className="flex items-center px-4 whitespace-nowrap">
          {' '}
          Shipped Internationally
        </span>
      </div>
    </div>
  );
}

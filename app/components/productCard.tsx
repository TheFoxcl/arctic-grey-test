import {Link} from 'react-router-dom';

export function CardProduct({
  image,
  title,
  phrase,
  price,
  rating,
  features,
  scale,
  isNew,
  bestseller,
  bg,
  bg2,
  putPrice,
}: {
  image?: string;
  title?: string;
  phrase?: string;
  price?: number;
  rating?: number;
  features?: string[];
  scale?: number;
  bestseller?: boolean;
  isNew?: boolean;
  bg?: string;
  bg2?: string;
  putPrice?: boolean;
}) {
  const scaleHover = scale ? scale + 0.05 : 1;
  return (
    <div
      className={`group relative w-[24%] h-[80%] rounded-md overflow-hidden ${bg} shadow-sm`}
    >
      {' '}
      {bestseller && (
        <div className="absolute z-10 top-3 left-3 bg-yellow-200 rounded-md">
          {' '}
          <p className="text-xs px-3 py-1">Bestseller</p>{' '}
        </div>
      )}{' '}
      {isNew && (
        <div className="absolute z-10 top-3 left-3 bg-yellow-200 rounded-md">
          {' '}
          <p className="text-xs px-3 py-1">New</p>{' '}
        </div>
      )}{' '}
      <div className="overflow-hidden w-full relative h-[20rem] flex items-center justify-center">
        {' '}
        <img
          src={image}
          alt={title}
          className={`w-[65%] h-auto transition-transform duration-800 transform group-hover:scale-[1.1]`}
        />{' '}
      </div>{' '}
      <div className="relative h-[12rem]">
        {' '}
        <div className="group-hover:hidden">
          {' '}
          <div className="flex flex-wrap gap-2 mb-4 pl-4">
            {' '}
            {features?.map((feature, index) => (
              <span
                key={index}
                className={`text-[10px] text-black px-2 py-1 rounded-md ${bg2}`}
              >
                {' '}
                <span className="text-md">•</span> {feature}{' '}
              </span>
            ))}{' '}
          </div>{' '}
          <div className="px-4 w-full flex flex-col">
            {' '}
            <h3 className="text-lg font-medium">{title}</h3>{' '}
            <p className="text-sm text-gray-600 mb-2">{phrase}</p>{' '}
            <div className="flex justify-between items-center mb-3">
              {' '}
              <div className="flex items-center">
                {' '}
                {Array(rating)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className="text-black">
                      {' '}
                      ★{' '}
                    </span>
                  ))}{' '}
              </div>{' '}
              <button className="flex items-center justify-center text-white bg-black rounded-md text-sm py-1 px-2 font-light">
                {' '}
                {putPrice ? `Add • $${price}` : 'Add to Cart'}{' '}
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center ${bg} transition-transform duration-800 ease-in-out transform translate-y-full group-hover:translate-y-0`}
        >
          {' '}
          <div
            className={`flex flex-col items-center justify-center ${bg} p-4`}
          >
            {' '}
            <div className="flex items-center space-x-4 w-full">
              {' '}
              <label
                className={`w-full flex items-center text-xs text-black ${bg2} rounded-md py-2 px-1 cursor-pointer border-2 border-transparent focus-within:border-black`}
              >
                {' '}
                <input
                  type="radio"
                  name={title}
                  value="oneTime"
                  className="mr-2 accent-black mb-4"
                />{' '}
                <span className="flex-1">
                  One-Time Purchase{' '}
                  <span className="font-semibold">${price}</span>
                </span>{' '}
              </label>{' '}
              <label
                className={`w-full flex items-center justify-between text-xs text-black ${bg2} rounded-md py-2 px-1 cursor-pointer border-2 border-transparent focus-within:border-black`}
              >
                {' '}
                <input
                  type="radio"
                  name={title}
                  value="subscribeSave"
                  className="mr-2 accent-black mb-4"
                />{' '}
                <span className="flex-1">
                  Subscribe & Save{' '}
                  <span className="font-semibold">
                    ${price ? (price * 0.9).toFixed(2) : 40}
                  </span>
                  &ensp;
                  <span className="text-[#800000] font-normal">save 10%</span>
                </span>{' '}
              </label>{' '}
            </div>{' '}
          </div>
          <div className="flex items-center justify-center w-full ">
            <button className="flex items-center justify-center text-white bg-black rounded-md text-sm py-1 px-2 font-light w-full mx-4 h-14">
              {' '}
              {`Add • $${price}`}{' '}
            </button>
          </div>
          <Link to="/" className="py-3">
            {' '}
            view full details{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

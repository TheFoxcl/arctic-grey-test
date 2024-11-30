import React from 'react';

export function BackgroundVideo() {
  return (
    <>
      <div className="video-background-container relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/videobanner.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="absolute bottom-10 left-10">
        <h1 className=" text-white text-7xl font-semibold z-20 mb-10">
          Great things never came
          <br />
          from comfort zones.
        </h1>
        <button className=" text-md bg-white w-[10rem] h-[3rem] rounded-lg cursor-pointer">
          Shop Now
        </button>
      </div>
    </>
  );
}

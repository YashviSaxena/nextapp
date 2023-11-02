import React from "react";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";

const Homee = () => {
  return (
    <>
     
      <Navbar/>
      {/* Hero Section Starts here */}
      <main className="flex justify-between ml-20 mt-10 text-text-blue ">
        <div className="flex flex-col ">
          <h1 className="text-5xl font-bold">
            Professionelle <br />
            Entrümpelung & <br />
            Entsorgung zum Festpreis
          </h1>
          <h4 className="text-xs text-gray-500 max-w-md mt-10 leading-6">
            Unsere Entrümpelungsservices bieten professionelle Teams für eine
            einfache, bequeme und sichere Lösung zum Festpreis. Mit kompetenter
            Beratung sind wir Ihre erste Wahl für eine stressfreie Entrümpelung.
          </h4>
          <div className="flex items-center mt-10">
            <button className="bg-blue-900 text-white text-xs px-2 py-3 w-36 rounded-lg mt-5 shadow-md">
              Get Quote
            </button>

            <svg
              className="mt-5 ml-10"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#FFE608" />
              <path
                d="M31 21.6917C31.6667 22.0766 31.6667 23.0388 31 23.4237L20.4135 29.5359C19.7468 29.9208 18.9135 29.4396 18.9135 28.6698V16.4456C18.9135 15.6758 19.7468 15.1946 20.4135 15.5795L31 21.6917Z"
                stroke="#003F78"
                stroke-width="2"
              />
            </svg>
            <h6 className="text-blue-800 mt-5 ml-2">Watch Video</h6>
          </div>
        </div>
        <div className="relative">
          <div className="h-96 w-80 relative top-3 right-4 bg-gradient-to-b from-gray-200 to-gray-500 shadow-md mr-36 rounded-lg ">
                
          </div>
          <svg
            className="absolute top-40 ml-32"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#FFE608" />
            <path
              d="M31 21.6917C31.6667 22.0766 31.6667 23.0388 31 23.4237L20.4135 29.5359C19.7468 29.9208 18.9135 29.4396 18.9135 28.6698V16.4456C18.9135 15.6758 19.7468 15.1946 20.4135 15.5795L31 21.6917Z"
              stroke="#003F78"
              stroke-width="2"
            />
          </svg>
          <svg
            className="absolute right-28 "
            width="82"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41 82C63.6437 82 82 63.6437 82 41C82 18.3563 63.6437 0 41 0C18.3563 0 0 18.3563 0 41C0 63.6437 18.3563 82 41 82ZM41 67.7867C55.7939 67.7867 67.7867 55.7939 67.7867 41C67.7867 26.2061 55.7939 14.2133 41 14.2133C26.2061 14.2133 14.2133 26.2061 14.2133 41C14.2133 55.7939 26.2061 67.7867 41 67.7867Z"
              fill="#003F78"
            />
          </svg>

          <div className="h-48  w-48 absolute top-64 mt-1 ml-1 bottom-48 rounded-lg left-36 bg-custom-blue -z-10"></div>
        </div>
      </main>
      <div className="indicators z-20 relative flex mb-24 ">
                <div className="w-20 h-2 rounded-full bg-custom-blue absolute mt-24 right-60"></div>
                <div className="w-12 h-2 rounded-full bg-gray-300 absolute mt-24 right-44"></div>
                <div className="w-10 h-2 rounded-full bg-gray-300 absolute mt-24 right-32"></div>
          </div>
              {/* Adding Testimonials here */}
              <Testimonial/>

    </>


  );
};

export default Homee;

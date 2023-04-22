// import React from 'react'
// import batman from '../images/batman.jpg'
// import dbd from '../images/dbd.jpg'
// import poster from '../images/games1.avif'
// import gta5 from '../images/gta5.jpg'
// import nfs from '../images/nfs.webp'
// import rocket_league from '../images/rocket_league.jpeg'


// function GameCarousel2() {
//   return (
//     <>
//         {<div
//         id="carouselExampleIndicators"
//         class="relative"
//         data-te-carousel-init
//         data-te-carousel-slide>
//         <div
//             class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//             data-te-carousel-indicators>
//             <button
//             type="button"
//             data-te-target="#carouselExampleIndicators"
//             data-te-slide-to="0"
//             data-te-carousel-active
//             class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             aria-current="true"
//             aria-label="Slide 1"></button>
//             <button
//             type="button"
//             data-te-target="#carouselExampleIndicators"
//             data-te-slide-to="1"
//             class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             aria-label="Slide 2"></button>
//             <button
//             type="button"
//             data-te-target="#carouselExampleIndicators"
//             data-te-slide-to="2"
//             class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             aria-label="Slide 3"></button>
//         </div>


//         <div
//             class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            
//             <div
//             class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-te-carousel-item
//             data-te-carousel-active>
//             <img
//                 src={gta5}
//                 class="block w-full"
//                 alt="Wild Landscape" />
//             </div>
            
//             <div
//             class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-te-carousel-item>
//             <img
//                 src={batman}
//                 class="block w-full"
//                 alt="Camera" />
//             </div>
            
//             <div
//             class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-te-carousel-item>
//             <img
//                 src={poster}
//                 class="block w-full"
//                 alt="Exotic Fruits" />
//             </div>
//         </div>

        
//         <button
//             class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//             type="button"
//             data-te-target="#carouselExampleIndicators"
//             data-te-slide="prev">
//             <span class="inline-block h-8 w-8">
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="h-6 w-6">
//                 <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M15.75 19.5L8.25 12l7.5-7.5" />
//             </svg>
//             </span>
//             <span
//             class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//             >Previous</span
//             >
//         </button>
        
//         <button
//             class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//             type="button"
//             data-te-target="#carouselExampleIndicators"
//             data-te-slide="next">
//             <span class="inline-block h-8 w-8">
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="h-6 w-6">
//                 <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//             </svg>
//             </span>
//             <span
//             class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//             >Next</span
//             >
//         </button>
//         </div>}
//     </>
//   )
// };

// export default GameCarousel2;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import batman from '../images/batman.jpg';
import dbd from '../images/dbd.jpg';
import poster from '../images/games1.avif';
import gta5 from '../images/gta5.jpg';
import nfs from '../images/nfs.webp';
import rocket_league from '../images/rocket_league.jpeg';

function GameCarousel2() {
  return (
    <Carousel showIndicators={true} autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={true}>
      <div>
        <img src={gta5} alt="Grand Theft Auto V" />
      </div>
      <div>
        <img src={batman} alt="Batman" />
      </div>
      <div>
        <img src={poster} alt="Games poster" />
      </div>
      <div>
        <img src={dbd} alt="Dead by Daylight" />
      </div>
      <div>
        <img src={nfs} alt="Need for Speed" />
      </div>
      <div>
        <img src={rocket_league} alt="Rocket League" />
      </div>
    </Carousel>
  );
}

export default GameCarousel2;

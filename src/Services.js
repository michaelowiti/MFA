import React from 'react'
import backgroundImg from './webdesign.jpg';
import backImg from './seo.jpg';
import bacImg from './smm.jpg';
import bacImgb from './branding.jpg';

function Services() {
  return (
	<section>
				<div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-900">
						<h2 className="text-5xl  font-bold text-center dark:text-gray-50">Services  We Offer 🛠️</h2>
						
						<div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-900 dark:text-gray-100">
	<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
		<div className="relative flex items-end justify-start w-full text-left bg-center hover:scale-110 bg-cover h-96 dark:bg-gray-500"style={{
        backgroundImage: `url(${backgroundImg})`,
       
      }} >
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-l font-semibold tracki uppercase dark:text-gray-100 bgundefined">Web Design / Mobile App Development</a>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
		
				</div>
			</div>
			<h2 className="z-10 p-5">
				<p className="font-medium text-md  dark:text-gray-100"> 
				A leading Nairobi digital Marketing agency providing professional web design and Web development.
				</p>
			</h2>
		</div>
		<div className="relative flex items-end justify-start w-full text-left  bg-center hover:scale-110  bg-cover h-96 dark:bg-gray-500" style={{
        backgroundImage: `url(${bacImg})`,
      }} >
		
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-l font-semibold tracki uppercase dark:text-gray-100  bgundefined">Social Media Marketing</a>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<p className="font-medium text-md  dark:text-gray-100">
				We grow your business by finding you new clients through social media networks. Guarantees cost efficiency & gradual growth.
				</p>
			</h2>
		</div>
		<div className="relative flex items-end  hover:scale-110 justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{
        backgroundImage: `url(${backImg})`,
        
      }}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-l  font-semibold tracki uppercase dark:text-gray-100 bgundefined">SEO/SEM Services</a>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<a rel="noopener noreferrer" href="#" className="font-medium text-md  dark:text-gray-100">
				A leading digital marketing agency which specialises in maximising your Company’s SEO performance.
				</a>
			</h2>
		</div>
		<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover hover:scale-110 h-96 dark:bg-gray-500"style={{
        backgroundImage:  `url(${bacImgb})`,
      }}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-l  font-semibold tracki uppercase dark:text-gray-100 bgundefined">Branding</a>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<p className="font-medium text-md dark:text-gray-100">
				We are a digital agency based in Nairobi specialized in building brands. Positioning, visual identity, social, web design, growth & so much more
				</p>
			</h2>
		</div>
	</div>
</div>
					</div>
			
				
				</section>
  )
}

export default Services;

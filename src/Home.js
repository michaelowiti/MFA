import backgroundImg from './webdesign.jpg';
import backImg from './seo.jpg';
import bacImg from './smm.jpg';
import bacImgb from './branding.jpg';
export default function Home(){
    return (
<div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
	<div className="p-6 space-y-8">
		
		<main>
			<div className="container mx-auto space-y-16">
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
                    
						
						<h1 className="text-5xl font-extrabold dark:text-gray-50">
                           Top Web Design & Digital Marketing Agency in Nairobi
                            </h1>
						<p className="my-8">
							<span className="font-medium  text-xl dark:text-gray-50">
                            Unlock Your Brand's Digital Potential 🚀
                            Where Innovation Meets Impact – Your Success,Our Expertise! 💡 
                            #DigitalDominance"                             
                             </span>
                           
						</p>
                        <div>
                        <button className="px-4 py-2 rounded-md dark:bg-violet-400 dark:text-gray-900">
                            Get Started Now!
                        </button>
                        </div>
						
					</div>
					<img src={process.env.PUBLIC_URL + '/images/marketing.jpg'}  alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500" />
				</section>
				
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
		
				<section className="grid gap-6 lg:grid-cols-2">
					<img src={process.env.PUBLIC_URL + '/images/cd.jpg'} alt="" className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500" />
					<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900">
						<img src={process.env.PUBLIC_URL + '/images/cd.jpg'}  alt=""  className="object-cover w-20 h-20 rounded-full dark:bg-gray-500" />
						<blockquote className="max-w-lg text-lg italic font-medium text-center">"Good artists copy,great artist steal!"</blockquote>
						<div className="text-center dark:text-gray-400">
							<p>Creative Director</p>
							<p>Media Forge Agency</p>
						</div>
						
					</div>
					
				</section>
				<section>
					<div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
							<img src={process.env.PUBLIC_URL + '/images/easy.jpg'} alt="" className="object-cover w-full h-auto max-h-96 dark:bg-gray-500" />
							<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-900">
								<span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-400 dark:text-gray-900">Business</span>
								<h2 className="text-3xl font-bold md:flex-1">
								 Why Choose to work with us?
									</h2>
									<p>
										
"At Media Forge Agency, we're dedicated to your online marketing success. With expertise in Digital Strategy, PPC, SEO, Social Media, and more, our customized approach ensures your business thrives. Let us propel your digital presence forward and achieve your goals together."
									</p>
								<div>
									<p className="dark:text-gray-400">November 30, 2020</p>
									<p className="dark:text-gray-400">By Media Forge Agency</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
							<h3 className="inline  font-medium dark:text-gray-50">Customized Soulutions.</h3>
							<p className="inline">Flexible marketing strategies that are perfect for attracting large clientale.</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
							<h3 className="inline font-medium dark:text-gray-50">Strategic Campaigns.</h3>
							<p className="inline">Outcomes look great no matter the business.</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
							<h3 className="inline font-medium dark:text-gray-50">Premium support.</h3>
							<p className="inline">Join over 500 satisfied customers who use our services.</p>
						</div>
					</div>
				</section>
				<section>
					<div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-900">
						<section className="my-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
		<h1 className="p-4 text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
	</div>
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Media Forge's social prowess amplified our brand presence, engagement, and customer interactions effortlessly!.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src={process.env.PUBLIC_URL + '/images/jakaleti.jpg'} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leadi">Jakaleti Animi</p>
				<p className="text-sm uppercase">Customer</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Thanks to your social media wizardry, our brand flourished with heightened visibility, engagement, and connections.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src={process.env.PUBLIC_URL + '/images/and.jpg'} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leadi">Kimani Andrew</p>
				<p className="text-sm uppercase">Customer</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>They provide services that elevate your brand.I highly recommend it!.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src={process.env.PUBLIC_URL + '/images/salma.jpg'} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leadi">Mungai Salma</p>
				<p className="text-sm uppercase">CUstomer</p>
			</div>
		</div>
		
	</div>
</section>
<section className="py-6 dark:bg-gray-800 dark:text-gray-50">
<div className="container mx-auto lg:max-w-screen-md xl:max-w-screen-lg pt-12 pb-16 text-center  text-4xl font-bold "  >Contact us</div>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
       <div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Karen,Nairobi City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+254711911872</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>mforgeagency@gmail.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="enter your name" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="enter email" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
		</form>
	</div>
</section>
					</div>
				</section>
			</div>
            
		</main>
		
	</div>
</div>
   
    )
}
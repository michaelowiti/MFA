import React from 'react'

function AboutUs() {
  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
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
    </div>
  )
}

export default AboutUs

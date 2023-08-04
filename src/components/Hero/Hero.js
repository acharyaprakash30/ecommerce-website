import React from 'react'

const Hero = () => {
  return (
<section class="bg-green w-[90vw] m-auto rounded-xl">
    <div class="grid max-w-screen-xl  mt-2 mx-auto lg:gap-8 xl:gap-0 px-20 py-2 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl  mb-10 font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">Grab Upto 50% Off On Selected Headphone</h1>
            <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center hover:text-green rounded-lg bg-blue hover:bg-pink">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
         
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
</section>

  )
}

export default Hero
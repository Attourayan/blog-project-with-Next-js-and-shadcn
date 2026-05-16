import React from 'react'

const HeroSection = () => {
  return (
    <section className='min-h-[90vh] flex justify-center  px-3 sm:px-6 lg:px-8 overflow-hidden   text-center'>

      <div className="max-h-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 items-center bg-amber-400">
            {/* left content  */}
            <div>
              <h2>Welcome to Our Website</h2>
              <p>Your journey starts here.</p>
            </div>
            {/* right content  */}
            <div>
              <img src="/placeholder.svg" alt="Hero" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

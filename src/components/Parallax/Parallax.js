import React from 'react'

const Parallax = () => {
  return (

<header
style={{backgroundImage:"url('/banner.jpg')"}}
  className="flex items-center  justify-center h-[40vh] mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div className="p-5 text-2xl text-white  bg-opacity-50 rounded-xl">

<h1 className="text-6xl font-extrabold sm:text-5xl">
        Most Sustainable
        <strong className="block font-extrabold">
          Fashion Collection
        </strong>
      </h1>
  </div>
</header>
  )
}

export default Parallax
import React from "react";
import Header from "../Header/Header";

const Gallery = () => {
  return (
    <>
      <Header
        head="Capturing Moments"
        title="Top Products Gallery"
        description="Discover a curated collection of captivating moments, each photograph a unique story preserving cherished memories and breathtaking landscapes. Immerse yourself in the beauty, emotions, and artistry captured by our talented photographers. Let the images lead you on a journey of wonder and inspiration."
      />

      <div class="grid grid-cols-2 mb-10 md:grid-cols-4 gap-4">
        <div  class="grid gap-4">
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
            style={{borderRadius:"0rem 10rem"}}
              class="h-auto hover:scale-90 transition duration-500  max-w-full rounded-lg border-pink border-3 shadow-lg drop-shadow-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { images } from "./json";

const SliderCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const newImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const goToNextImage = () => {
    const newImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const handleWatchNow = () => {
    console.log("Watch Now button clicked");
  };

  const handleAddToFavorites = () => {
    console.log("Add to Favorites button clicked");
  };

  return (
    <div className="-mt-8">
      <div className="carousel">
        <div
          className="carouselInner"
          style={{
            backgroundImage: `url(${images[currentImageIndex].img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <div className="left absolute top-1/2 transform -translate-y-1/2 left-4">
            <IoIosArrowBack className="left-icon text-white text-4xl  space-x-11  mt-4" onClick={goToPreviousImage} />
          </div>

          <div className="center flex flex-col ml-20 justify-center text-white h-full space-x-11">
            <h1 className="center-h1 text-4xl pb-8">{images[currentImageIndex].title}</h1>
            <p className="center-p pb-4">{images[currentImageIndex].duration}</p>
            <p className="center-status pb-4">
              <span>{images[currentImageIndex].status}</span>
            </p>

            <p className="center-rating pb-2">
              <span>
                <IoMdStar className="span-icon pb-4"></IoMdStar>
              </span>
              <div className="pb-2">
              {images[currentImageIndex].rating} {images[currentImageIndex].year} {images[currentImageIndex].season}{" "}
              {images[currentImageIndex].episodes}
              </div>
            </p>

            <p className="center-description pb-4">
              <span>{images[currentImageIndex].description}</span>
            </p>

  
            <div className="center-buttons flex gap-4">
              <button className="watch bg-yellow-500 text-white text-lg py-2 px-4 rounded-md  space-x-11" onClick={handleWatchNow}>
                Watch Now
              </button>
              <button
                className="favorite bg-transparent text-yellow-500 text-lg py-2 px-4 rounded-md border border-yellow-500 space-x-11 pb-4 "
                onClick={handleAddToFavorites}
              >
                Add To Favorite
              </button>
            </div>
          </div>

          <div className="right absolute top-1/2 transform -translate-y-1/2 right-4">
            <IoIosArrowForward className="right-icon text-white text-4xl" onClick={goToNextImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCarousel;
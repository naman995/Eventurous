import React from "react";

const Herosection = () => {
  return (
    <div className="flex justify-center pb-[3%] sm:px-6 pt-[3%] bg-[#003d5b]">
      <div className="flex flex-col-reverse sm:mx-auto md:flex-row w-full md:w-[80%]">
        {/* Content */}
        <div className="flex flex-col md:pl-[15%] md:pr-[10%] w-full text-white text-center md:text-left p-2">
          <p className="text-3xl sm:text-4xl md:text-5xl mb-5 ">Eventurous</p>
          <p className="text-lg sm:text-xl md:text-2xl">
            <span className="text-yellow-300">Welcome to Eventurous:</span> Your
            Partner in Unforgettable Corporate and Business Events
          </p>
          <p className="mt-4">
            At Eventurous, we specialize in crafting extraordinary experiences
            that leave a lasting impression. As a full-service events agency,
            our mission is to deliver exceptional quality and innovative
            solutions tailored to your unique needs. From conception to
            execution, we handle every detail with professionalism and
            precision, ensuring your event is both impactful and memorable.
          </p>
          <p className="text-xl sm:text-2xl md:text-2xl mb-5 mt-5 text-yellow-300">
            Our Promise
          </p>
          <p className="">
            At Eventurous, we promise to deliver unparalleled service and
            unforgettable experiences. Our commitment to excellence and
            attention to detail ensures that every event we manage is a
            resounding success. Let us take your corporate and business events
            to new heights with our expertise and passion. Explore the endless
            possibilities with Eventurous. Contact us today to start planning
            your next great event.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            className="w-[350px] h-[300px]"
            src="/logo.png"
            alt="Eventurous Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;

import React from "react";

const OurService = () => {
  return (
    <div className="bg-[#04324a] py-16 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white">
          <span className="text-yellow-400">Why Choose Eventurous?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          Craft memorable experiences with bespoke services that cater to every
          facet of your event.
        </p>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6">
            <div className="text-yellow-500">
              <img
                className="w-12 h-12 mx-auto"
                src="/buildingSolid.svg"
                alt=""
              />
            </div>
            <h3 className="mt-4 text-xl font-bold">
              Quality and Professionalism
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Our team of experienced professionals is dedicated to delivering
              high-quality events that exceed expectations.
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/award.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Tailored Solutions</h3>
            <p className="mt-2 text-base text-gray-500">
              We're experts in creating unforgettable awards/annual events that
              bring teams together by celebrating the achievements of those
              around you.
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/handshake.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Innovative Approach</h3>
            <p className="mt-2 text-base text-gray-500">
              With a focus on creativity and innovation, we bring fresh ideas to
              the table, ensuring your event stands out.
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/handshake.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Client-Centric</h3>
            <p className="mt-2 text-base text-gray-500">
              Your satisfaction is our priority. We work closely with you to
              understand your vision and bring it to life seamlessly.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-5">
        <h2 className="text-4xl font-extrabold text-white">
          <span className="text-yellow-400">Our Core Values at Eventurous</span>
        </h2>
        <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6">
            <div className="text-yellow-500">
              <img
                className="w-12 h-12 mx-auto"
                src="/buildingSolid.svg"
                alt=""
              />
            </div>
            <h3 className="mt-4 text-xl font-bold">Excellence</h3>
            <p className="mt-2 text-base text-gray-500">
              We strive for the highest standards in every event we produce,
              ensuring exceptional quality and a flawless experience. Our
              attention to detail and commitment to perfection are evident in
              every aspect of our work.
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/award.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Innovation</h3>
            <p className="mt-2 text-base text-gray-500">
              Creativity is at the heart of what we do. We constantly seek out
              new ideas and approaches to make each event unique and memorable,
              pushing the boundaries to deliver extraordinary experiences.
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/handshake.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Client Focus</h3>
            <p className="mt-2 text-base text-gray-500">
              Our clients are our top priority. We take the time to understand
              your vision, needs, and goals, providing personalized solutions
              that exceed your expectations. Your success is our success.
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/handshake.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Integrity</h3>
            <p className="mt-2 text-base text-gray-500">
              Honesty and transparency guide our interactions with clients,
              partners, and each other. We uphold the highest ethical standards,
              building trust and fostering long-term relationships through
              reliability and accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;

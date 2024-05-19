// components/EventSection.js
const EventSection = () => {
  return (
    <div className="bg-[#04324a] py-16 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white">
          Dynamic Events,{" "}
          <span className="text-yellow-400">Diverse Audiences</span>
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
            <h3 className="mt-4 text-xl font-bold">Corporate Events</h3>
            <p className="mt-2 text-base text-gray-500">
              From conferences and seminars to product launches and corporate
              retreats, we create events that resonate with your brand and
              engage your audience
            </p>
          </div>
          <div className=" p-6 ">
            <div className="text-yellow-500">
              <img className="w-12 h-12 mx-auto" src="/award.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Award Shows and Events</h3>
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
            <h3 className="mt-4 text-xl font-bold">
              Event Planning and Management
            </h3>
            <p className="mt-2 text-base text-gray-500">
              We provide end-to-end event planning and management services,
              meticulously organizing every aspect to ensure flawless execution
            </p>
          </div>
         
            <div className="p-6">
              <div className="text-yellow-500">
                <img
                  className="w-12 h-12 mx-auto"
                  src="/buildingSolid.svg"
                  alt="Large Format Events"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">
                Business Meetings and Workshops
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We design and facilitate productive business meetings and
                workshops, enhancing collaboration and driving results
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;

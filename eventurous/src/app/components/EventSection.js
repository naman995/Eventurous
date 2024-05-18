// components/EventSection.js
const EventSection = () => {
  return (
    <div className="bg-[#04324a] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white">
          Dynamic Events,{" "}
          <span className="text-yellow-400">Diverse Audiences</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          Craft memorable experiences with bespoke services that cater to every
          facet of your event.
        </p>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              With the right mix of ideas and domain knowledge, we help brands
              connect with their target audience and achieve desired business
              outcomes.
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
            <h3 className="mt-4 text-xl font-bold">Sales & Dealer Meets</h3>
            <p className="mt-2 text-base text-gray-500">
              We work with enterprises to plan, design, and execute sales &
              dealer meets, thus ensuring greater brand recall.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-[50vw] mx-auto sm:mx-[40%]">
            <div className="p-6">
              <div className="text-yellow-500">
                <img
                  className="w-12 h-12 mx-auto"
                  src="/buildingSolid.svg"
                  alt="Large Format Events"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">Large Format Events</h3>
              <p className="mt-2 text-base text-gray-500">
                From large-scale professional events to closed-door events, we
                turn your audience from a captive one to a captivated one. We
                create concept-driven events which are immersive and engaging
                for your attendees.
              </p>
            </div>
            <div className="p-6">
              <div className="text-yellow-500">
                <img
                  className="w-12 h-12 mx-auto"
                  src="/buildingSolid.svg"
                  alt="Product Launch Event"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">Product Launch Event</h3>
              <p className="mt-2 text-base text-gray-500">
                Our end-to-end event services and capabilities of integrating
                the product benefits within engaging activities planned help
                brands involve the end consumers in conversation and help them
                boost sales and revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;

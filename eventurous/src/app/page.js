import EventGallery from "./components/EventGallery";
import EventPrograms from "./components/EventPrograms";
import EventSection from "./components/EventSection";
import GetInTouch from "./components/GetInTouch";
import Herosection from "./components/Herosection";
import OurService from "./components/OurService";

import Head from "next/head";
export default function Home() {
  return (
    <main>
      <Head>
        <title>My Page Title</title>
        <meta
          name="description"
          content="Eventurous offers full-service event management for 
          unforgettable corporate and business events. Specializing in innovative event planning,
           design, logistics, and on-site coordination, we deliver professional, high-quality experiences 
           tailored to your unique needs. Experience excellence and creativity with Eventurous – 
           where every event is an adventure."
        />
        <meta
          name="keywords"
          content="Event Company Gurgaon, Event Company Faridabad, Event Company Noida, Event Company Delhi,
           Corporate Events Gurgaon, Corporate Events Faridabad, Corporate Events Noida, Corporate Events Delhi,
           Award Shows Gurgaon, Award Shows Faridabad, Award Shows Noida, Award Shows Delhi, Event Planning Gurgaon,
           Event Planning Faridabad, Event Planning Noida, Event Planning Delhi, Event Management Gurgaon, 
           Event Management Faridabad, Event Management Noida, Event Management Delhi, Business Meetings Gurgaon, 
           Business Meetings Faridabad, Business Meetings Noida, Business Meetings Delhi, Workshops Gurgaon,
           Workshops Faridabad, Workshops Noida, Workshops Delhi, Seminar Organization Gurgaon,
           Seminar Organization Faridabad, Seminar Organization Noida, Seminar Organization Delhi, 
           Conference Planning Gurgaon, Conference Planning Faridabad, Conference Planning Noida,
           Conference Planning Delhi, Social Events Gurgaon, Social Events Faridabad, Social Events Noida,
           Social Events Delhi, Event Coordinators Gurgaon, Event Coordinators Faridabad, Event Coordinators Noida,
           Event Coordinators Delhi, Professional Event Management Gurgaon, Professional Event Management Faridabad,
           Professional Event Management Noida, Professional Event Management Delhi, Gala Dinners Gurgaon,
           Gala Dinners Faridabad, Gala Dinners Noida, Gala Dinners Delhi, Product Launch Events Gurgaon,
           Product Launch Events Faridabad, Product Launch Events Noida, Product Launch Events Delhi,
           Trade Shows Gurgaon, Trade Shows Faridabad, Trade Shows Noida, Trade Shows Delhi,
           Corporate Retreats Gurgaon, Corporate Retreats Faridabad, Corporate Retreats Noida, Corporate Retreats Delhi"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rahul" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Herosection />
      <GetInTouch />
      <EventSection />
      <EventGallery />
      <OurService />
      <EventPrograms />
      {/* <Footer /> */}
    </main>
  );
}

import EventGallery from "./components/EventGallery";
import EventPrograms from "./components/EventPrograms";
import EventSection from "./components/EventSection";
import GetInTouch from "./components/GetInTouch";
import Herosection from "./components/Herosection";
import OurService from "./components/OurService";

export default function Home() {
  return (
    <main>
      <Herosection/>
      <GetInTouch/>
      <EventSection/>
      <EventGallery/>
      <OurService/>
      <EventPrograms/>
    </main>
  );
}

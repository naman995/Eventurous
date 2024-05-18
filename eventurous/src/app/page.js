import EventGallery from "./components/EventGallery";
import EventPrograms from "./components/EventPrograms";
import EventSection from "./components/EventSection";
import GetInTouch from "./components/GetInTouch";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <main className="">
      <Herosection/>
      <GetInTouch/>
      <EventSection/>
      <EventGallery/>
      <EventPrograms/>
    </main>
  );
}

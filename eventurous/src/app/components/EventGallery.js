import Image from "next/image";

const images = [
  { src: "/images/event1.jpg", alt: "Event 1" },
  { src: "/images/event2.jpg", alt: "Event 2" },
  { src: "/images/event3.jpg", alt: "Event 3" },
  { src: "/images/event4.jpg", alt: "Event 4" },
  { src: "/images/event5.jpg", alt: "Event 5" },
  { src: "/images/event6.jpg", alt: "Event 6" },
  { src: "/images/event7.jpg", alt: "Event 7" },
  { src: "/images/event8.jpg", alt: "Event 8" },
];

export default function EventGallery() {
  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Relentless <span className="text-yellow-400">Innovation</span> And
          Remarkable <span className="text-yellow-400">Creativity</span> Adorn
          Our Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

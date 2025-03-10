import React, { useState, useRef } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BetaTesterModal from "./BetaTesterModel";

interface ContentCard {
  category: string;
  title: string;
  image: string;
  network?: string;
  subtitle?: string;
  rating?: string;
  description?: string;
}

// Documentary content
const documentaryContent: ContentCard[] = [
  {
    category: "Documentary",
    title: "US-NAVY-SEALS",
    image: "/US-NAVY-SEALS---square-cover.jpg",
    network: "",
    subtitle: "The story of US-Navy Seals",
    rating: "4.8",
  },
  {
    category: "Documentary",
    title: "BECOMING",
    image: "/Becoming--POTRAIT-cover--- (1).jpg",
    network: "",
    subtitle: "The story of becoming",
    rating: "4.5",
  },
  {
    category: "Documentary",
    title: "MASAI WARRIORS",
    image: "/KIMO--POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Life and culture of the Masai people",
    rating: "4.9",
  },
  {
    category: "Documentary",
    title: "THE CLASSROOM",
    image: "/The-classroom-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The story of the classroom",
    rating: "4.9",
  },
];
// Biblical Documentary content
const biblicalContent: ContentCard[] = [
  {
    category: "Biblical Documentary",
    title: "SODOMA NA GOMORA",
    image: "/SODOMA-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The story of Sodom & Gomora",
    rating: "4.7",
  },
  {
    category: "Biblical Documentary",
    title: "NUHU : Safina & Gharika",
    image: "/NUHU-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Noah's Ark & the Flood story",
    rating: "4.9",
  },
  {
    category: "Biblical Documentary",
    title: "KINGS OF ISRAEL",
    image: "/SODOMA-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The legacy of ancient Israeli kings",
    rating: "4.8",
  },
];

// African Tales content
const africanTalesContent: ContentCard[] = [
  {
    category: "African Tales",
    title: "KIMO",
    image: "/KIMO--POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Family struggles & triumphs, for A young man",
    rating: "4.6",
  },
  {
    category: "African Tales",
    title: "NOAH AND THE ARK",
    image: "/NUHU-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The story of Noah and the ark",
    rating: "4.7",
  },
  {
    category: "African Tales",
    title: "COOK WITH BABY SKY",
    image: "/cook-with-babysky--POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Cooking with Baby Sky",
    rating: "4.7",
  },
  {
    category: "African Tales",
    title: "JAY-JAY LOVES WOMEN",
    image: "/Jay-Jay-Loves-Women-----Square-Cover.jpg",
    network: "",
    subtitle: "The story of Jay-Jay and his love for women",
    rating: "4.7",
  },
  {
    category: "African Tales",
    title: "MTEGO WA SIRI",
    image: "/mtego-wa-siri wide _ cover.jpg",
    network: "",
    subtitle: "The story of Mtego and his love for Siri",
    rating: "4.7",
  },
  {
    category: "African Tales",
    title: "JACKIE CHAN",
    image: "/JACKIE-CHAN-----POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The story of Jackie Chan",
    rating: "4.7",
  },
  {
    category: "African Tales",
    title: "BENZEMA",
    image: "/BENZEMA-----POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The story of Benze",
    rating: "4.7",
  },
];
// Podcast content
const podcastContent: ContentCard[] = [
  {
    category: "Podcast",
    title: "ROUND-UP",
    image: "/Round-Up-_Wide.jpg",
    subtitle: "Stories from across the continent",
    rating: "4.8",
    description:
      "Join us as we explore the rich tapestry of African cultures, traditions, and contemporary issues through engaging conversations with thought leaders, artists, and changemakers from across the continent. Each episode offers unique insights into the diverse experiences that shape African identity today. Our podcast aims to amplify authentic African voices and perspectives that are often overlooked in mainstream media.",
  },
  // {
  //   category: "Podcast",
  //   title: "FUSE NEXT LEVEL",
  //   image: "/Fuse-Next-Level-_Wide.jpg",
  //   subtitle: "Stories from across the continent",
  //   rating: "4.8",
  //   description:
  //     "Join us as we explore the rich tapestry of African cultures, traditions, and contemporary issues through engaging conversations with thought leaders, artists, and changemakers from across the continent. Each episode offers unique insights into the diverse experiences that shape African identity today. Our podcast aims to amplify authentic African voices and perspectives that are often overlooked in mainstream media.",
  // },
];

// Trending content (mix of all categories)
const trendingContent: ContentCard[] = [
  documentaryContent[0],
  africanTalesContent[2],
  biblicalContent[0],
  africanTalesContent[0],
  biblicalContent[1],
  podcastContent[0],
  africanTalesContent[3],
  documentaryContent[1],
  
];

// Latest content (mix of all categories)
const latestContent: ContentCard[] = [
  biblicalContent[2],
  documentaryContent[1],
  africanTalesContent[1],
  documentaryContent[2],
  africanTalesContent[4],
  africanTalesContent[2],
];

// Organize content by categories
const categories = {
  trending: trendingContent,
  latest: latestContent,
  podcasts: podcastContent,
  "Audio Series": africanTalesContent,
  documentaries: documentaryContent,
};

export default function SubLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ContentCard | null>(null);

  const handleCardClick = (card: ContentCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const scroll = (
    scrollOffset: number,
    containerRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white py-16  min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-[#F27321] text-[12px] font-medium mb-4">
          INCLUDED IN ALL PREMIUM PLANS
        </p>
        <h2 className="sm:text-5xl text-3xl font-bold mb-6">
          All The Content You Need & More
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Access exclusive content, enjoy an ad-free experience, connect with
          like-minded individuals, and unlock powerful tools to enhance your
          social networking experience.
        </p>
      </div>

      <div className="content-rows space-y-12 overflow-hidden">
        {Object.entries(categories).map(([category, items]) => {
          const rowRef = useRef<HTMLDivElement>(null);

          // Special layout for podcasts
          if (category === "podcasts") {
            return (
              <div key={category} className="category-row px-4">
                <h2 className="text-2xl font-bold mb-4 capitalize">
                  {category}
                </h2>
                <div className="flex flex-col md:flex-row gap-6 bg-gray-900/50 p-6 rounded-xl">
                  {items.map((podcast, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-8"
                    >
                      <div className="w-full md:w-[700px] flex-shrink-0">
                        <img
                          src={podcast.image}
                          alt={podcast.title}
                          className="w-full  h-[500px] object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col justify-center space-y-4 max-w-2xl">
                        <h3 className="text-3xl font-bold text-[#F27321]">
                          {podcast.title}
                        </h3>
                        <p className="text-xl text-gray-300">
                          {podcast.subtitle}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="bg-[#F27321] px-3 py-1 rounded-full text-sm">
                            {podcast.category}
                          </span>
                          {podcast.rating && (
                            <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                              Rating: {podcast.rating}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {podcast.description}
                        </p>
                        <button
                          className="flex items-center space-x-2 bg-[#F27321] text-white px-6 py-3 rounded-full w-fit hover:bg-[#F27321]/80 transition-colors"
                          onClick={() => handleCardClick(podcast)}
                        >
                          <FaPlay className="w-4 h-4" />
                          <span>Listen Now</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // Standard layout for other categories
          return (
            <div key={category} className="category-row px-4">
              <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
              <div className="relative group/row">
                {/* Left Scroll Button */}
                <button
                  onClick={() => scroll(-800, rowRef)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full 
                    opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hover:bg-black/80
                    -translate-x-1/2"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Scroll Button */}
                <button
                  onClick={() => scroll(800, rowRef)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full 
                    opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hover:bg-black/80
                    translate-x-1/2"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>

                {/* Left Fade Gradient */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent 
                  z-30 pointer-events-none opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
                />

                {/* Right Fade Gradient */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent 
                  z-30 pointer-events-none opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
                />

                {/* Content Row */}
                <div
                  ref={rowRef}
                  className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                  {items.map((card, index) => (
                    <div
                      key={index}
                      className="flex-none w-[160px] md:w-[200px] lg:w-[220px] group"
                      onClick={() => handleCardClick(card)}
                    >
                      <div
                        className="relative aspect-[2/3] rounded-lg overflow-hidden transition-all duration-300 
                        group-hover:scale-110 group-hover:z-10 group-hover:shadow-2xl"
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Hover overlay for larger screens */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="absolute bottom-0 left-0 p-4 w-full">
                            <p className="text-sm font-medium mb-1">
                              {card.category}
                            </p>
                            <h3 className="font-bold text-lg mb-1 group-hover:text-[#F27321] line-clamp-2">
                              {card.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <button className="bg-[#F27321] p-2 rounded-full hover:bg-[#F27321]/80">
                                <FaPlay className="w-4 h-4" />
                              </button>
                              {card.rating && (
                                <span className="text-sm">{card.rating}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Beta Tester Modal */}
      {isModalOpen && (
        <BetaTesterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}

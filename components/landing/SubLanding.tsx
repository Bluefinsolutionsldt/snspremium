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
}

const contentCards: ContentCard[] = [
  {
    category: "Documentary",
    title: "US-NAVY-SEALS",
    image: "/US-NAVY-SEALS---square-cover.jpg",
    network: "",
    subtitle: "The story of US-Navy Seals",
    rating: "4.8",
  },
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
    category: "African Tales",
    title: "KIMO",
    image: "/KIMO--POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Family struggles & triumphs, for A young man",
    rating: "4.6",
  },
  {
    category: "Documentary",
    title: "AFRICAN WARRIORS",
    image: "/US-NAVY-SEALS---square-cover.jpg",
    network: "",
    subtitle: "The untold stories of African warriors",
    rating: "4.5",
  },
  {
    category: "Biblical Documentary",
    title: "KINGS OF ISRAEL",
    image: "/SODOMA-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "The legacy of ancient Israeli kings",
    rating: "4.8",
  },
  {
    category: "African Tales",
    title: "SAHARA CHRONICLES",
    image: "/NUHU-POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Adventures across the great desert",
    rating: "4.7",
  },
  {
    category: "Documentary",
    title: "MASAI WARRIORS",
    image: "/KIMO--POTRAIT-cover---.jpg",
    network: "",
    subtitle: "Life and culture of the Masai people",
    rating: "4.9",
  },
];

// Organize content by categories
const categories = {
  trending: contentCards,
  latest: contentCards,
  podcasts: contentCards,
  stories: contentCards,
  documentaries: contentCards,
  shows: contentCards,
  interviews: contentCards,
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
    <section className="bg-black text-white py-16 min-h-screen">
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

import React from "react";

interface ContentCard {
  category: string;
  title: string;
  image: string;
  network?: string;
  subtitle?: string;
}

const contentCards: ContentCard[] = [
  {
    category: "Exclusive Access",
    title: "Premium Content",
    image: "/0_3.png",
    network: "SNS",
    subtitle: "EXCLUSIVE STORIES",
  },
  {
    category: "Connect & Share",
    title: "Social Features",
    image: "/Vintage Camera-13.png",
    network: "SNS+",
    subtitle: "ENHANCED NETWORKING",
  },
  {
    category: "Ad-Free Experience",
    title: "Premium Experience",
    image:
      "/karimsalkinho_film_still_1980_style_african_couple_in_crowded_b_e20d01c0-83df-42b8-bc11-27374cbd4d1f.png",
    network: "SNS",
    subtitle: "UNINTERRUPTED",
  },
  {
    category: "Premium Add-ons",
    title: "Extra Features",
    image: "/0_3.png",
    network: "SNS+",
    subtitle: "ADVANCED TOOLS",
  },
];

export default function SubLanding() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-[#F27321] text-sm font-medium mb-4">
          INCLUDED IN ALL PREMIUM PLANS
        </p>
        <h2 className="text-5xl font-bold mb-6">All The Features You Need</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Access exclusive content, enjoy an ad-free experience, connect with
          like-minded individuals, and unlock powerful tools to enhance your
          social networking experience.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center center gap-4 max-w-7xl mx-auto">
        {contentCards.map((card, index) => (
          <div
            key={index}
            className={`relative group cursor-pointer overflow-hidden rounded-lg ${
          
              index === 1 || index === 2
                ? "h-[500px]" 
                : "h-[400px]" 
            }`}
          >
          
            <div className="relative w-full h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
          
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <p className="text-sm font-medium mb-2">{card.category}</p>
              <h3
                className={`font-bold mb-2 ${
                 
                  index === 1 || index === 2
                    ? "text-3xl" 
                    : "text-2xl" 
                } group-hover:text-[#F27321]`}
              >
                {card.title}
              </h3>
              {card.subtitle && (
                <div className="flex items-center space-x-2">
                  {card.network && (
                    <span
                      className={`${
                        index === 1 || index === 2
                          ? "text-base" 
                          : "text-sm" 
                      } group-hover:text-[#F27321]`}
                    >
                      {card.network}
                    </span>
                  )}
                  <span
                    className={`font-medium ${
                      index === 1 || index === 2
                        ? "text-base" // Center cards
                        : "text-sm" // Outer cards
                    } group-hover:text-[#F27321]`}
                  >
                    {card.subtitle}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}

import React from "react";

const certifications = [
  {
    id: 1,
    img: "/certifications/IAS_ISO.png",
    alt: "ISO 9001:2015 Certified",
    title: "ISO 9001:2015 Certified",
    desc: "An ISO 9001:2015 certified company ensuring quality-driven logistics solutions.",
  },
  {
    id: 2,
    img: "/certifications/df_alliance.png",
    alt: "DF Alliance Member",
    title: "DF Alliance Member",
    desc: "Proud verified member of DF Alliance by DP World global network.",
  },
  {
    id: 3,
    img: "/certifications/msme.png",
    alt: "MSME Certified",
    title: "MSME Certified (India)",
    desc: "Recognised under Government of India as a certified MSME enterprise.",
  },
  {
    id: 4,
    img: "/certifications/industry_outlook.png",
    alt: "Top Logistics Startup 2021",
    title: "Top 10 Logistics Startup",
    desc: "Recognised among Top 10 logistics startups in India – 2021.",
  },
];

const Certifications = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex justify-center mb-10">
          <h2
            className="
              inline-block
              bg-orange-500
              text-white
              text-lg
              md:text-2xl
              font-bold
              px-6
              py-3
              rounded-full
              shadow-md
            "
          >
            Certifications & Accolades
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="
                flex
                flex-col
                items-center
                text-center
                bg-gray-50
                rounded-xl
                p-6
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <img
                src={item.img}
                alt={item.alt}
                className="h-24 object-contain mb-4"
              />

              <h3 className="text-sm md:text-base font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm font-bold text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

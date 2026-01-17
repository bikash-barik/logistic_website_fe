import React from "react";

const testimonials = [
  {
    id: 1,
    title: <i>"Excellence"</i>,
    logo: "https://tse2.mm.bing.net/th/id/OIP.-mP-u8Ks7YzHTHaMWs6ADAHaC-?pid=Api&P=0&h=180",
    message: (
      <b>
        We have been giving them our shipments since 05+ years, and we are glad
        to say VYUH has never let us down.
      </b>
    ),
  },
  {
    id: 2,
    title: <i>"Agile"</i>,
    logo: "/certifications/logo.png",
    message: (
      <b>
        We like their flexible and agile approach towards our varied cargoes &
        consignments. Keep up the good work.
      </b>
    ),
  },
  {
    id: 3,
    title: <i>"Consistency"</i>,
    logo: "https://colchoneriasanvicente.com.ar/wp-content/uploads/2024/06/Cannon-1.jpg",
    message: (
      <b>
        VYUH has been consistent with their services and optimized costings. This
        helps in effective pre-planning and scheduling.
      </b>
    ),
  },
  {
    id: 4,
    title: <i>"Efficiency"</i>,
    logo: "https://capmarineconsultants.com/wp-content/uploads/2020/04/Zener-logo-1.png",
    message: (
      <b>
        We are glad to say that VYUH has been consistently and efficiently
        handling our complex Engineering ODC cargo very well
      </b>
    ),
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16 px-6">

  <div className="flex justify-center items-center mb-12">
  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full transition">
    Testimonials
  </button>
</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            
            <div className="w-full h-36 border rounded-xl flex items-center justify-center mb-4 bg-white">
              <img
                src={item.logo}
                alt={item.title}
                className="max-h-24 max-w-[200px] object-contain"
              />
            </div>

            
            <div className="
              bg-white text-black border rounded-2xl p-6
              flex flex-col justify-start h-[260px] w-full text-center
              transition-colors duration-300
              hover:text-orange-500
            ">
              <h3 className="text-lg font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed">
                “{item.message}”
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

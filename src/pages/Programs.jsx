import React from "react";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img6 from "../assets/img6.jpeg";
import img5 from "../assets/img5.jpeg";
import img10 from "../assets/img10.jpeg";
import img9 from "../assets/img9.jpeg";


const programs = [
  {
    title: "Feeding Programs",
    description: "Providing nutritious meals to children in need.",
    image: `${img7}`, // sample image
  },
  {
    title: "Community Health",
    description: "Our clinics and awareness programs promote better health outcomes.",
    image: `${img8}`, // sample image
  },
  {
    title: "Children Home Visits",
    description: "We visit vulnerable children in their homes, providing emotional support and care.",
    image: `${img6}`, // sample image
  },
  {
    title: "Women Empowerment",
    description: "Supporting women through skill development and mentorship.",
    image: `${img5}`, // sample image
  },
  {
    title: "Tree Planting",
    description: "Planting trees to create a greener environment.",
    image: `${img10}`, // sample image
  },
  {
    title: "Community Development",
    description: "Promoting sustainable development in underserved communities.",
    image: `${img9}`, // sample image
  },
];

const Programs = () => (
  <section className="bg-gray-50 py-20 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-12 text-center">
        Our Programs
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image Section */}
            <div className="h-52 bg-gray-200 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-700 text-sm">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;

import React from 'react';

const WellnessOptions = () => {
  const offerings = [
    {
      title: "Ayurveda",
      description: "Harness the power of ancient Ayurvedic remedies to restore balance and vitality in your life.",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      icon: "🌿",
      tagline: "Find Your Balance",
    },
    {
      title: "Yoga & Naturopathy",
      description: "Embrace the union of body and mind through Yoga and natural therapies for a healthier you.",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      icon: "🧘",
      tagline: "Connect Mind & Body",
    },
    {
      title: "Unani",
      description: "Explore the time-tested Unani system that promotes holistic health with natural healing techniques.",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      icon: "🌱",
      tagline: "Holistic Healing",
    },
    {
      title: "Siddha",
      description: "Discover Siddha medicine, a traditional system that emphasizes balance and natural treatments.",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      icon: "🌼",
      tagline: "Ancient Wisdom, Modern Health",
    },
    {
      title: "Homeopathy",
      description: "Unlock the gentle power of Homeopathy to address ailments and improve overall well-being.",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      icon: "💧",
      tagline: "Gentle, Effective Care",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold text-main-color mb-8">
        Discover the Power of Natural Healing
      </h2>
      <p className="text-center text-lg text-gray-500 mb-12">
        Explore a wide variety of time-honored practices designed to promote holistic wellness and rejuvenate your body and mind.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {offerings.map((offering, index) => (
          <div key={index} className={`p-6 ${offering.bgColor} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <div className="text-5xl mb-4 text-center">{offering.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{offering.title}</h3>
            <p className="text-gray-600 text-center mb-6">{offering.description}</p>
            <p className={`text-center font-bold ${offering.textColor} mt-6`}>
              {offering.tagline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessOptions;

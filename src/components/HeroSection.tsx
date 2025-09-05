import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";

const HeroSection: React.FC = () => {
  const researchInterests = [
    "Big Data Analytics for Smart Applications",
    "User Interaction Design",
    "Internet of Things Solutions",
    "Model-Driven Software Engineering",
  ];

  const text = useRotatingTypewriter({
    words: researchInterests,
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 40,
    holdDelay: 3000,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute h-full w-full bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-gray-400">I am</span> Eric Umuhoza PhD
            </h1>

            {/* Position and Institution */}
            <div className="mb-6">
              <p className="text-lg text-gray-300 font-medium mb-1">
                Assistant Teaching Professor
              </p>
              <p className="text-base text-gray-400 font-normal">
                Carnegie Mellon University-Africa
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 italic">
              ...dedicated to advancing research in AI, data analytics, and
              software engineering while fostering community development through
              technology and education.
            </p>

            {/* Typewriter section */}
            <div className="h-20 text-xl sm:text-2xl md:text-3xl font-semibold text-[#3333ff] mb-6 flex flex-col items-center lg:items-start justify-center">
              <span className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-1">
                My research interests includes:
              </span>
              <div className="inline-block overflow-hidden whitespace-pre-line border-r-[.15em] border-[#3333ff] text-center lg:text-left leading-tight">
                {text}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#publications"
                className="bg-[#3333ff] hover:bg-[#2525cc] text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                My Research
              </a>
              <a
                href="#contact"
                className="border-2 border-[#3333ff] hover:bg-[#3333ff] text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile image section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Animated decorative circles */}
            <div className="absolute w-full h-full -top-4 -left-4 border-4 border-[#3333ff] rounded-full animate-pulse opacity-20"></div>
            <div
              className="absolute w-full h-full -bottom-4 -right-4 border-4 border-[#3333ff] rounded-full animate-pulse opacity-20"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3333ff]/50 to-transparent rounded-full transform rotate-45"></div>

              {/* Profile image */}
              <img
                alt="Professor Eric Umuhoza"
                className="relative object-cover w-full h-full rounded-full shadow-2xl"
                src="/images/eumuhoza.png"
                style={{ clipPath: "circle(50% at 50% 50%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

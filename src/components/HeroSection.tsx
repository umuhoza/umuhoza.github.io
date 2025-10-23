const HeroSection: React.FC = () => {
  const researchInterests = [
    "Big Data Analytics",
    "User Interaction Design",
    "Internet of Things",
    "Model-Driven Software Engineering",
  ];

  return (
    <section
      id="home"
      aria-label="Introduction and hero section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Subtle gradient accent - top right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3333ff]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-center lg:text-left order-2 lg:order-1">
            {/* Name & Title - Compact Single Line */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <p className="text-sm sm:text-base text-gray-400 font-light tracking-wide mb-2 sm:mb-3 uppercase">
                  I am
                </p>
                <h1 className="font-extrabold leading-tight tracking-tight">
                  <span className="inline bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-down">
                    Eric Umuhoza{" "}
                  </span>
                  <span
                    className="inline bg-gradient-to-r from-[#3333ff] to-[#5555ff] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-down"
                    style={{ animationDelay: "0.2s" }}
                  >
                    PhD
                  </span>
                </h1>
              </div>

              {/* Position Card - Responsive */}
              <div
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl px-5 py-4 sm:px-6 sm:py-4 md:px-8 md:py-5 border border-gray-700/50 shadow-xl mx-auto lg:mx-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-1.5 sm:mb-2">
                  Assistant Teaching Professor
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium flex items-center justify-center lg:justify-start gap-2">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3333ff] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="break-words">Carnegie Mellon University-Africa</span>
                </p>
              </div>
            </div>

            {/* Mission Statement - Responsive */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="text-gray-500">...dedicated to </span>
              <span className="text-white font-semibold">
                advancing research in AI, data analytics, and software
                engineering
              </span>
              <span className="text-gray-500">
                {" "}
                while fostering community development through technology and
                education.
              </span>
            </p>

            {/* Research Interests - Responsive Layout */}
            <div
              className="space-y-4 sm:space-y-5 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-white font-bold text-center lg:text-left px-2 sm:px-0">
                Research Interests
              </h2>
              <div
                className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
                role="list"
                aria-label="Research interest areas"
              >
                {researchInterests.map((interest) => (
                  <div
                    key={interest}
                    role="listitem"
                    className="bg-[#3333ff]/10 border border-[#3333ff]/30 rounded-md sm:rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 transition-all duration-300 hover:bg-[#3333ff]/20 hover:border-[#3333ff]/50 cursor-default"
                    tabIndex={0}
                  >
                    <span className="text-gray-200 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Fully Responsive */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2 px-2 sm:px-0 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="#publications"
                aria-label="View my research publications"
                className="w-full sm:w-auto text-center bg-[#3333ff] hover:bg-[#2525cc] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3333ff]/30 focus:outline-none focus:ring-2 focus:ring-[#3333ff]/50 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
              >
                My Research
              </a>

              <a
                href="#contact"
                aria-label="Get in touch with me"
                className="w-full sm:w-auto text-center border-2 border-[#3333ff] hover:bg-[#3333ff] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3333ff]/30 focus:outline-none focus:ring-2 focus:ring-[#3333ff]/50 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-[0.98]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image Fully Responsive */}
          <div
            className="relative flex justify-center items-center order-1 lg:order-2 animate-fade-in mb-8 sm:mb-10 lg:mb-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem]">
              {/* Subtle glow background */}
              <div className="absolute inset-0 bg-[#3333ff]/20 rounded-full blur-2xl"></div>

              {/* Single elegant ring - responsive borders */}
              <div className="absolute inset-0 rounded-full border border-[#3333ff]/40 sm:border-2 p-1.5 sm:p-2">
                <div className="w-full h-full rounded-full border border-[#3333ff]/20"></div>
              </div>

              {/* Profile image - responsive inset */}
              <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  alt="Professor Eric Umuhoza, Assistant Teaching Professor at Carnegie Mellon University-Africa"
                  className="w-full h-full object-cover"
                  src="/images/eumuhoza.png"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Responsive visibility */}
      <div
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll Down
          </span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-[#3333ff] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

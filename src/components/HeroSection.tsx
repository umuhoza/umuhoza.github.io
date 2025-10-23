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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3333ff]/10 rounded-full blur-3xl motion-safe:animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl motion-safe:animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-8 ">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
            {/* Name & Title - Enhanced Typography */}
            <div className="space-y-6">
              <div>
                <p className="text-base sm:text-lg text-gray-400 font-light tracking-wide mb-4 uppercase">
                  I am
                </p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-fade-in-down">
                    Eric Umuhoza
                  </span>
                  <span
                    className="block text-5xl sm:text-6xl lg:text-7xl mt-3 bg-gradient-to-r from-[#3333ff] to-[#5555ff] bg-clip-text text-transparent font-bold animate-fade-in-down"
                    style={{ animationDelay: "0.2s" }}
                  >
                    PhD
                  </span>
                </h1>
              </div>

              {/* Position Card */}
              <div
                className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl px-8 py-5 border border-gray-700/50 shadow-xl mx-auto lg:mx-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-xl sm:text-2xl text-white font-bold mb-2">
                  Assistant Teaching Professor
                </p>
                <p className="text-sm sm:text-base text-gray-300 font-medium flex items-center justify-center lg:justify-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-[#3333ff] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Carnegie Mellon University-Africa
                </p>
              </div>
            </div>

            {/* Mission Statement - Enhanced */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
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

            {/* Research Interests - Modern Card Design */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <h2 className="text-white text-xl sm:text-2xl font-bold text-center lg:text-left flex items-center justify-center lg:justify-start gap-3">
                <svg
                  className="w-6 h-6 text-[#3333ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Research Interests
              </h2>
              <div
                className="flex flex-wrap gap-4 justify-center lg:justify-start max-w-2xl mx-auto lg:mx-0"
                role="list"
                aria-label="Research interest areas"
              >
                {researchInterests.map((interest, index) => (
                  <div
                    key={interest}
                    role="listitem"
                    className="group relative overflow-hidden bg-gradient-to-br from-[#3333ff]/20 to-[#1a1aff]/10 backdrop-blur-sm border border-[#3333ff]/40 rounded-xl px-6 py-3 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#3333ff]/40 hover:border-[#3333ff]/80 hover:from-[#3333ff]/30 hover:to-[#5555ff]/20 animate-fade-in cursor-default focus-within:ring-2 focus-within:ring-[#3333ff] focus-within:ring-offset-2 focus-within:ring-offset-gray-950"
                    style={{
                      animationDelay: `${0.9 + index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                    tabIndex={0}
                  >
                    {/* Background shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <span className="relative text-white font-semibold text-sm sm:text-base whitespace-nowrap flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-[#5555ff] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Enhanced Design */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-2 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="#publications"
                aria-label="View my research publications"
                className="group relative overflow-hidden bg-gradient-to-r from-[#3333ff] to-[#5555ff] hover:from-[#2525cc] hover:to-[#4444ee] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl shadow-[#3333ff]/30 hover:shadow-2xl hover:shadow-[#3333ff]/50 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#3333ff]/50 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  My Research
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </a>

              <a
                href="#contact"
                aria-label="Get in touch with me"
                className="group relative overflow-hidden border-2 border-[#3333ff] hover:bg-[#3333ff] bg-gray-900/50 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl shadow-[#3333ff]/20 hover:shadow-2xl hover:shadow-[#3333ff]/50 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#3333ff]/50 focus:ring-offset-2 focus:ring-offset-gray-950 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image with Enhanced Visuals */}
          <div
            className="relative flex justify-center items-center order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Decorative animated rings */}
              <div className="absolute inset-0 -m-4">
                <div
                  className="absolute inset-0 rounded-full border-2 border-[#3333ff]/30 motion-safe:animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-purple-600/20 motion-safe:animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                ></div>
              </div>

              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem]">
                {/* Glowing background orb */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#3333ff]/40 via-purple-600/30 to-indigo-600/40 rounded-full blur-3xl motion-safe:animate-pulse"
                  style={{ animationDuration: "4s" }}
                ></div>

                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3333ff] via-purple-600 to-[#5555ff] p-1 motion-safe:animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gray-950"></div>
                </div>

                {/* Profile image with effects */}
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl shadow-[#3333ff]/50 ring-4 ring-gray-800/50">
                  <img
                    alt="Professor Eric Umuhoza, Assistant Teaching Professor at Carnegie Mellon University-Africa"
                    className="w-full h-full object-cover"
                    src="/images/eumuhoza.png"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3333ff]/20 via-transparent to-transparent mix-blend-overlay"></div>
                </div>

                {/* Floating accent dots */}
                <div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#3333ff] rounded-full blur-sm motion-safe:animate-bounce"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full blur-sm motion-safe:animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll Down
          </span>
          <svg
            className="w-6 h-6 group-hover:text-[#3333ff] transition-colors"
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

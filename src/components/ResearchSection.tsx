const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      title: "Big Data Analysis for Smart Applications",
      icon: (
        <svg
          fill="currentColor"
          height="24px"
          viewBox="0 0 256 256"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" />
        </svg>
      ),
    },
    {
      title: "User Interaction Design",
      icon: (
        <svg
          fill="currentColor"
          height="24px"
          viewBox="0 0 256 256"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z" />
        </svg>
      ),
    },
    {
      title: "The Internet of Things",
      icon: (
        <svg
          fill="currentColor"
          height="24px"
          viewBox="0 0 256 256"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M237.08,87A172,172,0,0,0,18.92,87A8,8,0,0,0,29.08,99.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z" />
        </svg>
      ),
    },
    {
      title: "Model-Driven Software Engineering",
      icon: (
        <svg
          fill="currentColor"
          height="24px"
          viewBox="0 0 256 256"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="research" className="py-24 sm:py-32 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Research Interests
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Exploring the frontiers of computer science to solve real-world
            problems.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-none">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="research-card bg-cardBackground p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(51,51,255,0.2)]"
            >
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-white">
                {area.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {area.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

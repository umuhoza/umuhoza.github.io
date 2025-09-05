const AboutSection: React.FC = () => {
  return (
    <section id="about" className="px-20 lg:px-40 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary mb-8">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Profile Image and Basic Info */}
          <div className="flex-shrink-0">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-40 h-40 shadow-lg"
              style={{
                backgroundImage: "url('/images/eumuhoza.png')",
              }}
            />
            <div className="mt-4 text-center md:text-left">
              <p className="text-2xl font-bold leading-tight tracking-tight text-textPrimary">
                Eric Umuhoza
              </p>
              <p className="text-base font-normal leading-normal text-textSecondary">
                Assistant Teaching Professor at
                <br />
                Carnegie Mellon University-Africa
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <p className="text-base leading-relaxed text-textSecondary mb-10">
              Eric Umuhoza is an Assistant Teaching Professor at Carnegie Mellon
              University-Africa. His research interests include Big data
              Analysis, User Interaction Design, IoT, and Model-Driven Software
              Engineering. He holds a Ph.D. in Information Technology and
              Engineering, a Master of Science in Engineering of Computing
              Systems, and a Bachelor of Science in Computer Engineering from
              the Polytechnic University of Milan. He was also a Visiting
              Scholar at École des Mines de Nantes, France.
            </p>

            {/* Education Timeline */}
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary mb-6 border-b border-primary/20 pb-3">
              Education Roadmap
            </h2>

            <div className="relative pl-8 border-l-2 border-primary/30">
              {/* PhD */}
              <div className="absolute top-0 -left-[13px] w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-textPrimary">
                  Ph.D. in Information Technology and Engineering
                </h3>
                <p className="text-textSecondary">
                  Polytechnic University of Milan
                </p>
                <p className="text-sm text-textSecondary opacity-70">
                  2014 - 2018
                </p>
              </div>

              {/* Visiting Scholar */}
              <div className="absolute top-[calc(66%-12px)] -left-[13px] w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-textPrimary">
                  Visiting Scholar
                </h3>
                <p className="text-textSecondary">
                  École des Mines de Nantes, France
                </p>
                <p className="text-sm text-textSecondary opacity-70">2017</p>
              </div>

              {/* Masters */}
              <div className="absolute top-[calc(33%-12px)] -left-[13px] w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-textPrimary">
                  Master of Science in Engineering of Computing Systems
                </h3>
                <p className="text-textSecondary">
                  Polytechnic University of Milan
                </p>
                <p className="text-sm text-textSecondary opacity-70">
                  2011 - 2013
                </p>
              </div>

              {/* Bachelor */}
              <div className="absolute bottom-0 -left-[13px] w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
              <div>
                <h3 className="text-xl font-semibold text-textPrimary">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-textSecondary">
                  Polytechnic University of Milan
                </p>
                <p className="text-sm text-textSecondary opacity-70">
                  2008 - 2011
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:px-40 py-24 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-textPrimary mb-4">Contact Me</h1>
        <p className="text-lg text-textSecondary leading-relaxed mb-12 max-w-3xl">
          Feel free to reach out through any of the channels below. I'm open to
          collaborations, research opportunities, student mentorship, or general
          inquiries related to my work.
        </p>

        <div className="space-y-14">
          {/* Professional Email */}
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-4 border-b border-gray-800 pb-2">
              Email
            </h3>
            <a
              href="mailto:eric.umuhoza@andrew.cmu.edu"
              className="text-lg text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            >
              eric.umuhoza@andrew.cmu.edu
            </a>
          </div>

          {/* Online Profiles */}
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6 border-b border-gray-800 pb-2">
              Find Me Online
            </h3>
            <div className="flex flex-wrap items-center gap-10">
              <a
                href="https://www.linkedin.com/in/umuhoza-eric-723b4a42/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label="LinkedIn Profile"
              >
                <div className="rounded-full bg-gray-800 p-4 group-hover:bg-primary transition-colors duration-300">
                  <svg
                    fill="currentColor"
                    height="28px"
                    width="28px"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm-8,184H48V48H208ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-textSecondary group-hover:text-textPrimary transition-colors duration-300">
                  LinkedIn
                </p>
              </a>

              <a
                href="https://scholar.google.it/citations?user=dIuGFCMAAAAJ&hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label="Google Scholar Profile"
              >
                <div className="rounded-full bg-gray-800 p-4 group-hover:bg-primary transition-colors duration-300">
                  <svg
                    fill="currentColor"
                    height="28px"
                    width="28px"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,191.91V176.6a80.3,80.3,0,0,1-43.16-19.14,8,8,0,1,1,10.32-12.28c2.1,1.75,4.28,3.42,6.54,5.01,23.33,16.38,54,16.38,77.3,0,24.12-16.91,37.38-42.34,37.38-69.87,0-23.94-9.3-46.7-26.13-64.29a88.1,88.1,0,0,0-125.74,0A87.1,87.1,0,0,0,48,128a86.64,86.64,0,0,0,18.72,52.84,8,8,0,1,1-12.28,10.32A102.73,102.73,0,0,1,32,128c0-31,12.44-59.59,32.72-80.45A103.88,103.88,0,0,1,195.28,47.55C215.56,68.41,228,96.94,228,128c0,32.5-16.14,61.42-42.38,81.16C167.33,224.23,146.52,224.81,120,215.91Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-textSecondary group-hover:text-textPrimary transition-colors duration-300">
                  Google Scholar
                </p>
              </a>
            </div>
          </div>

          {/* University Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-4 border-b border-gray-800 pb-2">
              Address
            </h3>
            <address className="text-lg text-textSecondary not-italic leading-relaxed">
              D107, Carnegie Mellon University-Africa
              <br />
              Kigali Innovation City
              <br />
              KG 7 Ave, Kigali, Rwanda
              <br />
              {/* <a
                href="tel:+250788123456"
                className="text-primary hover:underline mt-2 inline-block"
              >
                +250 788 123 456
              </a> */}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

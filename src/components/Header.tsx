import { useState } from "react";

const Header: React.FC = () => {
  const [active, setActive] = useState("Home");

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
    { name: "Teaching", href: "#teaching" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (linkName: string, href: string) => {
    setActive(linkName);

    // Scroll to the target section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 bg-background/80 w-full px-10 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-white">
        <a className="flex items-center gap-3" href="#">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_330)">
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-xl font-bold leading-tight tracking-tight">
            Eric Umuhoza
          </h2>
        </a>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            className={`transition-colors duration-200 text-sm font-medium cursor-pointer ${
              active === link.name
                ? "text-textPrimary"
                : "text-textSecondary hover:text-textPrimary"
            }`}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.name, link.href);
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        {/* Space for future buttons if needed */}
      </div>
    </header>
  );
};

export default Header;

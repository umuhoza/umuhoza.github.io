import React, { useEffect, useState } from "react";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  link?: string;
};

type YearGroup = {
  year: string;
  items: Publication[];
};

// Fallback static data (used until scholar sync runs at least once)
const fallbackPublications: YearGroup[] = [
  {
    year: "2023",
    items: [
      {
        title:
          "Precision Livestock Analytics: Integrating Multi-Modal Sensor Data",
        authors: "E. Umuhoza, A. Researcher, B. Scientist",
        venue: "International Journal of Smart Farming Systems",
      },
    ],
  },
];

const PublicationsSection: React.FC = () => {
  const [groups, setGroups] = useState<YearGroup[] | null>(null);

  useEffect(() => {
    // Dynamic import to allow build to succeed before JSON exists
    import("../data/publications.json")
      .then((mod) => {
        setGroups(mod.default as YearGroup[]);
      })
      .catch(() => {
        setGroups(fallbackPublications);
      });
  }, []);

  return (
    <section id="publications" className="py-24 bg-[#101014]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Publications
        </h2>
        {!groups && <p className="text-gray-400">Loading publications...</p>}
        {groups && (
          <div className="space-y-12">
            {groups.map((group) => (
              <div key={group.year}>
                <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-[#3333ff] pl-3">
                  {group.year}
                </h3>
                <ul className="space-y-6">
                  {group.items.map((pub, idx) => (
                    <li
                      key={idx}
                      className="bg-[#14141a] border border-[#1f1f29] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-lg font-semibold text-white leading-snug">
                        {pub.link ? (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline decoration-[#3333ff]"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {pub.authors}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {pub.venue}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <p className="text-xs text-gray-500 mt-12">
          Data auto-generated from Google Scholar. 
        </p>
      </div>
    </section>
  );
};

export default PublicationsSection;

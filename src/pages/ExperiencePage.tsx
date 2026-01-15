import React from 'react';

const ExperienceItem: React.FC<{
  dates: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
}> = ({ dates, role, company, location, responsibilities }) => (
  <div className="relative pl-8 py-6 border-l-2 border-pink-300 group">
    {/* Dot on the timeline */}
    <span className="absolute -left-[9px] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-pink-400 ring-4 ring-white transition-all duration-300 group-hover:bg-pink-500 group-hover:ring-pink-100"></span>

    {/* Content */}
    <p className="text-sm text-gray-500 mb-1">{dates}</p>
    <h3 className="text-xl font-semibold text-gray-800 mb-1">{role}</h3>
    <p className="text-md font-medium text-gray-700 mb-3">{company}, <span className="text-gray-600 font-normal">{location}</span></p>
    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
      {responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);


const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      dates: "Nov 2025 - Present",
      role: "Initiator / Product & AI Integration Lead",
      company: "Imagine Cup 2026 – HiLily Project",
      location: "Auckland",
      responsibilities: [
        "Founder and original initiator of HiLily, a 3-member team project focused on an AI voice companion for older adults living alone.",
        "Led the project from user needs discovery and product definition to MVP delivery, owning core product and technical decisions.",
        "Integrated the Microsoft AI stack (Azure OpenAI, Speech services), and designed a long-term conversational memory and context management pipeline.",
        "Hands-on contributor to end-to-end system integration, including prompt design, API integration, and MVP validation."
      ]
    },
    {
      dates: "2025 - Present",
      role: "Software Development Projects (Academic)",
      company: "Massey University",
      location: "Auckland",
      responsibilities: [
        "Developed a full-stack web application using React and Node.js, implementing RESTful APIs and database integration.",
        "Designed and implemented complex algorithms for data processing and visualization as part of the Information Sciences curriculum.",
        "Collaborated on version-controlled projects using Git, following Agile methodologies and best practices for software quality.",
        "Applied software engineering principles to build scalable and maintainable codebases for various course projects."
      ]
    },
    {
      dates: "2016 - 2022",
      role: "IT Project Manager & Technical Lead",
      company: "Beijing Ruiyousi Information Technology Co., Ltd.",
      location: "Beijing",
      responsibilities: [
        "Led the end-to-end development lifecycle of multiple web and mobile applications, bridging the gap between business requirements and technical implementation.",
        "Managed technical teams to deliver high-quality digital systems, ensuring robust architecture and seamless user experiences.",
        "Hands-on involvement in system analysis, database design, and API integrations for healthcare and e-commerce platforms.",
        "Optimized digital products through data-driven insights, using A/B testing and performance monitoring to improve system efficiency and user engagement.",
        "Coordinated cross-functional teams (Dev, Design, Ops) to ensure timely delivery of complex IT projects within budget."
      ]
    },
    {
      dates: "2014 - 2016",
      role: "Digital Systems & Marketing Manager",
      company: "Beijing Shenghanmei Aesthetic Hospital",
      location: "Beijing",
      responsibilities: [
        "Spearheaded the complete redesign and technical overhaul of the hospital's web presence, significantly improving UX and conversion rates.",
        "Implemented automated lead generation and tracking systems, integrating web platforms with CRM tools for better patient management.",
        "Managed technical aspects of large-scale digital campaigns, ensuring high availability and performance during peak traffic periods.",
        "Developed and maintained custom web features to enhance user interaction and streamline the online consultation process."
      ]
    },
    {
      dates: "2011 - 2014",
      role: "Web Development & Content Manager",
      company: "Beijing Baidecheng Technology Co., Ltd.",
      location: "Beijing",
      responsibilities: [
        "Built and managed a large-scale 'site cluster' using automated content generation and SEO-optimized web structures.",
        "Developed custom landing pages and web interfaces focused on high conversion and optimal user flow.",
        "Implemented technical SEO strategies, including site architecture optimization and schema markup, to drive massive organic traffic.",
        "Managed the technical deployment and maintenance of multiple product-focused websites across various server environments."
      ]
    }
  ];

  return (
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Added padding */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Professional Experience</h1>
      <p className="text-center text-gray-600 text-lg mb-16 md:mb-20 leading-relaxed max-w-3xl mx-auto"> {/* Adjusted margin and max-width */}
        With a strong foundation in Information Sciences and years of experience in IT project management, I specialize in building and leading the delivery of impactful digital solutions. My expertise bridges the gap between technical development and business strategy, focusing on AI integration, full-stack development, and data-driven optimization.
      </p>

      {/* Experience Timeline */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            dates={exp.dates}
            role={exp.role}
            company={exp.company}
            location={exp.location}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;

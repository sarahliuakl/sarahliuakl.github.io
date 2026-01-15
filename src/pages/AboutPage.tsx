import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">About Sarah Liu</h1>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start mb-16">
        {/* Image Column */}
        <div className="md:col-span-1 flex justify-center">
          <img
            src="/images/sarahliu.png"
            alt="Sarah Liu"
            className="rounded-lg w-full max-w-xs object-cover shadow-md"
          />
        </div>

        {/* Text Column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A versatile Software Developer and IT Project Manager with a strong background in Information Sciences from Massey University. I specialize in building AI-powered applications and full-stack web solutions. With years of experience leading digital transformations in major healthcare and tech groups, I bridge the gap between complex technical architecture and business-driven results.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Currently focused on leveraging modern web technologies (React, Node.js, TypeScript) and AI integration (Azure OpenAI, LLMs) to create innovative solutions. I am passionate about clean code, scalable systems, and delivering exceptional user experiences through data-driven development.
          </p>
        </div>
      </div>

      {/* Core Competencies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Technical Competencies</h2>
        <div className="space-y-4">
          <CompetencyItem title="Full-Stack Development:" description="Proficient in React, TypeScript, Node.js, and modern CSS frameworks like Tailwind." />
          <CompetencyItem title="AI & Integration:" description="Experienced in integrating LLMs (OpenAI, Claude), prompt engineering, and AI voice services." />
          <CompetencyItem title="Software Engineering:" description="Strong foundation in algorithms, data structures, and system design principles." />
          <CompetencyItem title="Database Management:" description="Skilled in SQL and NoSQL database design, optimization, and integration." />
          <CompetencyItem title="IT Project Management:" description="Expert in Agile methodologies, end-to-end SDLC management, and technical leadership." />
          <CompetencyItem title="Digital Strategy & SEO:" description="Technical SEO optimization, site architecture, and data-driven performance analysis." />
          <CompetencyItem title="Cloud & DevOps:" description="Familiar with Git version control, CI/CD pipelines, and cloud deployment (Vercel, Netlify)." />
          <CompetencyItem title="Bilingual Communication:" description="Fluent in English and Mandarin, bridging technical teams across multicultural environments." />
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Education</h2>
        <div className="relative pl-6 border-l-2 border-pink-300 space-y-6">
           <EducationItem
             degree="Graduate Diploma in Information Sciences"
             institution="Massey University"
             years="2025 – Present"
             details="Focusing on Software Development, Algorithms, and Data Management. Actively applying theoretical knowledge to real-world full-stack projects."
           />
           <EducationItem
             degree="New Zealand Certificate in English Language (Level 5)"
             institution="Auckland, New Zealand"
             years="2024"
           />
           <EducationItem
             degree="Diploma in Advertising and Promotion"
             institution="Chongqing University of Technology"
             years="2008 - 2011"
           />
        </div>
      </section>

      {/* Personal Attributes */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Personal Attributes</h2>
        <ul className="list-none space-y-3">
          <AttributeItem text="Analytical problem-solver with a focus on scalable and maintainable code" />
          <AttributeItem text="Strong technical leader with experience in cross-functional team collaboration" />
          <AttributeItem text="Continuous learner, staying updated with the latest in AI and web technologies" />
          <AttributeItem text="Detail-oriented with a commitment to high-quality software delivery" />
        </ul>
      </section>
    </div>
  );
};

// Helper components for styling list items
const CompetencyItem = ({ title, description }: { title: string; description: string }) => (
  <div className="grid md:grid-cols-3 gap-2">
    <strong className="md:col-span-1 text-gray-700">{title}</strong>
    <p className="md:col-span-2 text-gray-600">{description}</p>
  </div>
);

const EducationItem = ({ degree, institution, years, details }: { degree: string; institution: string; years: string; details?: string }) => (
  <div className="relative">
     <span className="absolute -left-[34px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-400 ring-4 ring-white"></span>
     <h3 className="font-semibold text-gray-800">{degree}</h3>
     {institution && <p className="text-sm text-gray-600">{institution} {years && `(${years})`}</p>}
     {details && <p className="text-sm text-gray-500 mt-1 italic">{details}</p>}
  </div>
);

const AttributeItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <span className="flex-shrink-0 w-2 h-2 mt-[9px] mr-3 bg-pink-400 rounded-full"></span>
    <span className="text-gray-600">{text}</span>
  </li>
);


export default AboutPage;

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Dreams", imgPath: "/images/dream.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 300, suffix: "+", label: "Webpages Created" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Stakeholder Satisfaction" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NextJS Developer",
    imgPath: "/images/logos/Next.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Prashast, your hard work on WordPress performance and responsive design at the Fight Club was a technical knockout.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/word-logo.png",
    title: "Melbourne Fight Club - Martial Arts Academy- Front-End Consultant",
    date: "04/2024 – 11/2025",
    responsibilities: [
      " System Stability: Consulted on the recovery and maintenance of a legacy WordPress platform, resolving critical PHP/CSS bugs to ensure 100% uptime for community members.",
      "Growth Strategy: Executed a technical SEO overhaul and integrated advanced analytics, driving a measurable increase in local search visibility and new student conversions",
    ],
  },
  {
    review:
      "Prashast, your Shopify skills and collaborative redesign at BitsnBob were technically sharp and boosted user engagement.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/shop-logo.png",
    title: "BitsnBob - Frontend Consultant/Shopify Developer",
    date: "11/2023 - 02/2024",
    responsibilities: [
      "UX Transformation: Redesigned the e-commerce storefront using Liquid and custom CSS, creating a mobile-first, playful shopping journey that improved site flow and engagement.",
    ],
  },
  {
    review:
      "Prashast, your advanced front-end skills, combined with your collaborative spirit at Trenery, delivered impressive and dynamic results.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/html-logo.png",
    title: "Trenery - Digital Brand Lead",
    date: "08/2022 - 06/2023",
    responsibilities: [
      "Autonomous Brand Ownership: Acted as the dedicated technical lead for Trenery. While operating within a shared group reporting structure, I held 100% responsibility for Trenery’s frontend delivery—owning the pipeline from architectural decisions to final production-ready code.",
      "Technical Resourcefulness (CSS Grid): Engineered complex, responsive layouts using CSS Grid and vanilla CSS to navigate platform limitations. Successfully delivered modern, pixel-perfect designs without access to utility libraries like Tailwind, ensuring Trenery’s premium aesthetic was never compromised.",
      "Workflow Integration: Implemented development methodologies proven during my time at MIMCO to streamline Trenery’s campaign cycles, focusing on modularity and reusable patterns to manage frequent site updates independently.",
      "Strategic Collaboration: Partnered directly with the Department Head to align Trenery’s digital roadmap with group-wide objectives, while maintaining a close peer relationship with the Country Road developer to ensure technical consistency across the organization.",
      "Cross-Brand Support: Maintained high-level platform stability by providing critical troubleshooting and bug fixes for the Country Road site during peak traffic periods, proving an ability to manage multiple brand priorities simultaneously.",
    ],
  },
  {
    review:
      "Prashast, your technical expertise and collaborative efforts at MIMCO, especially with UI components and API integrations, were key to a flawless user experience.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/html-logo.png",
    title: "MIMCO - Lead Front End Developer",
    date: "04/2019 - 08/2022 ",
    responsibilities: [
      "Sole Frontend Ownership: Directly responsible for the end-to-end frontend architecture of the MIMCO platform. I transformed complex wireframes into high-performance, interactive interfaces while serving as the technical liaison for the Design and Marketing teams.",
      "Accessibility & Inclusion: Championed and implemented WCAG accessibility standards across the site, ensuring that the digital experience was inclusive for all users, including those utilizing screen readers or keyboard navigation.",
      "Responsive Excellence: Engineered fluid, responsive layouts for all new page builds, ensuring a mobile-first experience that maintained brand integrity across all devices and screen sizes.",
      "Architectural Initiative: Pioneered the standardization of homepage design templates. This strategic shift reduced manual coding for seasonal campaigns, allowing the creative team to launch new content with greater speed and autonomy.",
      "Major Platform Overhauls: Spearheaded the development of the Sustainability Hub and Returns & Delivery Hub, focusing on intuitive navigation to improve the post-purchase customer experience.",
      "Cross-Functional Collaboration: Actively supported developers across the broader Country Road Group, stepping in to assist other brand squads during peak workloads to ensure group-wide deadlines were met",
    ],
  },
  {
    review:
      "Prashast, your early HTML/CSS work and diligent updates showed great technical promise and a strong work ethic.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/html-logo.png",
    title: "Country Road and Trenery - Front End Developer",
    date: "11/2018 - 04/2019 ",
    responsibilities: [
      "Digital Content Delivery: Played a key role in the daily maintenance of the Country Road and Trenery homepages, ensuring that campaign banners, promotional links, and blog content were updated accurately and deployed on schedule.",
      "Inventory & Catalog Management: Managed the end-to-end product lifecycle within the CMS—from adding new listings and editing descriptions to performing stock audits—ensuring the digital storefront accurately reflected physical inventory.",
      "User Experience Support: Developed responsive landing pages and blog layouts, focusing on high-quality visuals and seamless cross-device performance to support brand marketing initiatives.",
      "Technical SEO: Improved site discoverability by optimizing metadata and site structure for new product launches and editorial content.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/prashast-gupta-705464123/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

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
    title: "Melbourne Fight Club - Martial Arts Academy- Senior Software Engineer (Contractor)",
    date: "04/2024 – 11/2025",
    responsibilities: [
      "High-Traffic Optimization: Audited and refactored a legacy codebase for a high-traffic health and fitness community platform, rewriting critical backend services and UI components to seamlessly handle sudden traffic spikes.",
      "SEO & Analytics: Reengineered the platform's technical SEO foundation and established a clean, data-driven analytics pipeline to track conversion funnels and user acquisition.",
      "AI-Accelerated Delivery: Utilized advanced AI-assisted development tools (Cursor, Copilot) to rapidly audit legacy systems and prototype integrations, ensuring safety via comprehensive test coverage before production deployment",
    ],
  },
  {
    review:
      "Prashast, your Shopify skills and collaborative redesign at BitsnBob were technically sharp and boosted user engagement.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/shop-logo.png",
    title: "BitsnBob - Full-Stack Engineer (Contractor)",
    date: "11/2023 - 02/2024",
    responsibilities: [
      "Responsive UI Architecture: Rebuilt the core e-commerce storefront from the ground up using modern, mobile-first CSS methodologies, eliminating user friction and significantly optimizing page load velocity.",
      "Agile Iteration: Translated abstract business requirements directly into rapid, functional prototypes and production-ready code within tight, iterative release loops.",
    ],
  },
  {
    review:
      "Prashast, your advanced front-end skills, combined with your collaborative spirit at Trenery, delivered impressive and dynamic results.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/html-logo.png",
    title: "Trenery - Senior Software Engineer",
    date: "08/2022 - 06/2023",
    responsibilities: [
      "Full-Stack Campaign Support: Served as the primary senior engineer driving digital operations, leveraging React, Vue, and TypeScript to deploy high-traffic checkout flows and membership sign-up systems.",
      "Headless CMS Migration: Co-architected a hybrid headless CMS strategy, transitioning the frontend to Contentful while safely interfacing with legacy enterprise backend inventory APIs without downtime",
      "DevOps Modernization: Successfully championed and led the migration of Trenery’s legacy code repository from local network drives to GitHub, establishing modern version control practices and automated deployment workflows.",
      "Kanban Delivery: Managed a high-turnaround workflow via Asana, collaborating daily with marketing and e-commerce managers to turn briefs into live landing pages within 24 hours.",
    ],
  },
  {
    review:
      "Prashast, your technical expertise and collaborative efforts at MIMCO, especially with UI components and API integrations, were key to a flawless user experience.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/html-logo.png",
    title: "MIMCO - Senior Front-End Developer",
    date: "04/2019 - 08/2022 ",
    responsibilities: [
      "E-Commerce Engineering: Maintained and optimized the enterprise Magento storefront, customizing core functionalities and theme architectures to support large-scale retail operations.",
      "Component Architecture: Engineered a modular, reusable UI component library using React and modern CSS integrated with the Magento frontend ecosystem, accelerating campaign launch times across the wider organization.",
      "Data Integrity & Scale: Managed complex, local-to-cloud database synchronizations to ensure digital web storefront inventory on Magento aligned precisely with physical warehouse stock during peak nationwide sales events",
      "Accessibility & Compliance: Conducted a comprehensive audit of site navigation and checkout flows, implementing structural changes to achieve strict WCAG compliance for screen readers and keyboard accessibility.",
      "CI/CD & Testing: Standardized testing protocols by implementing unit tests via React Testing Library and constructing automated CI/CD deployment pipelines using GitHub Actions.",
      "Data & API Migration: Led the progressive migration of the frontend away from legacy monolithic views toward a modern headless stack, safely decoupling frontend components from the Magento backend without causing user downtime.",
    ],
  },
  {
    review:
      "Prashast, your early HTML/CSS work and diligent updates showed great technical promise and a strong work ethic.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/html-logo.png",
    title: "Country Road and Trenery - Software Developer",
    date: "11/2018 - 04/2019 ",
    responsibilities: [
      "Campaign Delivery: Maintained the in-house digital build system, collaborating closely with design and marketing teams to deploy high-visibility campaign pages to a massive national audience.",
      "Database Management: Administered complex relational SQL databases to ensure accurate real-time inventory tracking between digital storefronts and physical distribution centers.",
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

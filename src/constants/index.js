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
        name: "Next Developer",
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
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "FightClub - WordPress Developer",
        date: "04/2024 – Present",
        responsibilities: [
            "Developed and maintained user-facing features for the WordPress website.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized website for maximum speed and scalability.",
        ],
    },
    {
        review:
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "BitsnBoB - Shopify Developer",
        date: "11/2023 - 02/2024",
        responsibilities: [
            "Updated category pages with dynamic banners",
            "Redesigned the Shopify site with modern visuals and better navigation",
            "Improved store performance using Shopify features and custom HTML/CSS, ensuring consistent responsive experience.",
        ],
    },
    {
        review:
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Trenery - Full Stack Developer",
        date: "08/2022 - 06/2023",
        responsibilities: [
            "Integrated RESTful APIs (Node.js assisted) for real-time product/stock data (LookBook Hub) from Contentful/iSams/DBs to a React/Tailwind UI.",
            "Developed full-stack features, building responsive React/Tailwind UIs connected to backend services & content APIs.",
            "Managed end-to-end content data flow from CMS (Contentful, iSams) via APIs to dynamic React front-end.",
            "Conducted full-stack audits (performance, API, data) & provided multi-tier client/server technical support",
            "Coordinated web launches & feature rollouts with cross-functional (Digital, Marketing, Tech) teams.",
        ],
    },
    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "MIMCO - Full Stack Developer",
        date: "04/2019 - 08/2022 ",
        responsibilities: [
            "Integrated e-commerce REST APIs (Fred Hopper, Klarna, iSams), using Node.js for scripts & React UI data flow.",
            "Full-stack development of site hubs (Sustainability, Delivery/Returns) with iSams data & React UIs.",
            "Led technical development for launch/content pages, managing iSams data-to-UI pipeline.",
            "Developed 20-50+ reusable React UI components; improved site compliance & accessibility.",
            "Provided tech support (iSams/API issues) & coordinated launches with Digital/Marketing.",
        ],
    },
    {
        review:
            "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Country Road and Trenery - Junior Front End Developer",
        date: "11/2018 - 04/2019 ",
        responsibilities: [
            "Built responsive homepages/blogs (HTML, CSS, Vanilla JS) with iSams content integration, increasing user engagement",
            "Updated 100+ iSams product listings, handled URL redirects & basic technical SEO.",
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
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
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
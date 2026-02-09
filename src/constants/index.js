import project1 from "../assets/projects/project-1.png";
import project1_1 from "../assets/projects/project-1.1.png";
import project1_2 from "../assets/projects/project-1.2.png";
import project1_3 from "../assets/projects/project-1.3.png";
import project1_4 from "../assets/projects/project-1.4.png";
import project2 from "../assets/projects/project-2.png";
import project2_1 from "../assets/projects/project-2.1.png";
import project2_2 from "../assets/projects/project-2.2.png";
import project2_3 from "../assets/projects/project-2.3.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project4_1 from "../assets/projects/project-4.1.png";
import project4_2 from "../assets/projects/project-4.2.png";
import project4_3 from "../assets/projects/project-4.3.png";
import mofLogo from "../assets/companies/mof_logo.png";
import ibiLogo from "../assets/companies/ibi_logo.png";
import mongolsatLogo from "../assets/companies/mongolsat_logo.png";

import {
  RiReactjsLine,
  RiAngularjsLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiBootstrapFill,
} from "react-icons/ri";

import {
  SiApachekafka,
  SiAxios,
  SiBitbucket,
  SiCucumber,
  SiDocker,
  SiEclipseide,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHibernate,
  SiIntellijidea,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJquery,
  SiJunit5,
  SiKubernetes,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiRedux,
  SiSelenium,
  SiSpring,
  SiSpringsecurity,
  SiSwagger,
  SiTypescript,
  SiPython,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import { TbBrandVisualStudio } from "react-icons/tb";
import { FaNodeJs, FaJava, FaAws, FaDatabase, FaWindows } from "react-icons/fa";

export const HERO_CONTENT = `I’m a Senior Full Stack Software Engineer with 8+ years of experience building scalable, cloud-native, high-availability web applications. I specialize in modern frontend development with Angular and React, and backend systems using Java/Spring Boot, Node.js, and SQL/NoSQL databases.

I enjoy owning solutions end-to-end—turning business goals into clean architectures, secure APIs, and polished user experiences. I thrive in fast-moving teams, especially in FinTech and Entertainment, where performance, security, and UX matter most.`;

export const GROUP_NAMES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Cloud & Tools",
  "IDEs",
];

export const SKILLS = [
  // Backend / Programming
  {
    Icon: FaJava,
    color: "text-red-500",
    label: "Java",
    years: 6,
    description:
      "Built production microservices and tools using Java 8–11 (Streams, concurrency), including performance-focused data processing utilities.",
    group: "Backend",
  },
  {
    Icon: SiJavascript,
    color: "text-yellow-500",
    label: "JavaScript",
    years: 8,
    description:
      "Delivered customer-facing and internal web apps using ES6+, async patterns, AJAX workflows, and modular codebases.",
    group: "Frontend",
  },
  {
    Icon: SiTypescript,
    color: "text-blue-500",
    label: "TypeScript",
    years: 6,
    description:
      "Developed large Angular applications with strong typing and maintainable architecture, improving reliability and delivery speed.",
    group: "Frontend",
  },
  {
    Icon: SiPython,
    color: "text-blue-400",
    label: "Python (Flask)",
    years: 3,
    description:
      "Built RESTful APIs using Python and Flask, implementing CRUD operations, authentication, validation, and database integrations for microservice-style backends.",
    group: "Backend",
  },
  {
    Icon: FaWindows,
    color: "text-blue-500",
    label: "IIS Server",
    years: 3,
    description:
      "Hosted and maintained IIS deployments, configuring application pools, SSL bindings, and environment settings for reliable web app delivery.",
    group: "DevOps",
  },


  // Databases
  {
    Icon: SiMysql,
    color: "text-blue-700",
    label: "MySQL",
    years: 8,
    description:
      "Designed schemas and optimized SQL for transactional systems; tuned queries/indexes and supported production troubleshooting.",
    group: "Database",
  },
  {
    Icon: SiPostgresql,
    color: "text-blue-700",
    label: "PostgreSQL",
    years: 4,
    description:
      "Worked with relational data modeling and query optimization for reporting and application workloads.",
    group: "Database",
  },

  // Frontend / Web
  {
    Icon: RiHtml5Fill,
    color: "text-orange-500",
    label: "HTML5",
    years: 8,
    description:
      "Converted UI/UX designs into semantic, accessible HTML layouts used in enterprise dashboards and portals.",
    group: "Frontend",
  },
  {
    Icon: RiCss3Fill,
    color: "text-blue-400",
    label: "CSS3",
    years: 8,
    description:
      "Built responsive UI systems with SASS and modern layout techniques; maintained consistent styling across large apps.",
    group: "Frontend",
  },
  {
    Icon: RiBootstrapFill,
    color: "text-purple-500",
    label: "Bootstrap",
    years: 7,
    description:
      "Delivered responsive dashboards and admin portals quickly using Bootstrap’s grid and components with custom theming.",
    group: "Frontend",
  },
  {
    Icon: SiJquery,
    color: "text-blue-600",
    label: "jQuery",
    years: 5,
    description:
      "Enhanced legacy web systems with DOM manipulation and AJAX-based features; built responsive UI components early in career.",
    group: "Frontend",
  },
  {
    Icon: SiAxios,
    color: "text-green-500",
    label: "Axios",
    years: 4,
    description:
      "Implemented API layers with interceptors, auth token handling, and consistent error/retry patterns for frontend apps.",
    group: "Frontend",
  },
  {
    Icon: RiReactjsLine,
    color: "text-cyan-400",
    label: "React",
    years: 6,
    description:
      "Built and maintained SPAs; contributed to migrating a legacy ERP UI to React, improving client performance and scalability.",
    group: "Frontend",
  },
  {
    Icon: RiAngularjsLine,
    color: "text-red-500",
    label: "Angular",
    years: 6,
    description:
      "Developed cloud-native Angular SPAs (Angular 8+), using RxJS and modular architecture for maintainable enterprise systems.",
    group: "Frontend",
  },
  {
    Icon: SiRedux,
    color: "text-purple-500",
    label: "Redux",
    years: 4,
    description:
      "Managed complex application state with Redux patterns to keep UI behavior predictable and scalable as features grew.",
    group: "Frontend",
  },

  // Backend frameworks
  {
    Icon: SiSpring,
    color: "text-green-700",
    label: "Spring Boot",
    years: 6,
    description:
      "Architected and delivered microservices with Spring Boot, including secure APIs, caching, and CI/CD-driven deployments.",
    group: "Backend",
  },
  {
    Icon: SiSpringsecurity,
    color: "text-green-700",
    label: "Spring Security",
    years: 5,
    description:
      "Implemented OAuth2/JWT authentication, authorization, and secure service-to-service communication for REST APIs.",
    group: "Backend",
  },
  {
    Icon: FaNodeJs,
    color: "text-green-500",
    label: "Node.js",
    years: 7,
    description:
      "Built REST services and internal tools with Express.js; delivered production systems using Node.js with MySQL/MongoDB.",
    group: "Backend",
  },

  // Database / Persistence
  {
    Icon: SiMongodb,
    color: "text-green-700",
    label: "MongoDB",
    years: 5,
    description:
      "Designed NoSQL schemas and optimized read/write patterns for features requiring flexible data models and fast iteration.",
    group: "Database",
  },
  {
    Icon: FaDatabase,
    color: "text-blue-600",
    label: "SQL Server",
    years: 4,
    description:
      "Built complex stored procedures and a high-accuracy tracking algorithm that significantly reduced inventory loss.",
    group: "Database",
  },
  {
    Icon: SiMongoose,
    color: "text-green-500",
    label: "Mongoose",
    years: 4,
    description:
      "Implemented schema validation and data access layers for Node.js services using MongoDB in production.",
    group: "Database",
  },
  {
    Icon: SiHibernate,
    color: "text-orange-500",
    label: "JPA & Hibernate",
    years: 5,
    description:
      "Optimized persistence layers using JPA/Hibernate; tuned performance with mapping strategies and query improvements.",
    group: "Database",
  },

  // Cloud
  {
    Icon: FaAws,
    color: "text-orange-500",
    label: "AWS",
    years: 5,
    description:
      "Deployed and maintained applications on EC2, Lambda, S3, and RDS with reliability, scalability, and cost awareness.",
    group: "Cloud & Tools",
  },
  {
    Icon: FaAws,
    color: "text-blue-500",
    label: "Microsoft Azure",
    years: 2,
    description:
      "Worked with Azure App Service and managed MySQL on Azure for cloud-hosted application environments.",
    group: "Cloud & Tools",
  },

  // Messaging & Caching
  {
    Icon: SiApachekafka,
    color: "text-purple-500",
    label: "Kafka",
    years: 2,
    description:
      "Used Kafka for event-driven communication between services to support scalable, decoupled workflows.",
    group: "Cloud & Tools",
  },
  {
    Icon: SiRedis,
    color: "text-red-500",
    label: "Redis",
    years: 4,
    description:
      "Implemented Redis caching for performance improvements, session handling, and reduced load on backend services.",
    group: "Cloud & Tools",
  },

  // DevOps & CI/CD
  {
    Icon: SiGit,
    color: "text-orange-500",
    label: "Git",
    years: 8,
    description:
      "Used Git daily with branching strategies, code reviews, and collaboration across multi-team Agile environments.",
    group: "DevOps",
  },
  {
    Icon: SiGithubactions,
    color: "text-green-500",
    label: "GitHub Actions",
    years: 3,
    description:
      "Automated CI/CD for builds, tests, and deployments; improved release speed and consistency across environments.",
    group: "DevOps",
  },
  {
    Icon: SiDocker,
    color: "text-blue-500",
    label: "Docker",
    years: 5,
    description:
      "Containerized services to standardize environments and streamline CI/CD workflows and production deployments.",
    group: "DevOps",
  },
  {
    Icon: SiJenkins,
    color: "text-purple-500",
    label: "Jenkins",
    years: 4,
    description:
      "Built and maintained Jenkins pipelines for automated builds, testing, and deployments to reduce release effort.",
    group: "DevOps",
  },
  {
    Icon: SiKubernetes,
    color: "text-blue-600",
    label: "Kubernetes",
    years: 3,
    description:
      "Worked with Kubernetes deployments and orchestration concepts to support scalable container-based environments.",
    group: "DevOps",
  },

  // Testing & Quality
  {
    Icon: SiSelenium,
    color: "text-green-500",
    label: "Selenium WebDriver",
    years: 3,
    description:
      "Automated browser testing for critical user flows to increase confidence and reduce regression in releases.",
    group: "Cloud & Tools",
  },
  {
    Icon: SiCucumber,
    color: "text-pink-500",
    label: "Cucumber",
    years: 3,
    description:
      "Implemented BDD scenarios to align acceptance criteria with automated test coverage in Agile teams.",
    group: "Cloud & Tools",
  },
  {
    Icon: SiJunit5,
    color: "text-red-500",
    label: "JUnit 5",
    years: 6,
    description:
      "Built unit and integration test suites for backend services to improve stability and maintain clean codebases.",
    group: "Cloud & Tools",
  },
  {
    Icon: SiSwagger,
    color: "text-green-500",
    label: "RestAssured",
    years: 4,
    description:
      "Created automated API test suites validating auth, edge cases, and contracts to reduce manual testing work.",
    group: "Cloud & Tools",
  },
  {
    Icon: SiPostman,
    color: "text-blue-500",
    label: "Postman",
    years: 6,
    description:
      "Validated and documented REST APIs for development and QA workflows; supported debugging across environments.",
    group: "Cloud & Tools",
  },

  // IDEs & Editors
  {
    Icon: DiVisualstudio,
    color: "text-purple-500",
    label: "Visual Studio 2019",
    years: 4,
    description:
      "Developed and debugged enterprise .NET applications and reporting/dashboard features during ERP and finance work.",
    group: "IDEs",
  },
  {
    Icon: TbBrandVisualStudio,
    color: "text-blue-400",
    label: "Visual Studio Code",
    years: 8,
    description:
      "Primary editor for frontend/Node workflows with linting, formatting, and debugging for fast iteration.",
    group: "IDEs",
  },
  {
    Icon: SiIntellijidea,
    color: "text-red-500",
    label: "IntelliJ IDEA",
    years: 6,
    description:
      "Primary IDE for Java/Spring Boot development, debugging production issues, and maintaining large codebases.",
    group: "IDEs",
  },
  {
    Icon: SiEclipseide,
    color: "text-indigo-500",
    label: "Eclipse",
    years: 4,
    description:
      "Supported Java maintenance tasks and legacy project work across enterprise environments.",
    group: "IDEs",
  },

  // Project Management & SDLC
  {
    Icon: SiJira,
    color: "text-blue-500",
    label: "JIRA",
    years: 6,
    description:
      "Used JIRA for sprint planning, backlog refinement, and delivery tracking across multiple Agile teams.",
    group: "Cloud & Tools",
  },
  {
    Icon: SiBitbucket,
    color: "text-purple-500",
    label: "Bitbucket",
    years: 4,
    description:
      "Collaborated via PR workflows, code reviews, and team branching strategies on enterprise repositories.",
    group: "Cloud & Tools",
  },
  {
    Icon: FaAws,
    color: "text-green-500",
    label: "Agile (Scrum)",
    years: 8,
    description:
      "Delivered production software in Scrum teams, collaborating cross-functionally and supporting CI/CD-driven releases.",
    group: "Cloud & Tools",
  },

  // API style (optional to display if you render it)
  {
    Icon: SiGraphql,
    color: "text-pink-500",
    label: "GraphQL",
    years: 2,
    description:
      "Worked with GraphQL concepts and API integration patterns alongside REST in modern application environments.",
    group: "Backend",
  },
];

export const ACHIEVEMENTS = [
  {
    period: "May 2015 - Dec 2016",
    duration: "1 yr 8 mos",
    title: "Junior Software Developer",
    company: "Ministry of Finance, Mongolia",
    logo: mofLogo,
    employmentType: "Contract",
    location: "Ulaanbaatar, Mongolia",
    workMode: "On-site",
    responsibility: [
      "Delivered an end-to-end government inventory management system using Node.js, JavaScript, jQuery, and MySQL.",
      "Built responsive UI components with HTML, CSS, Bootstrap, and JavaScript to improve usability and navigation.",
      "Supported mission-critical operations during the 16th ASEM Summit (2016) for a large government project.",
    ],
  },
  {
    period: "Dec 2016 - Mar 2020",
    duration: "3 yrs 4 mos",
    title: "Full Stack Developer",
    company: "Interactive BI LLC",
    logo: ibiLogo,
    employmentType: "Full-time",
    location: "Ulaanbaatar, Mongolia",
    workMode: "On-site",
    responsibility: [
      "Led migration of a legacy ERP UI from ASP.NET MVC to React, improving client-side performance and scalability.",
      "Designed an inventory tracking algorithm using SQL Server, significantly reducing inventory loss.",
      "Built financial reporting systems and real-time dashboards, improving data accuracy and operational efficiency.",
    ],
  },
  {
    period: "Mar 2020 - Dec 2025",
    duration: "5 yrs 10 mos",
    title: "Senior Full Stack Developer",
    company: "MongolSat Networks LLC",
    logo: mongolsatLogo,
    employmentType: "Full-time",
    location: "Ulaanbaatar, Mongolia",
    workMode: "Remote",
    responsibility: [
      "Built cloud-native React web apps and Spring Boot microservices powering customer-facing and internal platforms.",
      "Implemented 50+ secure REST microservices with Spring Security, JWT, Redis, and CI/CD pipelines.",
      "Integrated payment APIs and improved transaction performance; led code reviews and mentored engineers.",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "MongolSat Content & Streaming Platform",
    image: project1,
    relatedImages: [project1, project1_1, project1_2, project1_3, project1_4],
    description: "Full-stack platform for managing content, services, and subscriptions in the telecom/media domain.",
    subDescription:
      "Led end-to-end development of customer-facing and internal enterprise systems, delivering secure payments, scalable web apps, and cloud-native services supporting telecom/media workflows.",
    skills: ["Java", "Spring Boot", "React", "Redux", "MySQL", "AWS"],
    href: "https://www.mongolsat.mn",
  },
  {
  id: 2,
  title: "Satellite Operations & Broadband Service Portal",
  description:
    "Customer-facing portal enabling real-time tracking of payments, data usage, and service activity through interactive dashboards.",
  image: project2,
  relatedImages: [project2, project2_1, project2_2, project2_3],
  subDescription:
    "Designed and developed a web platform that provides real-time insights into satellite broadband usage, transactions, and service progress via intuitive dashboards.",
  skills: ["React", "HTML5", "CSS3", "JavaScript", "MySQL", "IIS Server"],
  href: "https://www.isatcom.mn"
  },
  {
    id: 3,
    title: "ERP Inventory Management System",
    description: "Enterprise system focusing on accurate tracking and reporting, with performance-optimized database workflows.",
    image: project3,
    relatedImages: [project3],
    subDescription:
      "Enterprise inventory system focusing on accurate tracking and reporting, with performance-optimized database workflows.",
    skills: ["Java", "JavaScript", "SQL Server", "HTML5", "CSS3", "Bootstrap"],
    href: "https://www.mongolsat.mn",
  },
  {
    id: 4,
    title: "Kinder Garden Website",
    description: "Kids-focused website with modern UI and content pages, built for a small organization to improve online presence.",
    image: project4,
    relatedImages: [project4, project4_1, project4_2, project4_3],
    subDescription:
      "Public-facing website with modern UI and content pages, built for a small organization to improve online presence.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", "MySQL"],
    href: "https://www.basarkhan.mn",
  },
];

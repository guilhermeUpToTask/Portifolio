import { IconDefinition, faJs, faReact, faHtml5, faCss3, faNodeJs, faDocker, faPython, faJava, faBootstrap} from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import fastApiUrl from '../../assets/icons/techs/fastapi-svg.svg'
import firebaseUrl from '../../assets/icons/techs/firebase-svg.svg'
import mongodbUrl from '../../assets/icons/techs/mongodb-svg.svg'
import mysqlUrl from '../../assets/icons/techs/mysql-svg.svg'
import nextJsUrl from '../../assets/icons/techs/next-dot-js-svg.svg'
import postgresUrl from '../../assets/icons/techs/postgresql-svg.svg'
import tailwindUrl from '../../assets/icons/techs/tailwind-svg.svg'
import scraperUrl from '../../assets/icons/techs/scraper-svg.svg'

type Skill = {
    name: string,
    logo: IconDefinition | string,
    link: string,
    description: string
}

export const skills: Skill[] = [
    {
        name: "HTML",
        logo: faHtml5,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description: "HTML is the standard markup language for Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web."
    },
    {
        name: "CSS",
        logo: faCss3,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        description: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },
    {
        name: "JavaScript",
        logo: faJs,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "JavaScript is a high-level, interpreted programming language. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
    },
    {
        name: "TypeScript",
        logo: faDocker,
        link: "https://www.typescriptlang.org/",
        description: "TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes before you even run your code."
    },
    {
        name: "React",
        logo: faReact,
        link: "https://reactjs.org/",
        description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
        name: "NodeJS",
        logo: faNodeJs,
        link: "https://nodejs.org/",
        description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
    },
    {
        name: "Python",
        logo: faPython,
        link: "https://www.python.org/",
        description: "Python is a versatile programming language that can be used for many different programming tasks, from web development to data analysis."
    },
    {
        name: "Java",
        logo: faJava,
        link: "https://www.java.com/",
        description: "Java is a widely-used programming language expressly designed for use in the distributed environment of the internet."
    },
    {
        name: "Supabase",
        logo: faBolt,
        link: "https://supabase.io/",
        description: "Supabase is an open-source Firebase alternative. Supabase gives you the power of a Firebase backend with the flexibility of an open-source database."
    },
    {
        name: "Firebase",
        logo: firebaseUrl,
        link: "https://firebase.google.com/",
        description: "Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business."
    },
    {
        name: "MongoDB",
        logo: mongodbUrl,
        link: "https://www.mongodb.com/",
        description: "MongoDB is a general-purpose, document-based, distributed database built for modern application developers and for the cloud era."
    },
    {
        name: "PostgreSQL",
        logo: postgresUrl,
        link: "https://www.postgresql.org/",
        description: "PostgreSQL is a powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads."
    },
    {
        name: "MySQL",
        logo: mysqlUrl,
        link: "https://www.mysql.com/",
        description: "MySQL is the most popular open-source database system. It is noted for its speed and reliability."
    },
    {
        name: "Bootstrap",
        logo: faBootstrap,
        link: "https://getbootstrap.com/",
        description: "Bootstrap is a popular front-end framework for building responsive and mobile-first websites."
    },
    {
        name: "Tailwind CSS",
        logo: tailwindUrl,
        link: "https://tailwindcss.com/",
        description: "Tailwind CSS is a utility-first CSS framework for quickly building custom designs."
    },
    {
        name: "Next.js",
        logo: nextJsUrl,
        link: "https://nextjs.org/",
        description: "Next.js is a React framework for building server-side rendered and statically generated applications."
    },
    {
        name: "FastAPI",
        logo: fastApiUrl,
        link: "https://fastapi.tiangolo.com/",
        description: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints."
    },
    {
        name: "Scrapy",
        logo: scraperUrl,
        link: "https://scrapy.org/",
        description: "Scrapy is a fast, open-source web crawling framework written in Python, used to extract the data from the web page with the help of selectors based on XPath."
    },
    {
        name: "Docker",
        logo: faDocker,
        link: "https://www.docker.com/",
        description: "Docker is a platform for developers and sysadmins to build, share, and run applications with containers."
    }
]
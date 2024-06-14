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
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "HTML is the standard markup language for Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web."
    },{
        name: "CSS",
        logo: faCss3,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. CSS is a cornerstone technology of the World Wide Web, alongside "
    },{
        name: "JavaScript",
        logo: faJs,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "JavaScript is a high-level, interpreted programming language. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
    },{
        name: "TypeScript",
        logo: faDocker,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "React",
        logo: faReact,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },{
        name: "NodeJS",
        logo: faNodeJs,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
    },{
        name: "Python",
        logo: faPython,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "Java",
        logo: faJava,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "Supabase",
        logo: faBolt,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "Firebase",
        logo: firebaseUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "MongoDB",
        logo: mongodbUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "PostgresSQL",
        logo: postgresUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "MySQL",
        logo: mysqlUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "BootStrap",
        logo: faBootstrap,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "TailWindCSS",
        logo: tailwindUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "NextJS",
        logo: nextJsUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "FastApi",
        logo: fastApiUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "Scrapy",
        logo: scraperUrl,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    },{
        name: "Docker",
        logo: faDocker,
        link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        description: "Docker is a software platform for developing, deploying, and managing applications. Docker is a tool for building, running, and sharing containers."
    }
]

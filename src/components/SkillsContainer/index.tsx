import Title from "../Typography/Title"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from "./Skills";


export default function SkillsContainer(): React.ReactElement {

    const displaySkills = skills.map((skill, index) => {
        return (
            <article
                className={`
                    w-full 
                    sm:w-1/2 
                    md:w-1/3 
                    lg:w-1/6 
                    p-4 
                    m-2 
                    bg-gradient-to-br 
                    from-gray-900 
                    to-gray-700 
                    text-white 
                    rounded-lg 
                    shadow-lg 
                    transform transition-transform duration-300 hover:scale-105 
                    hover:shadow-xl 
                    hover:cursor-pointer
                    text-center
                    `}
                key={index}
            >
               <FontAwesomeIcon icon={skill.logo} className="text-4xl mb-4" />
                <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
            </article>
        )
    })

    return (
        <section className="min-h-[100vh] w-full bg-white p-6 text-left scroll-m-[10vh]" id='skills'>
            <Title>Skills</Title>

            <section className="flex flex-wrap justify-center items-center">
                {displaySkills}
            </section>
        </section>
    )
}
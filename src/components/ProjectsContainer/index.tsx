import Title from "../Typography/Title"
import { projects } from "./Projects"

export default function ProjectsContainer(): React.ReactElement {

    const displayProjects = projects.map((project, index) => {
        return (
            <article key={index} className="flex flex-col lg:flex-row border p-6 rounded-lg shadow-lg mb-4 overflow-y-auto">
                <div className="flex-shrink-0 lg:mr-6 mb-4 lg:mb-0 self-center">
                    <div className="bg-blue-500 text-white p-4 rounded-full">
                        <i className="fab fa-linkedin text-2xl"></i>
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <div>
                        <h1 className="text-2xl font-bold mb-2 text-black">{project.name}</h1>
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <a href={project.links[0]} className="text-blue-500 hover:underline">Live Project</a>
                        <a href={project.links[1]} className="text-blue-500 hover:underline">Source Code</a>
                    </div>
                </div>
            </article>
        )
    })

    return (
        <section className="min-h-[100vh] w-full bg-white p-6 text-left scroll-m-[10vh]" id='projects'>
            {/*Articles with each one with the logo title and description of the project, as such the respective links in logo format */}
            <Title>Projects</Title>

            <section className="flex flex-col">
                {displayProjects}
            </section>
        </section>
    )
}
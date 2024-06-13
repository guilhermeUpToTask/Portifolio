import React from "react";
import Title from "../Typography/Title";
import { projects } from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './projects-style.css'; // Ensure this CSS file contains necessary styles

export default function ProjectsContainer(): React.ReactElement {
    const getDynamicBackground = (color: string) => {
        return {
            backgroundColor: 'white',
            backgroundSize: '3rem 3rem',
            backgroundImage: `linear-gradient(0deg, transparent 24%, ${color} 25%, ${color} 26%, transparent 27%, transparent 74%, ${color} 75%, ${color} 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, ${color} 25%, ${color} 26%, transparent 27%, transparent 74%, ${color} 75%, ${color} 76%, transparent 77%, transparent)`
        }
    }

    const displayProjects = projects.map((project, index) => {
        return (

            <article key={index} className={'rounded-md shadow-lg mb-4 overflow-y-auto p-[2px]'}
                style={{
                    backgroundImage: `linear-gradient(to right, ${project.mainColor}, ${project.secondColor})`
                }}
            >
                <div className="flex flex-col lg:flex-row h-full w-fullp-6 rounded-md p-1" style={getDynamicBackground('gray')}>
                    <div className="flex-shrink-0 lg:mr-6 mb-4 lg:mb-0 self-center">
                        <FontAwesomeIcon icon={faReact} className="text-6xl bg-black rounded-full p-1 text-white" />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <h1 className="text-2xl font-bold mb-2 text-black bg-white w-fit p-1">{project.name}</h1>
                            <p className="text-gray-700 bg-white w-fit p-1 mb-2">{project.description}</p>
                        </div>
                        <div className="mt-4 lg:mt-0 bg-white w-fit flex">
                            <a href={project.links[0]} className="text-gray-700 hover:underline hover:cursor-pointer hover:text-gray-400 p-1" target="_blank">
                                <FontAwesomeIcon icon={faLink} />Live Project
                            </a>
                            <a href={project.links[1]} className="text-gray-700 hover:underline hover:cursor-pointer hover:text-gray-400 p-1" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        );
    });

    return (
        <section className="min-h-[100vh] w-full p-6 text-left scroll-m-[10vh] bg-white" id='projects'>
            <Title>Projects</Title>
            <section className="flex flex-col">
                {displayProjects}
            </section>
        </section>
    );
}

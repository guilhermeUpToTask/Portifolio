export default function ProjectsContainer(): React.ReactElement {
    return (
        <section className="h-[100vh] w-full bg-green-700 p-6 text-left">
            {/*Articles with each one with the logo title and description of the project, as such the respective links in logo format */}
            <h1>Projects</h1>

            <section className="flex flex-col">
                <article className="flex flex-col lg:flex-row border p-6 rounded-lg shadow-lg">
                    <div className="flex-shrink-0 lg:mr-6 mb-4 lg:mb-0 self-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                            Logo
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">HTML</h1>
                            <p className="text-gray-700">Description</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <a href="#" className="text-blue-500 hover:underline">Links</a>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col lg:flex-row border p-6 rounded-lg shadow-lg">
                    <div className="flex-shrink-0 lg:mr-6 mb-4 lg:mb-0 self-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                            Logo
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">HTML</h1>
                            <p className="text-gray-700">Description</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <a href="#" className="text-blue-500 hover:underline">Links</a>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col lg:flex-row border p-6 rounded-lg shadow-lg">
                    <div className="flex-shrink-0 lg:mr-6 mb-4 lg:mb-0 self-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                            Logo
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">HTML</h1>
                            <p className="text-gray-700">Description</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <a href="#" className="text-blue-500 hover:underline">Links</a>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}
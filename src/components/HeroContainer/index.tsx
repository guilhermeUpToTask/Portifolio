import './diagonal-style.css'

export default function HeroContainer(): React.ReactElement {
    return (
        <section className="relative min-h-screen overflow-hidden flex bg-black " id='hero'>
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-white clip-triangle"></div>
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white clip-polygon"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white clip-triangle-inverse"></div>

            <div className="relative flex-1 md:flex-none md:w-1/3 p-4 flex items-center justify-center mix-blend-difference z-10">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Hello, I'm Guilherme Augusto.</h1>
                    <p className="text-lg md:text-xl">This is my portfolio.</p>
                </div>
            </div>

            <div className="relative flex-2 md:flex-none md:w-2/3 p-4 flex items-center justify-center text- z-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Crafting seamless experiences across the web stack with TypeScript expertise.</h2>
                    <p className="text-lg">Let's build something amazing together.</p>
                </div>
            </div>
        </section>
    )
}
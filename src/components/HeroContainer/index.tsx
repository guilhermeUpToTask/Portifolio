export default function HeroContainer(): React.ReactElement {
    return (
        <section className="h-[90vh] w-full bg-lime-700 flex">
            {/*Proportion is to bem 60 to 30 in width */}
            <div className="flex-1 md:flex-none md:w-1/3 bg-blue-200 p-4 content-center"> 
                Hello i'm Guilherme Augusto and this is my portfolio.
            </div>
            <div className="flex-2 md:flex-none md:w-2/3 bg-green-200 p-4 content-center">
                I'm a software engineer and a student at UFRN.
            </div>
        </section>
    )
}
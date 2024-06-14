import NavItem from "./NavItem";
const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string): void => {
    event.preventDefault();
    const section = document.querySelector(link);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export default function TopNavBar(): React.ReactElement {
    return (
        <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="font-bold text-2xl tracking-wide">
                    <a onClick={(event) => handleClick(event, '#hero')} className="hover:text-gray-400 transition-colors duration-300 hover:cursor-pointer">
                        Top
                    </a>
                </div>
                <nav className="flex space-x-8">
                    <NavItem link="#description" name="Description" />
                    <NavItem link="#skills" name="Skills" />
                    <NavItem link="#projects" name="Projects" />
                    <NavItem link="#contacts" name="Contacts" />
                    <NavItem link="#curriculum" name="Curriculum" />
                </nav>
            </div>
        </header>
    )
}
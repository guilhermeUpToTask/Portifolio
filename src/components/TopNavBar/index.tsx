import NavItem from "./NavItem";

export default function TopNavBar(): React.ReactElement {
    return (
        <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="font-bold text-2xl tracking-wide">
                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                        Logo
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
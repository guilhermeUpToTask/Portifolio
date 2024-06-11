import NavItem from "./NavItem";

export default function TopNavBar(): React.ReactElement {
    return (
        <header className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="font-bold text-xl">
                    Logo
                </div>
                <nav className="flex space-x-4">
                    <NavItem link="description" name="Description" />
                    <NavItem link="description" name="Skills" />
                    <NavItem link="description" name="Projects" />
                    <NavItem link="description" name="Contacts" />
                    <NavItem link="description" name="Curriculum" />
                </nav>
            </div>
        </header>
    )
}
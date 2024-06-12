interface INavItemProps {
    name: string;
    link: string;
}
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

export default function NavItem(props: INavItemProps): React.ReactElement {
    return (
        <a
            onClick={(event) => handleClick(event, props.link)}
            href={props.link}
            className="text-lg tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
        >
            {props.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>


    )
}
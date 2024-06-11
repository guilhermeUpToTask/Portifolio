interface INavItemProps {
    name: string;
    link: string;
}

export default function NavItem(props:INavItemProps): React.ReactElement {
    return (

        <a href={props.link} className="hover:text-gray-300">{props.name}</a>


    )
}
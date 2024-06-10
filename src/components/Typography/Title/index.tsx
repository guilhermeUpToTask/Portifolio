

interface ITitleProps {
    children: React.ReactNode
}

export default function Title(props:ITitleProps) : React.ReactElement {
    return (
        <title className="">
        {props.children}
        </title>
    )
}
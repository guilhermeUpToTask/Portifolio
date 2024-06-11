import { TypographyInterface } from "../../../lib/types"

interface ISubTitleProps extends TypographyInterface { }

export default function SubTitle(props: ISubTitleProps): React.ReactElement {
    return (
        <h2 className={"text-2xl md:text-3xl font-semibold mb-4 " + props.className}>
            {props.children}
        </h2>
    )
}
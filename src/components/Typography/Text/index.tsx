import { TypographyInterface } from "../../../lib/types"

interface ITextProps extends TypographyInterface { }


export default function Text(props: ITextProps): React.ReactElement {
    return (
        <p className={"text-lg " + props.className}>
            {props.children}
        </p>
    )
}
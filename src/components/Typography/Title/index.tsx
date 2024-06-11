import { TypographyInterface } from "../../../lib/types"

interface ITitleProps extends TypographyInterface { }



export default function Title(props: ITitleProps): React.ReactElement {
    return (
        <div className="mb-6 flex items-center space-x-4">
            <h1
                className={`
                text-3xl 
                md:text-5xl 
                lg:text-3xl 
                font-extrabold  
                tracking-tight 
                bg-clip-text 
                text-transparent 
                bg-gradient-to-r from-gray-600 via-gray-800 to-black
                w-fit 
                ${props.className}
            `}>
                {props.children}
            </h1>
            <div className="relative flex items-center w-full">
                <div className="h-3 w-3 bg-black rounded-full shadow-lg mr-4"></div>
                <div className="flex-grow border-t border-black opacity-50"></div>
            </div>
        </div>
    )
}
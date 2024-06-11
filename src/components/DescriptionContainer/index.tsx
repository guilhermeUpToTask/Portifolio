import Title from "../Typography/Title"
import Text from "../Typography/Text"
export default function DescriptionContainer(): React.ReactElement {
    return (
        <section className="h-[100vh] w-full bg-white p-6 text-left">
            <Title>Description</Title>
            <Text className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </Text>
        </section>
    )
}
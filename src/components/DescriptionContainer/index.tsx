import Title from "../Typography/Title"
import Text from "../Typography/Text"
export default function DescriptionContainer(): React.ReactElement {
    return (
        <section className="min-h-[100vh] w-full bg-white p-6 text-left scroll-m-[10vh]" id='description'>
            <Title>Description</Title>
            <Text className="text-black leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </Text>
        </section>
    )
}
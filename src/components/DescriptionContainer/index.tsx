import Title from "../Typography/Title"
import Text from "../Typography/Text"
export default function DescriptionContainer(): React.ReactElement {
    return (
        <section className="min-h-[100vh] w-full bg-white p-6 text-left scroll-m-[10vh]" id='description'>
            <Title>Description</Title>
            <Text className="text-black leading-relaxed ml-3">
            I excel in organization, ensuring efficient task completion within deadlines. With strong communication skills, I convey information clearly and promote effective communication at all levels. Committed to professional excellence, I maintain a strong work ethic and punctuality. I collaborate effectively in teams, contributing harmoniously to achieve common goals. I possess strong problem-solving abilities, addressing challenges with innovative solutions. Demonstrating unwavering dedication, I persistently pursue goals, showing determination in overcoming challenges. Motivated by self-learning, I continuously seek opportunities for personal and professional development.
            </Text>
        </section>
    )
}
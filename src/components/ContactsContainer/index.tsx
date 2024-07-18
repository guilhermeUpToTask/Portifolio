export default function ContactsContainer(): React.ReactElement {
    return (
        <section className="h-[100vh] w-full max-w-full bg-black p-4 text-left text-white scroll-m-[10vh]" id='contacts'>
        <h2 className="text-3xl font-bold mb-4">Contacts</h2>
        <ul className="space-y-4 ml-3">
            <li className="flex items-center space-x-2">
                <i className="fab fa-linkedin text-2xl"></i>
                <a href="https://www.linkedin.com/in/guilherme-matos-a7aaa9279/" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-2">
                <i className="fab fa-github text-2xl"></i>
                <a href="https://github.com/guilhermeUpToTask" className="hover:underline">GitHub</a>
            </li>
            <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-2xl"></i>
                <a href="mailto:guilhermeaugustomatosferreira@gmail.com" className="hover:underline">Email</a>
            </li>
            <li className="flex items-center space-x-2">
                <i className="fab fa-whatsapp text-2xl"></i>
                <a href="https://whatsapp.com" className="hover:underline">WhatsApp</a>
            </li>
        </ul>
    </section>
    )
}
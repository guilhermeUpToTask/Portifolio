type Project = {
    name: string;
    description: string;
    links: string[];
    logo: string;
}

export const projects: Project[] = [
    {
        name: "Task Wise Finances - Sistema de Gerenciamento Financeiro",
        description: "Desenvolvimento de uma aplicação web para gerenciamento de finanças pessoais. A aplicação oferece uma interface limpa e intuitiva para facilitar a navegação e compreensão dos usuários.",
        links: ["https://task-wise-finances-front.vercel.app/", "https://github.com/guilhermeUpToTask/TaskWiseFinancesFront"],
        logo: "https://www.example.com/logo.png"
    },
    {
        name: "Mercado Livre Price Monitoring — Sistema de Monitoramento de Preços ",
        description: "O projeto consiste em um sistema de monitoramento de preços do Mercado Livre. Utilizando a biblioteca Scrapy em Python, o sistema coleta dados de uma seleção específica de produtos do Mercado Livre diariamente. Esses dados são armazenados em um banco de dados SQLite e expostos através de uma API construída com FastAPI. A interface de usuário é desenvolvida em React, fornecendo uma visualização intuitiva e interativa dos dados coletados.",
        links: ["https://www.example.com", "https://www.example.com"],
        logo: "https://www.example.com/logo.png"
    },
    {
        name: "Up To Task Blog — Blog Pessoal",
        description: "O Blog Pessoal é uma plataforma que utilizo para armazenar e compartilhar informações relacionadas ao desenvolvimento web e outras tecnologias que aprendo ao longo do tempo. Desenvolvido utilizando React para a interface de usuário, o blog oferece uma experiência intuitiva e interativa para os usuários. Os dados são armazenados e gerenciados no Firebase, proporcionando uma infraestrutura escalável e confiável. O estilo do blog é construído com HTML e CSS, garantindo uma apresentação visualmente atraente e responsiva.",
        links: ["https://up-to-task-blog.vercel.app", "https://github.com/guilhermeUpToTask/UpToTaskBlog"],
        logo: "https://www.example.com/logo.png"
    },
]

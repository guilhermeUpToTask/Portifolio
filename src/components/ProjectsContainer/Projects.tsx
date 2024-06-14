import mercadoLivreIconUrl from '../../assets/icons/mercado_livre_icon.svg';
import taskwiseIconUrl from '../../assets/icons/taskwise_icon.svg';
import uptotaskBlogIconUrl from '../../assets/icons/uptotask_blog_icon.svg';

type Project = {
    name: string;
    description: string;
    links: string[];
    mainColor:string;
    secondColor:string;
    iconUrl: string;
}

export const projects: Project[] = [
    {
        name: "Task Wise Finances - Financial Management System",
        description: "Development of a web application for personal finance management. The application provides a clean and intuitive interface with a calendar to facilitate navigation and user comprehension.",
        links: ["https://task-wise-finances-front.vercel.app/", "https://github.com/guilhermeUpToTask/TaskWiseFinancesFront"],
        mainColor:'#20c77c',
        secondColor:"#efe5cf",
        iconUrl: taskwiseIconUrl
    },{
        name: "Mercado Livre Price Monitoring - Price Monitoring System",
        description: "The project involves a price monitoring system for Mercado Livre. Using the Scrapy library in Python, it collects data daily from a specific selection of products on Mercado Livre. This data is stored in a MongoDB database and exposed through an API built with FastAPI. The user interface is developed in React, offering an intuitive and interactive visualization of the collected data.",
        links: ["https://www.example.com", "https://www.example.com"],
        mainColor:"#FFE501",
        secondColor:"#2D3277",
        iconUrl: mercadoLivreIconUrl
    },{
        name: "Up To Task Blog - Personal Blog",
        description: "The Personal Blog is where I store and share information on web development and other technologies I learn. It uses React for a user-friendly interface, and data is managed in Firebase for scalability and reliability. The blog's visual appeal and responsiveness are ensured by HTML and CSS styling.",
        links: ["https://up-to-task-blog.vercel.app", "https://github.com/guilhermeUpToTask/UpToTaskBlog"],
        mainColor:"#000000",
        secondColor:"#07040D",
        iconUrl: uptotaskBlogIconUrl
    },
]

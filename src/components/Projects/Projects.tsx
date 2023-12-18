import NikaFullPage from "../../assets/project/NikaFullPage.png";
import ProjectRedirect from "./ProjectRedirect";

function Projects() {
    const projectList = [
        {
            title: "Nike",
            description:
                "E-comercial store selling Nika shoes. To access the website and make purchases, you must create an account.",
            technologies: "TypeScript, React, Tailwind, (JWT Fairbase, Stripe)",
            image: NikaFullPage,
            codeLink: "https://github.com/TomaszGrobelski/nika",
            demoLink: "https://tomaszgrobelski.github.io/nika/",
        },
        {
            title: "Soon...",
            description: "........................",
            technologies: "React,",
            image: NikaFullPage,
            codeLink: "https://github.com/TomaszGrobelski/nika",
            demoLink: "https://tomaszgrobelski.github.io/nika/",
        },
    ];

    return (
        <section>
            <h2 className="mb-20 mt-20 text-center text-[32px] font-bold">Projects</h2>
            <div className="grid gap-20 md:grid-cols-2">
                {projectList.map((proj) => {
                    return (
                        <ProjectRedirect
                            title={proj.title}
                            description={proj.description}
                            technologies={proj.technologies}
                            image={proj.image}
                            codeLink={proj.codeLink}
                            demoLink={proj.demoLink}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;

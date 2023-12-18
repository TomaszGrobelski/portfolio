import { useState } from "react";
import { FaDirections } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function ProjectRedirect({ image, title, description, technologies, demoLink, codeLink }) {
    const [visible, setVisible] = useState(true);

    const handleMouseEnter = () => {
        setVisible(false);
    };

    const handleMouseLeave = () => {
        setVisible(true);
    };

    return (
        <div>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative h-[300px] cursor-pointer overflow-hidden object-cover"
            >
                <img
                    className={`${visible ? "blur-[6px] " : "animate-scrollDown"}`}
                    src={image}
                    alt={`image-${title}`}
                />
                {visible && (
                    <div className="absolute left-1/2 top-40 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-2 font-bold">
                        <h3>{title}</h3>
                        <p className=" w-[280px] text-justify">{description}</p>
                    </div>
                )}
            </div>
            <div className="mt-2 flex flex-col items-center">
                <p className="my-2 max-w-[300px] text-center">Technologies: {technologies}</p>
                <div className="flex gap-4">
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2">
                            CODE <FaGithub />
                        </button>
                    </a>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2">
                            Live Demo <FaDirections />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectRedirect;

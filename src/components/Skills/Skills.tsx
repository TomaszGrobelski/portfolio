import frontend from "../../assets/skills/frontend.svg";
import tools from "../../assets/skills/tools.svg";

function Skills() {
    return (
        <section>
            <h2 className=" text-center text-[32px] ">My skills</h2>
            <div className="my-8 flex flex-col items-center gap-2">
                <h3 className="text-[24px]">Frontend</h3>
                <img src={frontend} alt="" />
            </div>
            <div className="my-10 flex flex-col items-center gap-2">
                <h3 className="text-[24px]">Tools</h3>
                <img src={tools} alt="" />
            </div>
        </section>
    );
}

export default Skills;

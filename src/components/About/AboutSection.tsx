import Boy from "../../assets/img/Boy.jpg";
import Button from "../Button/Button";

export default function AboutSection() {
    return (
        <section className="mb-20 flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="max-w-[500px] p-6 md:w-1/2 ">
                <h1 className="my-2 text-[32px] font-bold max-w-[300px]">
                    Hello, I'm Tomasz, Frontend Developer
                </h1>
                <p className="my-4">
                    I'm dedicated Frontend Developer with a strong passion for creating accessible
                    and scalable web applications. I take pride in building websites that not only
                    look great but are also designed to be inclusive for all users and capable of
                    scaling to meet the needs of diverse audiences.
                </p>
                <Button title="CONTACT ME" />
            </div>
            <div className=" relative flex items-center justify-center md:w-1/2 ">
                <div className="relative flex h-[250px] w-[250px] animate-spinShape items-center justify-center overflow-hidden border border-black "></div>
                <img src={Boy} alt="" className="absolute -z-10 h-[180px] w-[180px]" />
            </div>
        </section>
    );
}

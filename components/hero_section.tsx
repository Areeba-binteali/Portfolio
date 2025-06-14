import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { ReactNode } from "react";

type HeroProps = {
    title: ReactNode;
    subTitle: string
}


export default function HeroSection({ title, subTitle }: HeroProps) {
    return (
        <div className="main-hero">
            <div className="flexContainer">
                <div className="leftSide">
                    <h1 className="page-title">{title}</h1>
                    <h4 className="subtitle">{subTitle}</h4>
                </div>
                <div className="rightSide">
                    <div className="socialIcon">
                        <a href="https://www.linkedin.com/in/areeba-binte-ali-25b1382b4/" className="social" target="_blank"><FaLinkedin /></a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://github.com/Areeba-binteali" className="social" target="_blank"><FaGithub /></a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://wa.me/923172502742" className="social" target="_blank"><RiWhatsappFill /></a>
                    </div>
                </div>

            </div>

        </div>
    )
}
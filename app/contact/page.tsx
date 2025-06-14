import ContactForm from "@/components/conatct_form";
import HeroSection from "@/components/hero_section";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

export default function Contact() {
    return (
        <div className="main container contact">
            <HeroSection title="Bridge to Ideas" subTitle="Reach out anytime — I promise I don’t bite and I love new connections." />
            <div className="flex-div">
                <div className="leftSide">
                    <div className="entryInfo">
                        <h4 className="headingEntry">Let&apos;s Build Together</h4>
                        <p className="paraEntry">Whether you have a question or want to work together, I&apos;m just a message away.</p>
                    </div>
                    <div className="mainInfo">
                        <div className="info">
                            <div className="icon"><FaPhoneAlt /></div>
                            <div className="information">
                                <h4 className="headingInfo">Phone</h4>
                                <p className="detailInfo"><a href="tel:+923172502742">0317 2502742</a></p>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon"><MdEmail /></div>
                            <div className="information">
                                <h4 className="headingInfo">Email</h4>
                                <p className="detailInfo"><a href="mailto:areeba3407@gmail.com">areeba3407@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon"><MdLocationPin /></div>
                            <div className="information">
                                <h4 className="headingInfo">Location</h4>
                                <p className="detailInfo">Karachi, PK</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <ContactForm />
                </div>
            </div>


        </div>
    )
}
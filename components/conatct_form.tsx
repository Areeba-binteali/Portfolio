export default function ContactForm() {
    return (
        <div className="contactForm">
            <form action="" className="formContact">
                <div className="inputGroup">
                    <input type="text" id="name" className="formInput" placeholder=" " required />
                    <label htmlFor="name" className="inputLabel">Name</label>
                </div>
                <div className="inputGroup">
                    <input type="email" id="email" className="formInput" placeholder=" " required />
                    <label htmlFor="email" className="inputLabel">Email Address</label>
                </div>
                <div className="inputGroup">
                    <input type="text" id="subject" className="formInput" placeholder=" " required />
                    <label htmlFor="subject" className="inputLabel">Subject</label>
                </div>
                <div className="inputGroup">
                    <textarea id="message" className="formInput" placeholder=" " required></textarea>
                    <label htmlFor="message" className="inputLabel">Message</label>
                </div>
            </form>
        </div>
    );
}

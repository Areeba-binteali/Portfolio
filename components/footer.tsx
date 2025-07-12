import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="footerMain">
            <div className="container">
                <div className="logo">
                    <Link className="logoLink" href="/">
                        <div className="logoImage">
                            <Image src="/logo-byteAura.png" width={100} height={100} alt="logo" />
                        </div>
                        <h2 className="logoTitle">
                            Byte<span className="auraA">A</span>ura
                        </h2>
                    </Link>
                </div>
                <div className="copyRight">
                    <p>&copy; 2025 <a href="/">ByteAura</a>. Developed by Areeba. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
"use client"
import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function to add "activeLink" class to the current page link
  const activeClass = (href: string) =>
    pathname === href ? "activeLink" : "";

  return (
    <div className="headerMain">
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
        <div className="leftNavigation">
          <nav>
            <Link href="/services" className={activeClass("/services")}>
              Services
            </Link>
            <Link href="/resume" className={activeClass("/resume")}>
              Resume
            </Link>
            <Link href="/contact" className={activeClass("/contact")}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="RightNavigation">
          <nav>
            <Link href="/" className={activeClass("/")}>
              Home
            </Link>
            <Link href="/about" className={activeClass("/about")}>
              About
            </Link>
            <Link href="/portfolio" className={activeClass("/portfolio")}>
              Portfolio
            </Link>
          </nav>
        </div>
      </div>

      <div className={`navMobile ${isOpen ? "active" : ""}`}>
        <div className="container">
          <nav>
            <Link href="/" className={activeClass("/")}>
              Home
            </Link>
            <Link href="/about" className={activeClass("/about")}>
              About
            </Link>
            <Link href="/portfolio" className={activeClass("/portfolio")}>
              Portfolio
            </Link>
            <Link href="/services" className={activeClass("/services")}>
              Services
            </Link>
            <Link href="/resume" className={activeClass("/resume")}>
              Resume
            </Link>
            <Link href="/contact" className={activeClass("/contact")}>
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="controls">
        <div className="menuIcon" onClick={toggleMenu}>
          {isOpen ? (
            <IoClose size={28} color="#fff" />
          ) : (
            <FaBarsStaggered size={24} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
}

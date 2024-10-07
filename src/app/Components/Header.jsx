"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/Ploty-logo.webp";
import "../Sass/_header.scss";

function Header() {
  const router = useRouter();

  const handleRedirect = (e) => {
    e.preventDefault();
    router.push("/", undefined, {
      scroll: false,
      shallow: true,
    });

    setTimeout(() => {
      const element = document.getElementById("intro");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="header" id="hdr">
      <div className="container-ploty">
        <Link href="/">
          <Image src={logo} alt="Ploty Grygov Logo" className="logoo" />
        </Link>
        <p className="heeding">
          <Link href="/" className="heeding-link">
            <span className="plot-title">Ploty</span>Grygov
          </Link>
        </p>
      </div>
      <nav className="user-nav">
        <ul className="user-nav__box">
          <li className="user-nav__box--item">
            <Link
              href="/"
              className="user-nav__box--link"
              onClick={handleRedirect}
              scroll={false}
            >
              O firmě
            </Link>
          </li>
          <li className="user-nav__box--item">
            <Link href="/" className="user-nav__box--link">
              Galerie staveb
            </Link>
          </li>
          <li className="user-nav__box--item">
            <Link href="/form" className="user-nav__box--link">
              Kontakty
            </Link>
          </li>
          <li className="user-nav__box--item">
            <Link href="/form" className="user-nav__box--link">
              <span className="inquiry-bold">Odeslat poptávku</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

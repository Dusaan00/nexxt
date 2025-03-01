"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../Sass/_footer.scss";
import logo from "../Images/Ploty-logo.webp";
import ScrollToTop from "../functions/Scroller";

function Footer() {
  const preventDefaultClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="foot">
      <ul className="footer">
        <li className="footer__item">
          <div className="logo__container">
            <ScrollToTop href="/">
              <Image
                src={logo}
                alt="Ploty Grygov Logo"
                className="logo"
                loading="lazy"
              />
              <p className="logo__text">PlotyGrygov</p>
            </ScrollToTop>
          </div>
        </li>

        <li className="footer__item">
          <Link
            href="https://www.google.com/maps/place/Ploty+Grygov+s.r.o./@49.5353379,17.30746,16.25z/data=!4m14!1m7!3m6!1s0x47125315a4d345d7:0xdff9a1ca55358255!2sPloty+Grygov+s.r.o.!8m2!3d49.5351327!4d17.3038416!16s%2Fg%2F11whxk9kf_!3m5!1s0x47125315a4d345d7:0xdff9a1ca55358255!8m2!3d49.5351327!4d17.3038416!16s%2Fg%2F11whxk9kf_?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icon">
              <use href="/sprite.svg#icon-location_on"></use>
            </svg>
            <p className="address">
              <span>Za Tratí 255,</span>
              <span>Grygov 783 73</span>
            </p>
          </Link>
        </li>

        <li className="footer__item">
          <a href="#" className="footer__link" onClick={preventDefaultClick}>
            <svg className="footer__icon">
              <use href="/sprite.svg#icon-call"></use>
            </svg>
            <p className="phone"> +420 608 705 547</p>
          </a>
        </li>

        <li className="footer__item">
          <Link href="mailto:plotygrygov@gmail.com" className="footer__link">
            <svg className="footer__icon">
              <use href="/sprite.svg#icon-email"></use>
            </svg>
            <p className="address">plotygrygov@gmail.com</p>
          </Link>
        </li>

        <li className="footer__item">
          <Link href="/form" className="footer__link">
            <svg className="footer__icon">
              <use href="/sprite.svg#icon-paper-plane"></use>
            </svg>
            <p className="address">Odeslat poptávku</p>
          </Link>
        </li>

        <li className="footer__item">
          <Link href="/Galerie" className="footer__link">
            <svg className="footer__icon">
              <use href="/sprite.svg#icon-perm_media"></use>
            </svg>
            <p className="address galeria">Galerie staveb</p>
          </Link>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2025 PlotyGrygov.cz</p>
    </footer>
  );
}

export default Footer;

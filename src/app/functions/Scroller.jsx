"use client";
import Link from "next/link";

const ScrollToTop = ({ href, className, children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={scrollToTop}
      scroll={false}
    >
      {children}
    </Link>
  );
};

export default ScrollToTop;

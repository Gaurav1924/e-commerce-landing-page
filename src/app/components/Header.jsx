import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="top-row">
          <img src="/headerIcons/Logo.png" alt="" width={30} />
          <div className="logo">
            <Link href="/">LOGO</Link>
          </div>

          <div className="header-icons">
            <img src="/headerIcons/search-normal.png" className="icon" />

            <img src="/headerIcons/heart.png" className="icon" />

            <img src="/headerIcons/shopping-bag.png" className="icon" />

            <div className="profile">
              <img src="/headerIcons/profile.png" alt="Profile" />
            </div>
            <div className="language-switcher">ENG</div>
          </div>
        </div>
        <nav className="navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

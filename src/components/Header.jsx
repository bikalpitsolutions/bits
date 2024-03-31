import React from "react";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <header>
          <div className="logoIcon">
            <p>BIKALP</p>
          </div>
          <nav>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Our Team</p>
            <p>Blog</p>
          </nav>
          <button>CONTACT US</button>
        </header>
      </div>
    </>
  );
};

export default Header;

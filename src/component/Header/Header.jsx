import React, { Fragment, useEffect, useState } from 'react';
import './style.css';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrolled / totalHeight) * 100;

      if (scrolledPercent >= 20) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
      <div className={`header__container ${isHidden ? 'hidden' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Our Products</li>
          <li>Blogs</li>
          <li>Profile</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;

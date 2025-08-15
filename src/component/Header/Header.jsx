import React, { Fragment, useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

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
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/explore'}>Explore</Link></li>
          <li><Link to={'/'}>Blogs</Link></li>
          <li><Link to={'/'}>Profile</Link></li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;

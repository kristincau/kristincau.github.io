import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/theme";
import { Link, NavLink } from "react-router-dom";
import { useScroll } from "../../useScroll";
import { TbSun as IconSun, TbMoonStars as IconMoon } from "react-icons/tb";
import classes from "./navbar.module.scss";

const Navbar = ({ token }) => {
  const [isStick, setStick] = useState(false);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const { y, x, scrollDirection } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setStick(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <div className={classes.navbar}>
      <div
        className={
          scrollDirection === "down"
            ? classes.navbarActive
            : classes.navbarHidden
        }
      >
        <div className={classes.navContainer}>
          <div className={isStick ? classes.logoStick : classes.logoDefault}>
            <Link className={classes.logo} to="/">
              k.au
            </Link>
          </div>

          <div className={isStick ? classes.linksStick : classes.linksDefault}>
            <div className={classes.links}>
              <NavLink to="/">work</NavLink>
              {/* {token && <NavLink to="/services">services</NavLink>} */}

              <NavLink to="/about">about</NavLink>
              <button onClick={toggleTheme}>
                {isDark ? (
                  <IconSun className={classes.icon} />
                ) : (
                  <IconMoon className={classes.icon} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

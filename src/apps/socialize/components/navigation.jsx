import React, { useState } from "react";

import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as MessangerIcon } from "../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

import { CSSTransition } from "react-transition-group";

const Navigation = () => {
  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessangerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavBar>
  );
};

const NavBar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <span className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </span>
      {open && children}
    </li>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setactiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calculateHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = ({ children, leftIcon, rightIcon, gotoMenu }) => {
    return (
      <span className="menu-item" onClick={() => gotoMenu && setactiveMenu(gotoMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </span>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calculateHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<BoltIcon />}>My Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} gotoMenu="settings">
            My Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calculateHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} gotoMenu="main" />
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navigation;

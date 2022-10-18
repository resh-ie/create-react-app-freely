import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import styles from './_sideBar.module.scss';
import navData from './NavData';

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={open ? styles.sideNav : styles.sideNavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>
      {navData.map((item, index) => {
        return (
          <div key={index}>
            <NavItem
              id={item.id}
              link={item.link}
              text={item.text}
              icon={item.icon}
              open={open}
            />
          </div>
        );
      })}
    </div>
  );
}

interface NavItemProps {
  id: number;
  link: string;
  text: string;
  icon: any;
  open: boolean;
}

function NavItem({ id, link, text, icon, open }: NavItemProps) {
  const resolvePath = useResolvedPath(link);
  const isActive = useMatch({ path: resolvePath?.pathname, end: true });
  return (
    <NavLink
      key={id}
      className={
        isActive
          ? ` ${styles.sideitem} + ${styles['sideitem-active']}`
          : styles.sideitem
      }
      to={link}
    >
      {icon}
      <span className={open ? styles.linkText : styles.linkTextClosed}>
        {text}
      </span>
    </NavLink>
  );
}

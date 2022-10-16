import './_navBar.scss';

interface navBarProps {
  navData: navItem[];
}

interface navItem {
  title: string;
  link: string;
  active?: boolean;
}

const NavBar = ({ navData }: navBarProps) => {
  const path = window.location.pathname;
  return (
    <nav className='side-nav'>
      <ul>
        {navData.map((item: navItem, index: number) => (
          <NavItem
            key={index}
            link={item.link}
            title={item.title}
            active={item.link === path}
          />
        ))}
      </ul>
    </nav>
  );
};

function NavItem({ title, link, active }: navItem) {
  return (
    <li className={active ? 'active' : ''}>
      <a href={link}>{title}</a>
    </li>
  );
}
export default NavBar;

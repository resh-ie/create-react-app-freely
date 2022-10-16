import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './_navBar.scss';

interface navBarProps {
  navData: navItem[];
}

interface navItem {
  title: string;
  link: string;
}

const NavBar = ({ navData }: navBarProps) => {
  return (
    <nav className='side-nav'>
      <ul>
        {navData.map((item: navItem, index: number) => (
          <NavItem key={index} link={item.link} title={item.title} />
        ))}
      </ul>
    </nav>
  );
};

function NavItem({ title, link }: navItem) {
  const resolvePath = useResolvedPath(link);
  const isActive = useMatch({ path: resolvePath?.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={link}>{title}</Link>
    </li>
  );
}
export default NavBar;

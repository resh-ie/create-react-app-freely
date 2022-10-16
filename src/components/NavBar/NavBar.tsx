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
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;

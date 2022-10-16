interface navBarProps {
  navData: navItem[];
}

interface navItem {
  title: string;
  link: string;
}

const NavBar = ({ navData }: navBarProps) => {
  return (
    <nav className='nav'>
      {navData.map((item, index) => {
        return (
          <a key={index} href={item.link}>
            {item.title}
          </a>
        );
      })}
    </nav>
  );
};
export default NavBar;

import CustomLink from "../customLink";

const Header = () => {
  return (
    <nav>
      <ul className="flex gap-4 text-blue-600">
        <li>
          <CustomLink href="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink href="/airdrop">Airdrop</CustomLink>
        </li>
        <li>
          <CustomLink href="/register">Register</CustomLink>
        </li>
        <li>
          <CustomLink href="/user">User</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

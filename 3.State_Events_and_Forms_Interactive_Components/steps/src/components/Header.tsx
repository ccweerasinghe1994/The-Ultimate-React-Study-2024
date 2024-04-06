import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <nav className="mt-2 row-span-1">
      <ul className="flex justify-end">
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Header;

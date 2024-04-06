import { ModeToggle } from "./mode-toggle";

const NvaBar = () => {
  return (
    <nav className="flex items-center w-full justify-between">
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
      </ul>
      <ModeToggle />
    </nav>
  );
};

export default NvaBar;

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-6">
        <Logo />
        <GitHubLogoIcon width={24} height={24} />
      </div>
    </div>
  );
};
export default Header;

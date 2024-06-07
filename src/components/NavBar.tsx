import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-logo.png";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="70px" borderRadius={8} />
      <SearchInput onSearch={onSearch} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;

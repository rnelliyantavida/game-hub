import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-logo.png";
import ColorSwitchMode from "./ColorSwitchMode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="70px" />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;

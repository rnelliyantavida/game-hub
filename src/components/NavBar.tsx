import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="70px" />
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;

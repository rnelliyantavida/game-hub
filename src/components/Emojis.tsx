import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/target.png";
import thumbsUp from "../assets/left.png";
import meh from "../assets/neutral.png";

interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  console.log(rating);

  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "35px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emojis;

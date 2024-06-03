import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score < 60 ? "orange" : "";
  return (
    <Badge colorScheme={color} paddingX={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;

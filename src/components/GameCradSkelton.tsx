import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCradSkelton = () => {
  return (
    <Card height="300px" width="400px" borderRadius={10} overflow="hidden">
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCradSkelton;

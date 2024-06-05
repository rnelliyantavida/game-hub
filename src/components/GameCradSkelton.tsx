import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCradSkelton = () => {
  return (
    <Card height="300px">
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCradSkelton;

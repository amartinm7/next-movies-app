import { Text } from "@nextui-org/react";

interface EchTitleTextProps {
  title: string;
}

const EchTitleText = ({ title }: EchTitleTextProps) => {
  return (
    <Text h1 className={"title"}>
      {title}
    </Text>
  );
};

export default EchTitleText;

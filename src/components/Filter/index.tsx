import { TouchableOpacityProps } from "react-native";
import { Container, Title, ContainerProps } from "./styles";

type FilterProps = TouchableOpacityProps & ContainerProps & {
  title: string;
};

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  );
}

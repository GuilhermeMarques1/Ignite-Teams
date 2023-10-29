import { TouchableOpacityProps } from "react-native";
import { Container, Text, ButtonColor } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  color?: ButtonColor;
};

export function Button({ text, color = "green", ...rest }: ButtonProps) {
  return (
    <Container
      type={color}
      {...rest}
    >
      <Text>
        {text}
      </Text>
    </Container>
  );
}

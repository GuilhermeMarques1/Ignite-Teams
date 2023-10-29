import { TextInputProps } from "react-native";

import { Container } from "./styles";

export function Input({ placeholderTextColor , ...rest }: TextInputProps) {
  return (
    <Container
      {...rest}
    />
  );
}

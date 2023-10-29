import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon, ButtonIconType } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap,
  type?: ButtonIconType
};

export function ButtonIcon({ icon, type = "add", ...rest }: ButtonIconProps) {
  return (
    <Container>
      <Icon 
        name={icon}
        type={type}
      />
    </Container>
  );
}
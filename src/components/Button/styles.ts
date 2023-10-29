import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonColor = "green" | "red";

type ContainerProps = {
  type: ButtonColor;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type === "green" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

import styled, { css } from "styled-components/native";
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
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

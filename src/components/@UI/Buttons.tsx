import styled from "styled-components";
import tw from "twin.macro";

export type Colors = "pink" | "yellow" | "blue";

export const Button = styled.button`
  ${tw`text-xl text-white font-lemonism tracking-wider py-2 px-6 rounded focus:outline-none`}
`;

export const Black = `text-gray-800`;

export const Pink = tw`bg-pink-600 hover:bg-pink-700`;
export const PinkInverted = tw`bg-white text-pink-600 border-solid  border-2 border-pink-600 hover:text-pink-700`;

export const Yellow = tw`bg-yellow-600 hover:bg-yellow-700`;
export const YellowInverted = tw`bg-white text-yellow-600 border-solid  border-2 border-yellow-600 hover:text-yellow-700`;

export const ButtonPink = styled(Button)`
  ${Pink}
`;

export const Blue = tw`bg-blue-500 hover:bg-blue-700`;
export const BlueInverted = tw`bg-white text-blue-600 border-solid  border-2 border-blue-600 hover:text-blue-700`;

export const ButtonBlue = styled(Button)`
  ${Blue}
`;

export const ButtonYellow = styled(Button)`
  ${tw`bg-yellow-500 hover:bg-yellow-600`}
`;

export const ButtonColor = styled(Button)<{ color: Colors }>`
  ${({ color }) => (color === "blue" ? Blue : color === "pink" ? Pink : Yellow)}
`;

import { BodyPart } from "../state/types";
import styled from "@emotion/styled";
import React from "react";

export interface InjectionBodyPartProps {
  body: BodyPart;
}

export type InjectionBodyPartNames = {
  [bodyPart in BodyPart]: string;
};

const InjectionBodyPart: React.FC<InjectionBodyPartProps> & {
  Names?: InjectionBodyPartNames;
} = ({ body }) => {
  const name = InjectionBodyPart.Names[body];
  return <StyledInjectionBodyPart>{name}</StyledInjectionBodyPart>;
};

InjectionBodyPart.Names = {
  [BodyPart.LeftArm]: "Left Arm",
  [BodyPart.LeftBelly]: "Belly from the left",
  [BodyPart.LeftButtock]: "Left Buttock",
  [BodyPart.LeftLeg]: "Left Leg",
  [BodyPart.RightArm]: "Right Arm",
  [BodyPart.RightBelly]: "Belly from the right",
  [BodyPart.RightButtock]: "Right Buttock",
  [BodyPart.RightLeg]: "Right Leg"
};

const StyledInjectionBodyPart = styled.div`
  grid-area: title;
  text-align: center;
`;

export default InjectionBodyPart;

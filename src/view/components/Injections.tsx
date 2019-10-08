import styled from "@emotion/styled";
import React, { useCallback } from "react";
import {
  BodyPart,
  InjectionGrid,
  InjectionPlace,
  InjectionDay
} from "../state/types";
import Injection from "./Injection";
import InjectionBodyPart from "./InjectionBodyPart";

export interface InjectionGridViewProps {
  body: BodyPart;
  grid: InjectionGrid;
  onChange(body: BodyPart, position: InjectionPlace, day: InjectionDay): void;
}

const InjectionGridView: React.FC<InjectionGridViewProps> = ({
  body,
  grid,
  onChange
}) => {
  const change = useCallback(
    (position: InjectionPlace, day: InjectionDay) => {
      onChange(body, position, day);
    },
    [body, onChange]
  );

  return (
    <StyledInjectionGridView>
      <InjectionBodyPart body={body} />
      <Injection
        position={InjectionPlace.LeftTop}
        day={grid[InjectionPlace.LeftTop]}
        onChange={change}
      />
      <Injection
        position={InjectionPlace.RightTop}
        day={grid[InjectionPlace.RightTop]}
        onChange={change}
      />
      <Injection
        position={InjectionPlace.LeftMiddle}
        day={grid[InjectionPlace.LeftMiddle]}
        onChange={change}
      />
      <Injection
        position={InjectionPlace.RightMiddle}
        day={grid[InjectionPlace.RightMiddle]}
        onChange={change}
      />
      <Injection
        position={InjectionPlace.LeftBottom}
        day={grid[InjectionPlace.LeftBottom]}
        onChange={change}
      />
      <Injection
        position={InjectionPlace.RightBottom}
        day={grid[InjectionPlace.RightBottom]}
        onChange={change}
      />
    </StyledInjectionGridView>
  );
};

const StyledInjectionGridView = styled.div`
  display: grid;
  grid-template:
    "title title"
    "left-top right-top"
    "left-middle right-middle"
    "left-bottom right-bottom";
  grid-gap: 1px;
`;

export default InjectionGridView;

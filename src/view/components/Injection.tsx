import styled from "@emotion/styled";
import locale from "date-fns/locale/en-GB";
import React, { useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InjectionDay, InjectionPlace } from "../state/types";

export interface InjectionProps {
  position: InjectionPlace;
  day: InjectionDay;
  onChange(position: InjectionPlace, day: InjectionDay): void;
}

const Injection: React.FC<InjectionProps> = ({ day, position, onChange }) => {
  const change = useCallback(
    (date: Date) => {
      onChange(position, date);
    },
    [position, onChange]
  );

  return (
    <StyledInjection
      calendarContainer={Calendar}
      locale={locale}
      withPortal={true}
      selected={day}
      onChange={change}
    />
  );
};

const StyledInjection = styled(DatePicker)`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  font-family: Raleway, sans-serif;
  background: ${props => (props.selected ? "#e8f5e9" : "white")};
  border: 1px solid #aaa;
`;

const Calendar = styled.div`
  font-family: Raleway, sans-serif;
`;

export default Injection;

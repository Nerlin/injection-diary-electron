import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPage, removePage, setInjection } from "../state/actions";
import { BodyPart, InjectionDay, InjectionPlace, State } from "../state/types";
import Action from "./Action";
import Actions from "./Actions";
import Page from "./Page";
import Pages from "./Pages";

const Diary: React.FC = () => {
  const pages = useSelector((state: State) => state.pages);
  const dispatch = useDispatch();
  const onPageAdd = useCallback(() => {
    dispatch(newPage());
  }, []);

  const onPageChange = useCallback(
    (
      pageId: number,
      body: BodyPart,
      place: InjectionPlace,
      day: InjectionDay
    ) => {
      dispatch(setInjection(pageId, body, place, day));
    },
    []
  );

  const onPageRemove = useCallback((pageId: number) => {
    dispatch(removePage(pageId));
  }, []);

  return (
    <StyledDiary>
      <Actions>
        <Action onClick={onPageAdd}>Add page</Action>
      </Actions>

      <Pages>
        {pages.map(page => (
          <Page
            key={page.id}
            page={page}
            onChange={onPageChange}
            onRemove={onPageRemove}
          />
        ))}
      </Pages>
    </StyledDiary>
  );
};

const StyledDiary = styled.div`
  padding: 1em;
`;

export default Diary;

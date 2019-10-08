import React, { useCallback } from "react";
import { DiaryPage, BodyPart, InjectionPlace, InjectionDay } from "../state/types";
import styled from "@emotion/styled";
import Injections from "./Injections";
import Action from "./Action";
import Actions from "./Actions";

const Page: React.FC<{
  page: DiaryPage
  onChange(pageId: DiaryPage["id"], body: BodyPart, place: InjectionPlace, day: InjectionDay): void;
  onRemove(pageId: DiaryPage["id"]): void;
}> = ({ page, onChange, onRemove }) => {
  const change = useCallback((body: BodyPart, place: InjectionPlace, day: InjectionDay) => {
    onChange(page.id, body, place, day);
  }, [page, onChange]);

  const remove = useCallback(() => {
    if (confirm(`Do you really want to delete page #${page.id}?`)) {
      onRemove(page.id);
    }
  }, [page, onRemove]);

  return (
    <StyledDiaryPage>
      <PageId>#{page.id}</PageId>
      <InjectionRows>
        <Injections body={BodyPart.LeftArm} grid={page[BodyPart.LeftArm]} onChange={change} />
        <Injections body={BodyPart.RightArm} grid={page[BodyPart.RightArm]} onChange={change} />
        <Injections body={BodyPart.LeftLeg} grid={page[BodyPart.LeftLeg]} onChange={change} />
        <Injections body={BodyPart.RightLeg} grid={page[BodyPart.RightLeg]} onChange={change} />
        <Injections body={BodyPart.LeftBelly} grid={page[BodyPart.LeftBelly]} onChange={change} />
        <Injections body={BodyPart.RightBelly} grid={page[BodyPart.RightBelly]} onChange={change} />
        <Injections body={BodyPart.LeftButtock} grid={page[BodyPart.LeftButtock]} onChange={change} />
        <Injections body={BodyPart.RightButtock} grid={page[BodyPart.RightButtock]} onChange={change} />
      </InjectionRows>
      <Actions>
        <Action onClick={remove}>Remove page</Action>
      </Actions>
    </StyledDiaryPage>
  );
};

const StyledDiaryPage = styled.div`
  display: grid;
  grid-template:
    "pageId"
    "rows"
    "actions";
  margin: 0.5rem 0.35rem;
  border: 1px solid rgb(24, 117, 209);
`;

const InjectionRows = styled.div`
  display: grid;
  grid-template:
    "leftArm rightArm"
    "leftLeg rightLeg"
    "leftBelly rightBelly"
    "leftButtock rightButtock";
  padding: 1em;
  grid-gap: 1em;
`;

const PageId = styled.div`
  grid-area: pageId;
  font-weight: bold;
  background: rgb(24, 117, 209);
  color: white;
  padding: 3px;
`;

export default Page;

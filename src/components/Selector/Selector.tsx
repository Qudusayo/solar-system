import styled from "styled-components";

const Div = styled.div<{ active: boolean }>`
  width: 100% !important;
  padding: 1.25em;
  border: 1px solid #1e2d3d;
  margin: 1em 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? "#419EBB" : "transparent")};

  &:hover {
    background-color: #1e2d3d;
  }
`;

const Id = styled.span`
  font-size: 0.85em;
  color: #838391;
  font-weight: bolder;
`;

const Label = styled(Id)`
  padding-left: 1.25em;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
`;

export default function Selector({
  id,
  label,
  active = false,
  clickHandler,
}: {
  id: string;
  active: boolean;
  label: string;
  clickHandler: () => void;
}) {
  return (
    <Div onClick={clickHandler} active={active}>
      <Id>{id}</Id>
      <Label>{label}</Label>
    </Div>
  );
}

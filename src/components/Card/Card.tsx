import styled from "styled-components";

const Div = styled.div`
  padding: 1.25em;
  border: 1px solid #1e2d3d;
`;

const Span = styled.span`
  color: #38384f;
  display: block;
  margin-bottom: 0.5em;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.85em;
  }
`;

const H1 = styled.h1`
  font-size: 2.5em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export default function Card({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Div>
      <Span>{label}</Span>
      <H1>{value}</H1>
    </Div>
  );
}

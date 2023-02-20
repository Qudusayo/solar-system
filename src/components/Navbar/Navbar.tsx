import styled from "styled-components";
import { Link } from "react-router-dom";
import { Planets } from "../../types";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 0.1px solid #1e2d3d;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 2em;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
  }
`;

const Li = styled.li`
  text-transform: uppercase;
  font-size: 0.85em;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <Nav>
      <h2>The Planets</h2>
      <Ul>
        {[
          "mercury",
          "venus",
          "earth",
          "mars",
          "jupiter",
          "saturn",
          "uranus",
          "neptune",
        ].map((planet) => (
          <Li key={planet}>
            <Link to={planet}>{planet}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}

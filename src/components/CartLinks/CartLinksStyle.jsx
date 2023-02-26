import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

const Section2 = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid #f4f4f4;
`;

const Wrapper = styled.ul`
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text_container = styled.li``;
const Links = styled(Link)`
  color: #777;
  text-decoration: none;
  &:hover {
    color: #cc9966;
    cursor: pointer;
  }
`;

const Arrow = styled(IoChevronForwardOutline)`
  margin-top: 3px;
  color: #777;
`;

export { Section2, Wrapper, Text_container, Links, Arrow };

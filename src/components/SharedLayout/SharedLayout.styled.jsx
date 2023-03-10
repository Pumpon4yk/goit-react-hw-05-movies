import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
width: 1200px;
margin: 0 auto;
/* background-color: #00000011; */
padding-bottom: 20px;
`;

export const Header = styled.header`
padding: 30px;
border-bottom: 1px solid black;
box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.75);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  

  &.active {
    color: white;
    background-color: orangered;
  }
`;
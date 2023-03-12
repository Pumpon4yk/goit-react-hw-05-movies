import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
padding: 20px;
`;

export const Wraper = styled.div`
display: flex;
padding: 10px;
/* padding-top: 0; */
gap: 10px;
border-bottom: 1px solid #212121;
`;

export const Datails = styled.div`
display: flex;
flex-direction: column;
/* padding: 10px; */
/* padding-top: 0; */
gap: 10px;
border-bottom: 1px solid #212121;
`;

export const Text = styled.p`
display: inline-block;
margin-right: 5px;
`;

export const Img = styled.img`
width: 300px;
`;

export const Button = styled(NavLink)`
display: block;
border: 1px solid black;
border-radius: 5%;
margin-left: 10px;
padding: 3px;
text-align:center;
color: #212121;

width: 60px;
text-decoration: none;
`



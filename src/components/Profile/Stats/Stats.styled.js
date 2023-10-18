import styled from "styled-components";

export const StatsList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
padding: 0;
margin: 20px 0 0 0;
width: 100%;
list-style-type: none;
background-color: #c0c0c0;
`

export const Stat = styled.li`
width: calc(100% / 3);
padding: 15px 0;
border: 1px solid #808080;
`

export const Label = styled.span`
display: block;
text-align: center;
font-size: 14px;
color: #808080;
`

export const Amount = styled.span`
display:block;
text-align: center;
font-weight: bold;
`
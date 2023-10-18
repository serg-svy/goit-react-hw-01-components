import styled from "styled-components";

export const Table = styled.table`
border-collapse: collapse;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
width: 600px;
margin: 0 0 20px 20px;`

export const TitleEl = styled.td`
border: 1px solid #c0c0c0;
  padding: 12px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #04d4fe;
  color: #ffffff;`

export const Row = styled.tr`
&:nth-child(even){background-color: #f2f2f2;};`

export const StatisticEl = styled.th`
border: 1px solid #c0c0c0;
  padding: 8px;
  font-weight: normal;
  text-transform: capitalize;`
import React from "react";
import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import styled from 'styled-components';

const Table = ({ data, column }) =>
{
    
    return (
        <T>
            <thead>
                <tr>
                    { column.map((item, index) => <TableHeadItem item={ item } />) }
                </tr>
            </thead>
            <tbody>
                { data.map((item, index) => <TableRow item={ item } column={ column } />) }
            </tbody>
        </T>
    )
}

const T = styled.table`

	border-collapse:collapse;
	/* max-width: 900px; */
	width: 100%;
	margin: 2rem 20px;
`;



export default Table;

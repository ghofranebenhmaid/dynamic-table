import React from "react";

const TableRow = ({ item, column }) => (
    <tr>
        { column.map((columnItem, index) =>
        {

            if (columnItem.value.includes('.')) {
                const itemSplit = columnItem.value.split('.')
                return <td>{ item[itemSplit[0]][itemSplit[1]] }</td>
            }

            return <td>{ item[`${ columnItem.value }`] }</td>
        }) }
    </tr>
)

export default TableRow;
